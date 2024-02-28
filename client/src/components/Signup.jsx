function SignUp() {
    return(
        <div className="object-center">
            <h4 className="pt-40">Sign up now:</h4>
            <h3 className='text-center pt-2'>Email:</h3>
                <input type="text" className='w-60 text-center shadow-l rounded-sm' placeholder="Email" />
            <h3 className='text-center pt-2'>Username:</h3>
                <input type="text" className='w-60 text-center shadow-l rounded-sm' placeholder="Username" />
            {/* <h3 className='text-center pt-2'>DOB:</h3>
                <input type="text" className='w-60 text-center shadow-l rounded-sm' placeholder="DOB" /> */}
            <h3 className='text-center pt-2'>Profession:</h3>
                <input type="text" className='w-60 text-center shadow-l rounded-sm' placeholder="Profession" />
            <h3 className='text-center pt-2'>Password:</h3>
                <input type="text" className='w-60 text-center shadow-l rounded-sm' placeholder="Password" />
            <h3 className="pt-4"></h3>
                <button type="submit" className="bg-gray-400 py-1 px-2 shadow-l rounded-md hover:bg-gray-500">Login</button> 
        </div>
    )
}

export default SignUp;