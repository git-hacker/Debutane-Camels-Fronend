import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import store from './store'

const startApp = () => {
    ReactDOM.render(
        <Provider store={store}>
            <HashRouter  basename="" >
                <App />
            </HashRouter>
        </Provider>,
        document.querySelector('#root')
    )
}
startApp()

//registerServiceWorker();
