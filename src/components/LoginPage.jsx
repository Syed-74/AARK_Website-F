import React from "react";

const LoginPage = ({ onClose, handleSubmit, setEmail, setPassword }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="min-h-screen flex items-center justify-center py-8 px-4 w-full">
                <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden relative">

                    {/* X Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-3xl font-bold z-20 focus:outline-none"
                        aria-label="Close"
                    >
                        &times;
                    </button>

                    {/* Left Panel */}
                    <div className="md:w-1/2 bg-gradient-to-b from-green-600 to-green-700 text-white flex flex-col items-center justify-center p-10">
                        <img
                            src="/userlogo.png"
                            alt="Logo"
                            className="w-16 h-16 mb-4 bg-white rounded-full p-2"
                        />
                        <h2 className="text-2xl font-bold mb-2">Welcome Back, Admin!</h2>
                        <p className="text-sm text-center mb-6">
                            To continue managing the system, please log in with your admin credentials.
                        </p>
                        {/* <button
              onClick={onClose}
              className="bg-transparent border border-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-green-700 transition"
            >
              SIGN IN
            </button>
            <div className="text-xs text-white mt-8">
              CREATOR <span className="underline">HERE</span> | DIRECTOR <span className="underline">HERE</span>
            </div> */}
                    </div>

                    {/* Right Panel (Form) */}
                    <div className="md:w-1/2 bg-white p-10 flex flex-col justify-center">
                        <h2 className="text-2xl font-bold text-green-700 mb-2 text-center">welcome</h2>
                        <p className="text-gray-600 text-sm text-center mb-6">
                            Login in to your account to continue
                        </p>
                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 border rounded-full focus:outline-none text-black focus:ring-2 focus:ring-green-400"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 border rounded-full focus:outline-none text-black focus:ring-2 focus:ring-green-400"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            {/* <p className="text-sm text-right text-gray-500 hover:text-green-600 cursor-pointer">
                                Forgot your password?
                            </p> */}
                            <button
                                type="submit"
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-full transition"
                            >
                                LOG IN
                            </button>
                        </form>
                        {/* <p className="text-sm text-center mt-4 text-gray-600">
                            Don't have an account?{" "}
                            <span className="text-green-600 hover:underline cursor-pointer" onClick={() => window.location.href = '/register/create-account/admin/V2/admin-login'}>sign up</span>
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage; 