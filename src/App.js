import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Switch } from "react-router-dom";
import React from "react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./util/misc";
import Navbar from "./components/Navbar/Navbar";
import { Home, Category, Post } from "./util/pagesImports";
import Error404 from "./pages/Error404/Error404";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Switch>
        <Route exact strict path="/" component={Home} />
        <Route exact path="/post/:title" component={Post} />
        <Route exact path="/category/:categoryName" component={Category} />
        <Route component={Error404} />
      </Switch>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
