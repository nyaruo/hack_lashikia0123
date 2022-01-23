import ComponentA from '../components/ComponentA'
import Layout from '../components/Layout'
import Login from '../components/Login'
import Chat from '../components/Chat'

export const routePath = [
    { path: '/login', element: <Login /> },
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Chat />,
            },
            {
                path: '/component-a',
                element: <ComponentA />,
            },
        ],
    },
]