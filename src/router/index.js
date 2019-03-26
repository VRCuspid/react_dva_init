import React from 'react';
import {Router} from 'dva/router';
import RouterView from './routersMap';
import routers from './routers';
const router = ({history})=>{
    return <Router history={history}>
        {
            RouterView(routers)
        }
    </Router>
}

export default router