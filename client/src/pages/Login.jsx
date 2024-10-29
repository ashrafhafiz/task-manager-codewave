import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BiLogIn } from "react-icons/bi";
import Textbox from "../components/Textbox";
import Button from "../components/Button";

const Login = () => {
  const user = useSelector((state) => state.auth.user);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    user && navigate("/dashboard");
  }, [user]);

  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row bg-[#f3f4f6]">
      <div className="flex flex-col items-center justify-center w-full gap-0 md:w-auto md:gap-40 md:flex-row">
        {/* Left side */}
        <div className="flex flex-col items-center justify-center w-full h-full lg:w-2/3">
          <div className="flex flex-col items-center justify-center w-full gap-5 md:max-w-lg 2xl:max-w-3xl md:gap-y-10 2xl:-mt-20">
            <span className="flex gap-1 px-3 py-1 text-sm text-gray-600 border border-gray-300 rounded-full md:text-base">
              manage all your tasks in one place!
            </span>
            <p className="flex flex-col gap-0 text-4xl font-black text-center text-blue-700 md:gap-4 md:text-6xl 2xl:text-7xl">
              <span>Cloud-based</span>
              <span>Task Manager</span>
            </p>
            <div className="cell">
              <div className="circle rotate-in-up-left"></div>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="flex flex-col items-center justify-center w-full p-4 lg:w-1/3 md:p-1">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white px-10 pt-14 pb-14"
          >
            <div>
              <p className="text-3xl font-bold text-center text-blue-600">
                Welcome Back!
              </p>
              <p className="text-base text-center text-gray-700">
                Kepp all your credentials safe.
              </p>
            </div>

            <div className="flex flex-col gap-y-5">
              <Textbox
                placeholder="example@email.com"
                type="email"
                name="email"
                label="Email Address"
                className="w-full rounded-full"
                register={register("email", {
                  required: "Email address is required!",
                })}
                error={errors.email ? errors.email.message : ""}
              />
              <Textbox
                type="password"
                name="password"
                label="Password"
                className="w-full rounded-full"
                register={register("password", {
                  required: "Password is required!",
                })}
                error={errors.password ? errors.password.message : ""}
              />
            </div>
            <span className="text-sm text-gray-500 cursor-pointer hover:text-blue-600 hover:underline">
              Forgot your password?
            </span>
            <Button
              type="submit"
              label="Login"
              className="flex items-center justify-center w-full h-10 text-white bg-blue-700 rounded-full gap-x-2"
              icon={<BiLogIn />}
              onClick={() => {}}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
