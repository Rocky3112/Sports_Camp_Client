import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const handleLogin = async (data) => {
            const email = data.email;
            const password = data.password;
            // console.log(email, password);
            const result = await signIn(email, password);
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: 'User Login Successful.',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown',
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp',
                },
            });
            navigate(from, { replace: true });
         
    };

    return (
        <>
            
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                    <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(handleLogin)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <Controller
                                    name="email"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'Email is required' }}
                                    render={({ field }) => <input {...field} type="email" placeholder="email" className="input input-bordered" />}
                                />
                                {errors.email && <span className="text-red-600">{errors.email.message}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <Controller
                                    name="password"
                                    control={control}
                                    defaultValue=""
                                    rules={{ required: 'Password is required' }}
                                    render={({ field }) => <input {...field} type="password" placeholder="password" className="input input-bordered" />}
                                />
                                {errors.password && <span className="text-red-600">{errors.password.message}</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            {/* You can add your LoadCanvasTemplate and handleValidateCaptcha here */}
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className="text-center text-blue-800 text-xl pb-2">
                            <small>
                                New Here? <Link to="/signup">Create an account</Link>
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
