import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Routes from "./Routes/Routes";

function App() {
  const router = createBrowserRouter(Routes);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
