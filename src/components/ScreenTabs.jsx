import React from 'react'

const ScreenTabs = ({ showTable1, toggleTable, toggleTableClose }) => {
    let active = 'py-2 px-5 bg-gray-400 rounded-t-lg'
    let inActive = 'py-2 px-5 bg-gray-300 rounded-t-lg shadow-inner shadow-gray-500'
    return (
        <div >
            <div className='flex'>
                <div>
                    <button className={!showTable1 ? active : inActive} onClick={toggleTable}>
                        Screen 1
                    </button>
                </div>
                <div>
                    <button className={showTable1 ? active : inActive} onClick={toggleTableClose}>
                        Screen 2
                    </button>
                </div>

            </div>
            
        </div>
    )
}

export default ScreenTabs