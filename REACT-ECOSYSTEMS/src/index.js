import React from 'react';
//import ReactDOM, {render} from 'react-dom';
import {createRoot} from 'react-dom/client'
import App from './App.js';
import { Provider } from 'react-redux';
import { configureStore } from './store.js';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';

// ReactDOM.render(
//     <Provider store={configureStore()}>
//         <App />
//     </Provider>
// ,
//  document.getElementById('root'))

const store = configureStore();
const persistor = persistStore(store);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Provider store={store}>
    <PersistGate loading={<div>....loading</div>} persistor={persistor}>
    <App />
    </PersistGate>
</Provider>)