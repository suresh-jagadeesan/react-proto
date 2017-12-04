import 'babel-polyfill';
import express from 'express';
import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import { matchRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';
import App from './client/App';
import routes from './client/routes';
import store from './client/store';
import serialize from 'serialize-javascript';

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
    let context = {};

    const promises = matchRoutes(routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });


    Promise.all(promises).then(() => {
        const helmet = Helmet.renderStatic();

        const content = renderToString(
            <StaticRouter location={req.path} context={context}>
                <Provider store={store}>
                    <App/>
                </Provider>
            </StaticRouter>
        );
                
        const html = `
            <!doctype html>
            <html>
                <head>
                    ${helmet.title.toString()}
                </head>
                <body>
                    <div id="root">${content}</div>
                    <script>
                        window.INITIAL_STATE = ${serialize(store.getState())}
                    </script>  
                    <script src="bundle.js"></script>
                </body>
            </html>
        `;
                
            
        if (context.url) {
            return res.redirect(301, context.url);
        }
        if (context.notFound) {
            res.status(404);
        }
            
        res.send(html);
    });
});


app.listen(3000, () => console.log('server listening on port 3000'));