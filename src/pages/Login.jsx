import { useState } from "react";
import Input from "../Shared/Input";
import Layout from "../shared/Layout/Layout";

const Login = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [isForgetPass, setIsForgetPass] = useState(false);

  const HandleReg = () => {
    setIsRegister(true);
  };
  const HandlLog = () => {
    setIsRegister(false);
  };


  return (
    <Layout>
      <div className="min-h-screen  bg-primary  flex flexCol w-full px-4 md:px-0 ">
        <div className="w-full md:w-1/2 border-2 border-white rounded-md overflow-hidden">
          {isForgetPass === false && (
            <div className="flexRow w-full">
              <span
                onClick={() => HandlLog()}
                className={`w-1/2 p-4 cursor-pointer  ${
                  isRegister
                    ? "bg-primary text-white border-primary "
                    : "bg-white text-primary "
                }`}
              >
                Login
              </span>
              <span
                onClick={() => HandleReg()}
                className={` cursor-pointer  w-1/2 p-4   ${
                  isRegister
                    ? "bg-white text-primary "
                    : "bg-primary text-white "
                }`}
              >
                Register
              </span>
            </div>
          )}
          {isRegister === true && isForgetPass === false && (
            <form className="  bg-white  p-4 flexCol gap-6 w-full">
              <Input type={"text"} labelFor={"Name"} placehold={"John Doe"} />
              <Input
                type={"email"}
                labelFor={"Email"}
                placehold={"example@gmail.com"}
              />
              <Input
                type={"text"}
                labelFor={"Phone"}
                placehold={"09074639302"}
              />

              <button className=" bg-primary text-white py-3 px-10 rounded-lg ">Sign Up</button>
            </form>
          )}

          {isRegister === false && isForgetPass === false && (
            <form className="  bg-white p-4 flexCol gap-6 ">
              <Input type={"text"} labelFor={"Email"} placehold={"Email"} />
              <Input
                type={"password"}
                labelFor={"Password"}
                placehold={"Password"}
              />


              <button className=" bg-primary text-white py-3 px-10 rounded-lg ">Login</button>

           
                <span  onClick={() => setIsForgetPass(true)} className="underline text-black  font-semibold text-lg cursor-pointer">Forgot Password</span>
            
            </form>
          )}

          {isForgetPass && (
            <form className=" bg-white p-4 flexCol gap-6 ">

              <h1 className="text-2xl font-semibold">Reset Password</h1>
              <Input
                type={"email"}
                labelFor={"Email"}
                placehold={"example@gmail.com"}
              />
              <Input
                type={"password"}
                labelFor={"Password"}
                placehold={"Password"}
              />

              <p
                onClick={() => setIsForgetPass(false)}
                className="text-black underline font-semibold text-lg cursor-pointer"
              >
                Back To Login
              </p>
            </form>
          )}
        </div>
      </div>
      {/* <div className="animate-bounce h-12 w-12 border-2 border-blue-500 bg-blue-500 border-t-transparent rounded-full"></div> */}
    </Layout>
  );
};

export default Login;
