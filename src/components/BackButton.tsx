import React from 'react'
import { useNavigate } from 'react-router-dom';


const BackButton = () => {
    const navigate = useNavigate();
  return (
    <div className='flex justify-start align-middle'>
                    <button onClick={() => navigate(-1)}>
                        <span className='inline-flex justify-center align-middle'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span>Inapoi</span>
                        </span>
                    </button>
                </div>
  )
}

export default BackButton;