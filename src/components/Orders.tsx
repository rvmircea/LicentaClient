import { useAuth0 } from '@auth0/auth0-react'
import { Disclosure, Transition } from '@headlessui/react'
import React from 'react'
import { useQuery } from 'react-query'
import { getOrderByUser } from '../api/orderApi'
import { Order, OrderItem } from '../interfaces/IOrder'
import LoadingBar from './LoadingBar'

const Orders = () => {

    const { user } = useAuth0();
    const { data, isFetching } = useQuery<Order[]>(["userOrders", user?.sub], async () => await getOrderByUser(user?.sub))

    if (isFetching) {
        return <LoadingBar />
    }

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
                        <Disclosure.Panel className="flex flex-col p-2 text-gray-600 bg-zinc-50">

                            <div className='flex space-y-2 flex-col'>
                                {data && data?.map(order => {
                                    return (
                                        <div key={order.id} className="flex space-x-2">
                                            <p>Comanda: {order.id}</p>
                                            <div className='flex flex-col space-y-2'>
                                                <div>
                                                    {order.orderItems.map(orderItem => {
                                                        return (
                                                            <div key={orderItem.id}>
                                                                <div className='bg-red-200'>
                                                                    {orderItem.product.name}
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
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

export default Orders