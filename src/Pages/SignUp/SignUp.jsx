import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import signup from '../../assets/signup.gif'
import SocialLogin from "../../components/SocialLogin/SocialLogin";
// import { updateProfile } from "firebase/auth";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();
  const { createUser,updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    if (data.password !== data.confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password and Confirm Password do not match.",
      });
      return;
    }

    createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })



                    })
                    .catch(error => console.log(error))
            })
  };

  return (
    <>
      <Helmet>
        <title>Sports Camp | Sign Up</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            <img src={signup} alt="" />
          </div>
          <div className=" md:w-1/2card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => value === watch("password"),
                  })}
                  placeholder="confirm password"
                  className="input input-bordered"
                />
                {errors.confirmPassword?.type === "required" && (
                  <p className="text-red-600">Confirm Password is required</p>
                )}
                {errors.confirmPassword?.type === "validate" && (
                  <p className="text-red-600">Passwords do not match</p>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center text-xl font-semibold text-blue-600">
              <small>
                Already have an account <Link to="/login">Login</Link>
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
