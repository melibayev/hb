import React from 'react'
import SideBar from '../SideBar/SideBar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <>
    <SideBar/>
    <Outlet />
    </>
  )
}

export default AdminLayout