import Loading from "./core/component/loading";
import React, { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { store } from "./redux/stores";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const RouteRender = lazy(() => import("./core/routes/index"));
let persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<Loading loading={true} isFallback={true} />}>
          <BrowserRouter>
            <RouteRender />
          </BrowserRouter>
        </Suspense>
      </PersistGate>
    </Provider>
  );
}

export default App;
