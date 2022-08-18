import { useAuth0 } from '@auth0/auth0-react'
import { Disclosure, Transition } from '@headlessui/react'
import moment from 'moment'
import React from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { getOrderByUser } from '../api/orderApi'
import { Order } from '../interfaces/IOrder'
import LoadingBar from './LoadingBar'

const Orders = () => {

    const { user } = useAuth0();
    const { data, isFetching } = useQuery<Order[]>(["userOrders", user?.sub], async () => await getOrderByUser(user?.sub))

    const dateSort = (orderOne: Order, orderTwo: Order) => {
        if(orderOne.timeCreated > orderTwo.timeCreated){
            return -1;
        }
        return 1;
    }


    if (isFetching) {
        return <LoadingBar />
    }

    if(data && data?.length > 0) {
        return (
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="p-2 flex  justify-between border-2 border-gray-200 bg-zinc-100 hover:bg-zinc-100/50">
                            <span className='text-xl text-orange-700 mx-2'>Istoric comenzi</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`${open ? `rotate-180` : `text-zinc-600`} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                            </svg>
                        </Disclosure.Button>
                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform opacity-0"
                        >
                            <Disclosure.Panel className="flex flex-col p-2 text-gray-600 bg-slate-200 rounded-md shadow-sm">
                                <div className='flex space-y-2 flex-col md:grid md:grid-cols-3 md:space-x-4 md:space-y-4'>
                                    {data && data?.sort(dateSort).map(order => {
                                        return (
                                            <div key={order.id} className="flex flex-col justify-center items-center gap-4 font-semibold bg-slate-200 hover:bg-zinc-100 rounded-md transition-colors duration-150">
                                                <p>Comanda: {order.id}</p>
                                                <div className='flex flex-col space-y-4'>
                                                    <div className='bg-zinc-100 p-2 rounded-md shadow-sm hover:shadow-md transition-shadow duration-150'>
                                                        <p>Produse: </p>
                                                        {order.orderItems.map(orderItem => {
                                                            return (
                                                                <div key={orderItem.id} className="p-2">
                                                                    <p className='underline'>
                                                                        <Link to={`/products/${orderItem.productId}`}>
                                                                            {orderItem.product.name}
                                                                        </Link>
                                                                    </p>
                                                                </div>
                                                            )
                                                        })}
                                                        <p>Data comanda:  <span>{moment(order.timeCreated).format("MMMM D YYYY, h:mm:ss a")}</span></p>
                                                        <p className='my-2 '>Total: <span className='text-orange-700'>{order.totalPrice} RON</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>
        )
    }
    
    return (
        <>
        
        </>
    )
    
}

export default Orders