import 'babel-polyfill'
var express = require("express");
import React from 'react';
import ReactDomServer from 'react-dom/server';
import {StaticRouter} from 'react-router'
import App from './src/app';
import bodyParse from 'body-parser'; 
import { Provider as ReduxProvider } from 'react-redux'

var app = express();
var PORT = 3000;

import configureStore from './src/store/configureStore';

app.use(bodyParse.json());
app.use(express.static('build/public'));

app.get('*', function(req,res){
    const context ={}
    const store = configureStore();
    const content = ReactDomServer.renderToString(

        <ReduxProvider store={store}>
            <StaticRouter location={req.url} context={context}>
                <App/>
            </StaticRouter>
        </ReduxProvider>

    );

    const reduxState = JSON.stringify(store.getState());

    const html = `<html>
    <head>
    </head>
    <body>
    <div id="root">
        ${content}
    </div>
    <script type="text/javascript" charset="utf-8">
        window.REDUX_STATE = "__SERVER_REDUX_STATE__";
    </script>
    <script src="client_bundle.js"></script>
    </body>
    </html>`.replace('"__SERVER_REDUX_STATE__"', reduxState);
    res.send(html);
})


app.listen(PORT, function(){
    console.log("App running:"+ PORT)
})