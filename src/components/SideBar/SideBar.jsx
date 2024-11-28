import React, { useEffect, useState } from 'react'
import {
    CBadge,
    CNavGroup,
    CNavItem,
    CNavTitle,
    CSidebar,
    CSidebarBrand,
    CSidebarHeader,
    CSidebarNav,
    CSidebarToggler,
  } from '@coreui/react';
  import { cilUser, cilHouse, cilHighlighter, cilLibraryAdd } from '@coreui/icons';
  import CIcon from '@coreui/icons-react';
  import styles from '../../sass/pages/Admin.module.scss'

const SideBar = () => {
    const [visible, setVisible] = useState(true);

    const toggleSidebar = () => {
      setVisible(!visible);
    };
    useEffect(() => {
        import('@coreui/coreui/dist/css/coreui.min.css');
      }, []);
  return (
    <div className={styles['sidebar-container']}>
        <CSidebar className="border-end" style={{height: "100vh"}}>
          <CSidebarHeader className="border-bottom">
              <CSidebarBrand>HUGO BOSS</CSidebarBrand>
          </CSidebarHeader>
          <CSidebarNav>
            <CNavTitle>ADMIN DASHBOARD</CNavTitle>
            <CNavItem href={`/admin/dashboard`}><CIcon customClassName="nav-icon" icon={cilHouse} />HOME <CBadge color="primary ms-auto">NEW</CBadge></CNavItem>
            <CNavGroup
              toggler={
                <>
                  <CIcon customClassName="nav-icon" icon={cilLibraryAdd} />ADD DATA
                </>
              }
            >
            <CNavItem href={`/admin/addproduct`}><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Products</CNavItem>
            <CNavItem href={`/admin/addimage`}><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Images</CNavItem>
            <CNavItem href={`/admin/addvideo`}><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Videos</CNavItem>
            </CNavGroup>
            <CNavGroup
              toggler={
                <>
                  <CIcon customClassName="nav-icon" icon={cilHighlighter} />EDIT DATA
                </>
              }
            >
            <CNavItem href={`/admin/editproduct`}><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Products</CNavItem>
            <CNavItem href={`/admin/editimage`}><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Images</CNavItem>
            <CNavItem href={`/admin/editvideo`}><span className="nav-icon"><span className="nav-icon-bullet"></span></span>Videos</CNavItem>
            </CNavGroup>
            <CNavItem href={`/admin/users`}><CIcon customClassName="nav-icon" icon={cilUser} />USERS</CNavItem>
            </CSidebarNav>
            <CSidebarHeader className="border-top">
            <CSidebarToggler /> 
            </CSidebarHeader>
        </CSidebar>
      </div>
  )
}

export default SideBar