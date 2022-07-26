import { Disclosure, Transition } from '@headlessui/react';
import React from 'react'
import { useQuery } from 'react-query'
import { getProducers } from '../api/producersApi'
import LoadingBar from '../components/LoadingBar';
import { Producer } from '../interfaces/IProductList';

export const ProducersPage = () => {

  const { data, isLoading, isError, error } = useQuery<Producer[]>("producers", getProducers);

  if (isError) {
    console.error(error);
    return <div>
      <h1>Eroare la primirea datelor</h1>
    </div>
  }

  if (isLoading) {
    return <LoadingBar />
  }

  if (data) {
    return (
      <>
        
        <main className='flex justify-center align-middle mt-40 bg-white z-0'>
          <div className="w-4xl mx-auto py-4 px-4 sm:py-8 sm:px-6 lg:w-7xl lg:px-6 border-t-2 border-t-zinc-100 shadow-md">
          <p className='text-2xl font-bold text-orange-700 mb-8'>Lista cu producatorii noștrii: </p>
            <section className='grid justify-items-stretch gap-y-4 sm:grid-cols-2 xl:gap-x-6 sm:gap-y-8'>
              {data ? data.map(producer => (
                <article key={producer.id} className="rounded-md p-2">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex justify-between align-middle p-2 rounded-md text-md font-semibold text-orange-700 md:text-lg md:font-extrabold shadow-md hover:bg-orange-50 border-t-zinc-100">
                          <span className='mr-2'>{producer.name}</span>
                          
                          <svg xmlns="http://www.w3.org/2000/svg" className={`${open ? `rotate-180 text-zinc-500` : `text-zinc-600`} h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                          </svg>
                        </Disclosure.Button>
                        <Transition
                          enter="transition duration-100 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          <Disclosure.Panel className=" rounded-md mt-2 text-md font-semibold shadow-md border-2 border-t-zinc-100">
                            <div className='flex flex-col justify-start align-middle p-2'>
                              <h1> <span className='underline'>Denumire</span>: {producer.name} - {producer.description}</h1>
                              <p><span className='underline'>Fondat</span>: {producer.yearFounded}</p>
                              <p><span className='underline'>Adresa</span>: {producer.producerAddress.address} {producer.producerAddress.city} </p>
                              <p><span className='underline'>Cod poștal</span>: {producer.producerAddress.zipCode}</p>
                            </div>
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                </article>
              )) : <>Nici un producator</>}
            </section>
          </div>
        </main>
      </>
    )
  }

  return (<h1>Nu au fost gasiti producatori</h1>)

}
