import React, { useState, useCallback, useEffect, ChangeEvent } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { mapAction } from '../redux/map/index';
import logistic from '../assets/svgs/logistic.svg';
import { geo } from '../redux/map/mapReducer';
import { AppState } from '../redux/index';
import { fetchLocation } from '../redux/map/mapAction';
import { fetchOrder } from '../redux/order/orderAction';
import moment from 'moment';

const TrackScreen = () => {
    const dispatch = useDispatch();
    const [map, setMap] = useState(null);
    const [orderId, setOrderId] = useState<string>('');
    const [time, setTime] = useState<string>('');
    // ************************** State **************************
    const { geolocation } = useSelector((state: AppState) => state.mapReducer);
    const { order } = useSelector((state: AppState) => state.orderReducer);
    // **************************

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_JS_MAP_API_KEY as string,
    });
    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map);
    }, []);
    const onUnmount = useCallback(function callback(map) {
        setMap(null);
    }, []);

    // ************************** Event Handlers **************************
    const press = () => {
        dispatch(fetchOrder(orderId));
    };
    // **************************

    useEffect(() => {
        console.log(order);
        if (order?.data?.creationTimeStamp) {
            setTime(moment(order?.data?.creationTimeStamp).format('MMMM Do YYYY, h:mm:ss a'));
        }
        if (
            order?.data?.currentLocation !== null &&
            order?.data?.currentLocation !== undefined &&
            order?.data?.currentLocation !== ''
        ) {
            dispatch(fetchLocation(order?.data?.currentLocation));
        }
    }, [dispatch, order, time]);

    return (
        <div className="flex justify-center items-center my-[50px]">
            <div className="flex flex-col bg-slate-100 h-[75vh] w-[70vw] items-center">
                <div className=" flex flex-row justify-center items-center my-[50px] w-[80vw]">
                    <input
                        type="text"
                        placeholder="Enter your location"
                        className=" outline-none py-3 px-2 mr-1 bg-gray-200 hover:bg-gray-300 font-light w-[50vw] "
                        value={orderId}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setOrderId(e.target.value)}
                    />
                    <button onClick={press} className="bg-[#024E82] py-3 px-2 text-white font-light">
                        Search
                    </button>
                </div>
                {isLoaded && 'lat' in geolocation ? (
                    <div className="flex flex-row item-center justify-center">
                        <GoogleMap
                            mapContainerStyle={{
                                width: '28vw',
                                height: '400px',
                            }}
                            center={geolocation}
                            zoom={10}
                            onLoad={onLoad}
                            onUnmount={onUnmount}
                        >
                            <Marker position={geolocation as any} />
                        </GoogleMap>
                        <div className="flex flex-col justify-center ml-10">
                            <h1 className="font-semibold text-2xl">Order ID: {order.data.id}</h1>
                            <h1 className="my-7 font-semibold text-lg">Here is your Order Status: </h1>
                            <div className="flex flex-col items-center">
                                <div className="flex flex-row font-light">
                                    <button
                                        className={`${
                                            order.data.status === 'pending' ? 'bg-[#024E82]' : `bg-gray-300`
                                        } relative py-4 px-[2rem] text-white rounded mr-10 w-[149px] h-[56px] font-light`}
                                    >
                                        Pending
                                        <div className="absolute flex flex-col items-center top-[113%] left-[50%]">
                                            <div className="dot h-[5px] w-[5px] rounded-full bg-gray-400 inline-block mb-[10px]"></div>
                                            <div className="dot h-[5px] w-[5px] rounded-full bg-gray-400 inline-block mb-[10px]"></div>
                                            <div className="dot h-[5px] w-[5px] rounded-full bg-gray-400 inline-block mb-[10px]"></div>
                                            <div className="dot h-[5px] w-[5px] rounded-full bg-gray-400 inline-block"></div>
                                        </div>
                                    </button>
                                    <div
                                        className={`${
                                            order.data.status === 'pending' ? 'text-[#024E82]' : 'text-gray-300'
                                        } flex flex-col w-[275px] `}
                                    >
                                        {order.data.status === 'pending' && (
                                            <>
                                                <p>{time}</p>
                                                <p>Your order are pending to send.</p>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-row my-16 font-light">
                                    <button
                                        className={`${
                                            order.data.status === 'shipping' ? `bg-[#024E82]` : `bg-gray-300`
                                        } relative py-4 px-[2rem]  text-white rounded mr-10 w-[149px] h-[56px] font-light`}
                                    >
                                        Shipping
                                        <div className="absolute flex flex-col items-center top-[110%] left-[50%] justify-center">
                                            <div className="dot h-[5px] w-[5px] rounded-full bg-gray-400 inline-block mb-[10px]"></div>
                                            <div className="dot h-[5px] w-[5px] rounded-full bg-gray-400 inline-block mb-[10px]"></div>
                                            <div className="dot h-[5px] w-[5px] rounded-full bg-gray-400 inline-block mb-[10px]"></div>
                                            <div className="dot h-[5px] w-[5px] rounded-full bg-gray-400 inline-block mb-[10px]"></div>
                                            <div className="dot h-[5px] w-[5px] rounded-full bg-gray-400 inline-block"></div>
                                        </div>
                                    </button>
                                    <div
                                        className={`${
                                            order.data.status === 'shipping' ? `text-[#024E82]` : 'text-gray-300'
                                        } flex flex-col w-[275px] `}
                                    >
                                        {order.data.currentLocation !== null && order.data.status === 'shipping' && (
                                            <>
                                                <p>{time}</p>
                                                <p> arrived at : {order.data.currentLocation}.</p>
                                            </>
                                        )}
                                    </div>
                                </div>

                                <div className="flex flex-row font-light">
                                    <button
                                        className={`${
                                            order.data.status === 'completed' ? 'bg-[#024E82]' : `bg-gray-300`
                                        } py-4 px-[2rem]  text-white rounded mr-10 w-[149px] h-[56px] font-light`}
                                    >
                                        Completed
                                    </button>
                                    <div
                                        className={`${
                                            order.data.status === 'completed' ? 'text-[#024E82]' : 'text-gray-300'
                                        } flex flex-col w-[275px] `}
                                    >
                                        {order.data.currentLocation !== null && order.data.status === 'completed' && (
                                            <>
                                                <p>{time}</p>
                                                <p>Order has already been sent to {order.data.currentLocation}.</p>
                                                <p>Order has been received.</p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : order.data.status === 'pending' ? (
                    <div className="flex flex-col justify-center">
                        <h1 className="font-semibold text-2xl">Order Id: {order.data.id}</h1>
                        <h1 className="my-7 font-semibold text-lg">Here is your Order Status: </h1>
                        <div className="flex flex-col items-center">
                            <div className="flex flex-row font-light">
                                <button
                                    className={`${
                                        order.data.status === 'pending' && 'bg-[#024E82]'
                                    } relative py-4 px-[2rem]  text-white rounded mr-10 w-[149px] h-[56px] font-light`}
                                >
                                    Pending
                                    <div className="absolute flex flex-col items-center top-[113%] left-[50%]">
                                        <div className="dot h-[5px] w-[5px] rounded-full bg-gray-400 inline-block mb-[10px]"></div>
                                        <div className="dot h-[5px] w-[5px] rounded-full bg-gray-400 inline-block mb-[10px]"></div>
                                        <div className="dot h-[5px] w-[5px] rounded-full bg-gray-400 inline-block mb-[10px]"></div>
                                        <div className="dot h-[5px] w-[5px] rounded-full bg-gray-400 inline-block"></div>
                                    </div>
                                </button>
                                <div
                                    className={`${
                                        order.data.status === 'pending' && 'text-[#024E82]'
                                    }flex flex-col w-[275px] `}
                                >
                                    {order.data.status === 'pending' && (
                                        <>
                                            <p>{time}</p>
                                            <p>Your order are pending to send.</p>
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-row my-16 font-light">
                                <button
                                    className={`${
                                        order.data.status === 'shipping' && 'bg-[#024E82]'
                                    } relative py-4 px-[2rem] bg-gray-300 text-white rounded mr-10 w-[149px] h-[56px] font-light`}
                                >
                                    Shipping
                                    <div className="absolute flex flex-col items-center top-[110%] left-[50%] justify-center">
                                        <div className="dot h-[5px] w-[5px] rounded-full bg-gray-400 inline-block mb-[10px]"></div>
                                        <div className="dot h-[5px] w-[5px] rounded-full bg-gray-400 inline-block mb-[10px]"></div>
                                        <div className="dot h-[5px] w-[5px] rounded-full bg-gray-400 inline-block mb-[10px]"></div>
                                        <div className="dot h-[5px] w-[5px] rounded-full bg-gray-400 inline-block"></div>
                                    </div>
                                </button>
                                <div
                                    className={`${
                                        order.data.status === 'shipping' && 'bg-[#024E82]'
                                    } flex flex-col w-[275px] text-gray-300`}
                                >
                                    {order.data.currentLocation !== null && order.data.status === 'shipping' && (
                                        <>
                                            <p>{time}</p>
                                            <p>Order has been sent to {order.data.currentLocation}.</p>
                                        </>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-row font-light">
                                <button
                                    className={`${
                                        order.data.status === 'completed' && 'bg-[#024E82]'
                                    } py-4 px-[2rem] bg-gray-300 text-white rounded mr-10 w-[149px] h-[56px] font-light`}
                                >
                                    Completed
                                </button>
                                <div
                                    className={`${
                                        order.data.status === 'completed' && 'bg-[#024E82]'
                                    }flex flex-col w-[275px] text-gray-300`}
                                >
                                    {order.data.currentLocation !== null && order.data.status === 'completed' && (
                                        <>
                                            <p>{time}</p>
                                            <p>Order has already been sent to {order.data.currentLocation}.</p>
                                            <p>Order has been received.</p>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col justify-center items-center">
                        <img src={logistic} alt="logistic" style={{ height: '200px', marginTop: '100px' }} />
                        <p className="text-sm text-gray-400 w-[300px] text-center">
                            There is no waybill at the moment, please input your order id to search current location.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrackScreen;
