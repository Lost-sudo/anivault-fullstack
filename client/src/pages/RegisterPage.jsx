import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const password = watch("confirmPassword");


    const onSubmit = async (data) => {
        if (data.password !== data.confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: data.email,
                    password: data.password,
                }),
            });

            if (response.ok) {
                alert("Register successfully");
                window.location.href = "/login";
            } else {
                alert("Registration failed.");
            }
        } catch (error) {
            console.log(error);
            alert("Something went wrong!");
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            {...register("email", {required: "Email is required"})}
                            className={`w-full p-3 border ${errors.email ? "border-red-500 focus:ring-red-500" : "border-gray-500 focus:ring-indigo-500"} rounded-lg`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be at least 6 characters" }
                            })}
                            className={`w-full p-3 border ${errors.password ? "border-red-500 focus:ring-red-500" : "border-gray-500 focus:ring-indigo-500"} rounded-lg`}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            {...register("confirmPassword", {
                                required: "Confirm Password is required",
                                validate: value => value === password || "Passwords do not match"
                            })}
                            className={`w-full p-3 border ${errors.confirmPassword ? "border-red-500 focus:ring-red-500" : "border-gray-500 focus:ring-indigo-500"} rounded-lg`}
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
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
