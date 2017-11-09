import './assets/stylesheets/styles.scss';
import React from 'react'; // import the main react dependency
import ReactDOM from 'react-dom'; // import reactDOM
import { Provider } from 'react-redux'; // Glue for react and redux
import Store from './Store'; //redux state store
import App from './app/App'; // import the main app component

ReactDOM.render(
    <Provider store={Store}> 
        <App /> 
    </Provider>,
    document.getElementById('root') //mount it to our #root element

); 