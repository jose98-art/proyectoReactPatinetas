import React from 'react'
import {Outlet} from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';

const PageTablas = () => {
  return (
    <div>
      <ItemListContainer/>
      <Outlet/>
    </div>
  )
}

export default PageTablas
