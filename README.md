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

- in sidebar, use usestate for toggle
- in register/login, use Link from react-router-dom and toggle between 2 pages. Other approach was to handle it through use state and conditional rendering
- we can play with classname also to handle toggle
  className={`text-sm ${openSidebar ? "rotate-180" : "rotate-0"}`}

# build react hook form with useref and make a reusable component

- form validation raw method
  const handleSubmit = (e) => {
  e.preventDefault();
  const passwordPattern = /^(?=._[0-9])(?=._[a-zA-Z])(?=._[!@#$%^&_])[a-zA-Z0-9!@#$%^&*]{8,20}$/;

          if (!passwordPattern.test(password)) {
            setPasswordError("Password requirements: 8-20 characters, 1 number, 1 letter, 1 symbol.");
            return;
          }
          // setPasswordError("");
          alert("The email address and password are " + email + " and " + password + " respectively.");
        };

- validation through react-hook-form
