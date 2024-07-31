import React from 'react'

import PageHome from '@/pages/home/index'
import PageEditor from '@/pages/editor/index'
import PageUpload from '@/pages/upload/index'

const routes = [
    {
        path: '/',
        element: <PageHome />,
        children: [
            {
                path: 'editor',
                element: <PageEditor />,
            },
            {
                path: 'upload',
                element: <PageUpload />,
            },
        ],
    },
]

export default routes
