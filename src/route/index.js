import React from 'react'

import PageHome from '@/pages/home/index'
import PageUpload from '@/pages/upload/index'

const routes = [
    {
        path: '/',
        element: <PageHome />,
        children: [
            {
                path: 'upload',
                element: <PageUpload />,
            },
        ],
    },
]

export default routes
