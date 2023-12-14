import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  registeruser,
  loading,
  selectLoading,
  selectIsAuthenticated,
  loadingoff,
} from "../utils/authSlice";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import { useEffect, useState } from "react";

const Login = () => {
  const [apiError, setapiError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading2 = useSelector(selectLoading);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const { handleSubmit, formState, register } = useForm();
  const { errors } = formState;

  const handleLogin = async (data) => {
    const { email, password } = data;

    try {
      dispatch(loading());
      const res = await fetch("http://localhost:1337/api/auth/local", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          identifier: email,
          password: password,
        }),
      });

      if (res.ok) {
        const { user, jwt } = await res.json();
        dispatch(registeruser({ user, jwt }));
        navigate("/dashboard");
      }

      if (!res.ok) {
        dispatch(loadingoff());
        const loginError = await res.json();
        setapiError(loginError?.error?.message);
        setTimeout(() => {
          setapiError("");
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated]);

  const onError = (errors) => {};

  return (
    <>
      {loading2 ? (
        <Spinner />
      ) : (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <div className="flex justify-center mb-6">
              <span className="inline-block bg-gray-200 rounded-full p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
                  />
                </svg>
              </span>
            </div>
            <h2 className="text-2xl font-semibold text-center mb-4">
              Login to your account
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Enter your valid credentials to login.
            </p>
            <form onSubmit={handleSubmit(handleLogin, onError)}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                  placeholder="hello@alignui.com"
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  })}
                />
                {errors?.email?.message && (
                  <p className="p-1 mb-1 text-sm text-red-800 rounded-lg dark:bg-gray-800 dark:text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                  placeholder="••••••••"
                  {...register("password", {
                    required: "This field is required",
                  })}
                />
                {errors?.password?.message && (
                  <p className="p-1 mb-1 text-sm text-red-800 rounded-lg dark:bg-gray-800 dark:text-red-400">
                    {errors.password.message}
                  </p>
                )}
              </div>
              {apiError && (
                <p className="p-1 mb-1 text-sm text-red-800 rounded-lg dark:bg-gray-800 dark:text-red-400">
                  {apiError}
                </p>
              )}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Login
              </button>
            </form>

            <div className="mt-4 text-center text-sm text-gray-500">
              Not a member?
              <p className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-1 inline">
                <Link to="/register">Click here to register</Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
