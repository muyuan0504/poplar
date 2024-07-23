import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const HomeIndex = () => {
    const navigate = useNavigate()
    const handleNav = (route) => {
        return navigate(route || 'error')
    }
    return (
        <>
            <div onClick={() => handleNav('upload')}>跳转到上传页面</div>
            <div className='flex-box'>home index</div>
            <Outlet />
        </>
    )
}

export default HomeIndex
