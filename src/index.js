import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from "./Redux/store";
import {Provider} from "react-redux";
import bridge from '@vkontakte/vk-bridge';
import {AdaptivityProvider, ConfigProvider} from "@vkontakte/vkui";
bridge.send("VKWebAppInit");


ReactDOM.render(
    <Provider store={store}>
        <ConfigProvider>
            <AdaptivityProvider>
                <App />
            </AdaptivityProvider>
        </ConfigProvider>,
    </Provider>
    , document.getElementById("root"));

if (process.env.NODE_ENV === "development") {
    import("./eruda").then(({ default: eruda }) => {}); //runtime download
}

// Отменить выделение
document.getElementById("root").onselectstart = function() {
    return false;
};

