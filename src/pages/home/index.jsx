import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const HomeIndex = () => {
    const navigate = useNavigate()
    const handleNav = (route) => {
        return navigate(route || 'error')
    }
    return (
        <div className='page-contain'>
            <div className='flex-box'>home index</div>
            <div onClick={() => handleNav('editor')}>跳转到富文本页面</div>
            <div onClick={() => handleNav('upload')}>跳转到上传页面</div>
            <Outlet />
        </div>
    )
}

export default HomeIndex
