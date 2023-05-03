import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <div>
                <h3>Layout menu</h3>
                <ul>
                    <li>
                        <Link to={'todos'}>Todos page</Link>
                    </li>
                    <li>
                        <Link to={'albums'}>Albums page</Link>
                    </li>
                    <li>
                        <Link to={'comments'}>Comments page</Link>
                    </li>
                </ul>
            </div>

            <div>
                <h4>Sub view</h4>
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;