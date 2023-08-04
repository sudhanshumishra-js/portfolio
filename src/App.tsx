import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import RouterComponent from "./router/Router";
import "./style.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { throttle } from "lodash";

// type ScrollPosition = number | undefined;
const queryClient = new QueryClient();

const App = () => {
  //   const [y, setY] = React.useState<ScrollPosition>(window.scrollY);
  //   React.useEffect(() => {

  //   }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <RouterComponent />
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
