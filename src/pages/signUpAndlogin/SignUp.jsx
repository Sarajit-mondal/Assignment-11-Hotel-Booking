import React from 'react'



import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FaFacebook,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaGithub,
} from "react-icons/fa6";
import { useState } from "react";
import { useContext } from "react";
import { userContext } from '../../providers/AuthProvider';


function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const {creactAccount, LogInWithSocial,updateUserProfile} = useContext(userContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()


  const onSubmit = (data) => {
    // console.log(data);
    
      creactAccount(data.email, data.password)
      .then(userCadintion =>{
        swal("Sign UP! Successfull", "You click the button! go your page", "success");
        
        // set userName and photoUrl
        updateUserProfile(data.name,data.photoURl)
        navigate('/')
       console.log(user)
      })
    
      .catch((error) => {
        toast.error(error.code, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
      
          });
        console.log(error.code)
      }
      );
    
  };


  ////Social login
  const socialLogin = (social)=>{
    LogInWithSocial(social)
    .then(result =>{
      console.log(result.user)
      swal(social+" LogIn Successfull", "You clicked the button! go your page", "success");
      navigate("/")
    })
    .catch(error => {
      toast.error(error.code, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    
        });
      console.log(error.code)
    })
  }

  return (
    <div className="lg:m-20 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-between w-full text-center items-center border-2 border-sky-100  mx-auto rounded-2xl  shadow-xl overflow-hidden">
        <div className=" bg-sky-200 h-full flex flex-col space-y-5 items-center justify-center p-10 text-white text-light">
          <h2 className="text-3xl text-grayLight font-extrabold"> Welcome Back!
          </h2>
         
          <p className="text-grayLight">please stay connected with us please login with your info</p>
          <Link
            to="/Login"
            className="py-3 px-10 bg-transparent border-2 border-white rounded-full font-semibold "
          >
            LOG IN
          </Link>
        </div>

        {/* Form section */}
        <div className="p-10">
          {/* login with social */}
          <div>
            <h2 className="text-3xl font-extrabold">Create Account</h2>
            <div className="flex gap-6 justify-center my-4 [&>span]:cursor-pointer">
              <span onClick={()=>socialLogin("google")} className="bg-sky-200 p-2 active:scale-95 rounded-full">
                <FaGoogle></FaGoogle>
              </span>
              <span onClick={()=>socialLogin("gitHub")} className="bg-sky-200 p-2 active:scale-95 rounded-full">
                <FaGithub></FaGithub>
              </span>
              <span onClick={()=>socialLogin("facebook")} className="bg-sky-200 p-2 active:scale-95 rounded-full">
                <FaFacebook></FaFacebook>
              </span>
            </div>
            <p className="mt-3 mb-1">or use your email for registration</p>
          </div>
          <form
            className="flex flex-col [&>input]:border-2 [&>input]:border-sky-200 [&>input]:m-2 [&>input]:p-3 [&>input]:rounded-lg rounded-xl bg-gray-200 h-full w-full [&>input]:bg-transparent "
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              autoFocus
              type="text"
              {...register("name", { required: true })}
              placeholder="Enter your name"
            />
            {errors.firstName && (
              <p className="text-left ml-3 text-red">Must give Frist Name</p>
            )}

            <input
              {...register("photoURl", )}
              placeholder="photoURL"
            />
            {errors.firstName && (
              <p className="text-left ml-3 text-red">Must give photoURL</p>
            )}
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-left ml-3 text-red">
                This field must be a valid email address.
              </p>
            )}
            {/* password */}
            <div className="box-border w-full  flex justify-center relative ">
              <input
                className="border-2 bg-transparent  border-sky-200 m-2 p-3 rounded-lg w-full"
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /(?=.*[a-z])(?=.*[A-Z])/,
                })}
                placeholder="Enter your password"
              />
              {/* show and hide password */}
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-2/4 -translate-y-2/4 right-6 text-xl cursor-pointer active:scale-95"
              >
                {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
              </div>
            </div>
            {errors.password && (
              <p className="text-left ml-3 text-red">
                you give must lowercash,uppercase and length six.
              </p>
            )}

            <button
              className="cursor-pointer active:bg-sky-200 font-bold box-border   flex justify-center relative border-2 bg-transparent  border-sky-200 m-2 p-3 rounded-lg"
             type="submit"
            > SignUp</button>
          </form>
          {/* <p className="underline text-right cursor-pointer active:opacity-85 font-semibold">
            ForgetPassword
          </p> */}
         
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}



export default SignUp
