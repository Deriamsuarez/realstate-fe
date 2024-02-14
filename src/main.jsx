import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider as StoreProvider } from "react-redux";
// import { QueryClient, QueryClientProvider } from "react-query";
import { persistor, store } from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from 'react-toastify';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import 'react-toastify/dist/ReactToastify.css';


// const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
          {/* <QueryClientProvider client={queryClient}> */}
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          {/* </QueryClientProvider> */}
        </PersistGate>
      </StoreProvider>
    </BrowserRouter>
    <ToastContainer />
  </React.StrictMode>
);
