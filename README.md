- Installed Vite
- Installed Strapi as backend
- install tailwind
- install react-router-dom
  - wrap app js in router provider
- create pages
- create index.js in pages for single export

# used LINK element from react router

- go back to app.js and change routes
- put children components in nested route & add <OUTLET> in Homelayout
- added index:true in children

```
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Error,
  HomeLayout,
  Register,
  Login,
  About,
  Dashboard,
  Landing,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;

```
