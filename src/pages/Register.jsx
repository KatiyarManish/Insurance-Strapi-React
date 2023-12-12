import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registeruser, loading, selectLoading } from "../utils/authSlice";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading2 = useSelector(selectLoading);
  const { register, handleSubmit, formState, getValues, setError } = useForm();
  const { errors } = formState;

  const handleRegister = async (data) => {
    const { fullName, email, password } = data;

    try {
      dispatch(loading());
      const res = await fetch("http://localhost:1337/api/auth/local/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: fullName,
          email: email,
          password: password,
        }),
      });
      console.log(res);
      if (res.ok) {
        const { user, jwt } = await res.json();
        dispatch(registeruser({ user, jwt }));
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onError = (errors) => {
    console.log(errors);
  };
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
              Create a new account
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Enter your details to register.
            </p>
            <form onSubmit={handleSubmit(handleRegister, onError)}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                  placeholder="James Brown"
                  {...register("fullName", {
                    required: "This field is required",
                    minLength: {
                      value: 2,
                      message: "Name should be greater than 2 characters",
                    },
                    maxLength: {
                      value: 10,
                      message: "Name should be not greater than 10 characters",
                    },
                  })}
                />
                {errors?.fullName?.message && (
                  <p className="p-1 mb-1 text-sm text-red-800 rounded-lg dark:bg-gray-800 dark:text-red-400">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
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
                <label className="block text-gray-700 text-sm font-semibold mb-2">
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
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-semibold mb-2">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  id="confirmpassword"
                  className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
                  placeholder="••••••••"
                  {...register("confirmpassword", {
                    required: "This field is required",
                    validate: (value) =>
                      value === getValues().password ||
                      "Password should be same",
                  })}
                />
                {errors?.confirmpassword?.message && (
                  <p className="p-1 mb-1 text-sm text-red-800 rounded-lg dark:bg-gray-800 dark:text-red-400">
                    {errors.confirmpassword.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Register
              </button>
              {errors.apiError && (
                <div className="alert alert-danger mt-3 mb-0">
                  {errors.apiError?.message}
                </div>
              )}
              <p className="text-gray-600 text-xs text-center mt-4">
                By clicking Register, you agree to accept Insu@tech
                <a href="#" className="text-blue-500 hover:underline ml-1">
                  Terms and Conditions
                </a>
              </p>
            </form>

            <div className="mt-4 text-center text-sm text-gray-500">
              Already a member?
              <p className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-1 inline">
                <Link to="/login">Click here to login</Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
