import React from 'react'

const Screen = ({children}) => {
  return (
    <div>
        <div className='border px-5 py-2 w-full bg-gray-300 rounded-md shadow-md shadow-gray-200'>
            {children}
        </div>
    </div>
  )
}

export default Screen