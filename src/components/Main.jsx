import React, { useState } from 'react'
import Screen from './Screen'
import ScreenTabs from './ScreenTabs'
import TableComponent from './TableComponent'

const Main = () => {
    const [showTable1, setShowTable1] = useState(true);
    const toggleTable = () => {
        setShowTable1(true);
    };
    const toggleTableClose = () => {
        setShowTable1(false);
    };
  return (
    <div>
        <Screen>
        <ScreenTabs showTable1={showTable1} toggleTable={toggleTable} toggleTableClose={toggleTableClose}/>
        <TableComponent showTable1={showTable1}/>
      </Screen>
    </div>
  )
}

export default Main