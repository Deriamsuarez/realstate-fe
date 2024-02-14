import { Route, Routes } from "react-router-dom";
import routes from "./routes/index.routes";
// import { QueryClient, QueryClientProvider } from "react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        {routes().map((route) => {
          return (
            <Route path={route.path} key={route.path} element={<route.view />} />
          );
        })}
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
