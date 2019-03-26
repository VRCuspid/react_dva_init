import React from 'react';
import {Route,Switch} from 'dva/router';

const RouterView = (routers)=>{
    return <Switch>
        {
            routers.map((item,i)=>{
                return <Route path={item.path} exact={item.exact}  render={(match)=>{
                    return <item.component {...match} routers={item.routers} />
                }}  />
            })
        }
    </Switch>
}

export default RouterView;