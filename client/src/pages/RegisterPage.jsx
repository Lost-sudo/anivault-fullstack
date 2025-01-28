import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {

    const {register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("Form data: ", data)
    }
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input type="text" {...register("username", {required: "Username is required"})}
                        className={`w-full p-3 border ${errors.username ? "border-red-500 focus:ring-red-500" : "border-gray-500 focus:ring-indigo-500"} rounded-lg`}/>
                        {errors.username && (
                            <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                        <input type="password" {...register("password", {required: "Password is required", minLength: {value: 6, message: "Password must be at least 6 characters"}})}
                               className={`w-full p-3 border ${errors.password ? "border-red-500 focus:ring-red-500" : "border-gray-500 focus:ring-indigo-500"} rounded-lg`} />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    <button type="submit" className="w-full p-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 focus:outline-none">Register</button>
                </form>

                <p className="text-sm text-gray-600 mt-4 text-center">
                    Already have an account?{" "}
                    <a className="text-indigo-500 hover:underline" href="/login">Login</a>
                </p>
            </div>
        </div>
    )
};

export default RegisterPage;