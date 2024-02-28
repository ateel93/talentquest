function Login() {
    return(
        <div className="object-center">
            <h4 className="pt-40">Start your search by logging in:</h4>
            <h3 className='text-center pt-2'>Username:</h3>
                <input type="text" className='w-60 text-center shadow-l rounded-sm' placeholder="Username" />
            <h3 className='text-center pt-2'>Password:</h3>
                <input type="text" className='w-60 text-center shadow-l rounded-sm' placeholder="Password" />
            <h3 className="pt-4"></h3>
                <button type="submit" className="bg-gray-400 py-1 px-2 shadow-l rounded-md hover:bg-gray-500">Login</button> 
        </div>
    )
}

export default Login;