import React, { useContext, useState } from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineGoogle } from 'react-icons/ai';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MyAuthContext } from '../Context/AuthContext';
import { updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// FcManager


const Registration = () => {

    const { createUser, googleLogin } = useContext(MyAuthContext);
    const navigate = useNavigate();
    const loaction = useLocation();
    const [error, setError] = useState(null);

    const handleRegistration = (e) => {
        e.preventDefault();
        setError(null);
        const userName = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;

        if (password !== confirmPassword) {
            return setError("Password didn't match");
        }
        if (password.length < 6) {
            return setError("Password must have at least six character");
        }
        if (!regex.test(password)) {
            return setError("Password must have atleast one capital word and one regular expression");
        }

        createUser(email, password).then(res => {
            const user = res.user;
            toast.success('Successfully create account', {
                position: "top-right",
                autoClose: 5000,
                theme: "light",
            })
            e.target.reset();
            navigate('/')
            {
                location?.state ? navigate(location.state) : navigate('/');
            }

            updateProfile(user, {
                displayName: userName
            }).then(res)
                .catch(err => setError(err.message.slice(10, 100))
                )

        }).catch(err => setError(err.message.slice(10, 100)))
    }
    const createAccountWithGoogle = () => {
        googleLogin().then(res => {
            toast.success('Successfully create account', {
                position: "top-right",
                autoClose: 5000,
                theme: "light",
            })
            navigate('/');
        })
            .catch(err => console.log(err));
    }

    return (
        <div className='container mx-auto h-[760px] pt-10 mb-20'>
            <div className='w-full mb-6 flex justify-center items-center'>
                <form onSubmit={handleRegistration}>
                    <div className=' w-full md:w-[650px] bg-base-100 rounded-lg p-8 space-y-6 border-2'>
                        <h1 className="text-3xl font-bold mb-12 text-center">Create an account</h1>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input name='username' required type='text'
                                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                            />
                            <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                <span className='text-lg'>Username</span>
                            </label>
                        </div>

                        <div className="relative h-11 w-full min-w-[200px]">
                            <input name='email' required type='email'
                                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                            />
                            <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                <span className='text-lg'>Email</span>
                            </label>
                        </div>

                        <div className="relative h-11 w-full min-w-[200px]">
                            <input name='password' required type='password'
                                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                            />
                            <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                <span className='text-lg'>Password</span>
                            </label>
                        </div>
                        <div className="relative h-11 w-full min-w-[200px]">
                            <input name='confirmPassword' required type='password'
                                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-pink-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                            />
                            <label className="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-pink-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:after:scale-x-100 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                <span className='text-lg'>Confirm Password</span>
                            </label>
                        </div>
                        {
                            error && <div className='text-red-500 text-sm font-thin'>{error}</div>
                        }

                        <div className='space-y-2'>
                            <input type="submit" value="Create an account" className="input cursor-pointer pl-8 font-bold bg-yellow-500 text-xl border-none h-16 input-bordered w-full" />
                        </div>

                        <div className='text-center'>
                            <p className="text-lg">Already have account?
                                <Link to='/login'>
                                    <span className='text-lg text-yellow-500 underline'> Login </span>
                                </Link>now.</p>
                        </div>
                    </div>
                </form>
            </div>
            <div className='flex justify-center items-center flex-col mb-8 relative'>
                <hr className='w-96 bg-black h-[2px]' />
                <p className='text-lg absolute -top-4 bg-white px-4'>Or</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='text-center relative w-96 cursor-pointer'>
                    <AiFillGithub className='absolute left-2 text-3xl top-2' />
                    <button className='text-center cursor-pointer font-medium text-lg input input-bordered rounded-full w-96'>Continue with Github</button>
                </div>
                <div onClick={createAccountWithGoogle} className='text-center mt-4 relative w-96 cursor-pointer'>
                    <AiOutlineGoogle className='absolute left-2 top-2 text-3xl' />
                    <button className='text-center cursor-pointer font-medium text-lg input input-bordered rounded-full w-96'>Continue with Google</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Registration