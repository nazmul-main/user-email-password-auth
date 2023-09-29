
const SignUp = () => {

    const handleSignUp = e => {
        e.preventDefault();
        console.log('form submiting');
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }

    return (
            <div className="max-w-screen-xl mx-auto mt-10 ">
                <div className=" mx-auto w-1/3 p-5 bg-slate-200 rounded-md">
                    <h2 className="text-3xl font-semibold mb-8 text-center">Sign up</h2>
                    
                    <form onSubmit={handleSignUp} className="space-y-3 ">
                        <input className="outline-none border border-blue-700 w-full rounded-md py-1 px-2" placeholder="Email Aeddress " type="email" name="email" id="" /><br />
                        <input className="outline-none border border-blue-700 w-full rounded-md py-1 px-2" placeholder="Password" type="password" name="password" id="" /><br />
                        <input className="w-full btn bg-blue-800 hover:bg-blue-600 text-white font-semibold" type="submit" value="Sign Up" />
                    </form>
                </div>
            </div>
    );
};

export default SignUp;