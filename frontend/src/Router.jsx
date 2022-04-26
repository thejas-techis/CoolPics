import React from 'react';
import { Route, Switch } from 'react-router';
import Category from './containers/Category';
import Favorite from './containers/Favorite';
import Home from './containers/Home';
import Preview from './containers/Preview';
import Search from './containers/Search';

const Router = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/category'} component={Category} />
                <Route exact path={'/favorite'} component={Favorite} />
                <Route exact path={'/preview'} component={Preview} />
                <Route exact path={'/search'} component={Search} />
            </Switch>
        </>
    );
};
export default Router;
