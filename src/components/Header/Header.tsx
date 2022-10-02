import {FC} from "react";
import {Link, Outlet} from 'react-router-dom';

const navigate = [
    {
        name: 'Main',
        path: '/',
    },
    {
        name: 'Chats',
        path: '/chats',
    },
    {
        name: 'Profile',
        path: '/profile',
    }
]

export const Header: FC = () => {
    return (
        <>
            <header>
                <ul>{navigate.map((item,idx) => (
                    <li key={idx}>
                        <Link to={item.path}>{item.name}</Link>
                    </li>
                ))}</ul>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}
