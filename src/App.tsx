import React from "react";
import { ConfigProvider, theme } from "antd";
import MyLayout from "./widget/Layout/Layout";
import Routing from "./page";
import { Provider } from "react-redux";
import { setupStore } from "./app/store/store";
import { useAppSelector } from "./app/store/hook";
import TokenWrapper from "./features/tokenWrapper/TokenWraper";

const store = setupStore();

const App: React.FC = () => {


    return (
        <Provider store={store}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#00b96b",
                        colorInfo: "#00b96b",
                    },
                    algorithm: theme.darkAlgorithm,
                }}
            >
                <MyLayout>
                    <Routing />
                </MyLayout>
            </ConfigProvider>
            <TokenWrapper/>
        </Provider>
    );
};

export default App;
