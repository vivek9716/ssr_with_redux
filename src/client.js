import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './app';
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from './store/configureStore';
import Loadable from 'react-loadable';

const store = configureStore();

const AppBundle = (
    <ReduxProvider store={store}>
        <BrowserRouter>
        	<App/>
    	</BrowserRouter>
    </ReduxProvider>
);

window.onload = () => {
    Loadable.preloadReady().then(() => {
        ReactDOM.hydrate(
            AppBundle,
            document.getElementById('root')
        );
    });
};