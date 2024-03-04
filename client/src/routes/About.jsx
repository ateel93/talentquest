function About () {
    return(
        <div className="">
            <div className="pb-2 px-2.5">
                    <h2 className="font-semibold text-md pt-4 text-gray-800">About Talent Quest</h2>
                        <p className="text-gray-500 pt-2">At Talent Quest, we are committed to revolutionizing the job search experience for candidates around the globe. Our mission is to empower individuals to discover and secure their dream careers through an innovative and user-friendly platform. Whether you're a seasoned professional or just starting your career journey, Talent Quest is your trusted companion in the job market. </p>
                </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-4 w-3/5 mx-auto">            
                <div class="pt-2 pb-8 shadow-lg bg-blue-300 px-1">
                    <img className="w-10 mx-auto pt-2 " src='public/computer.png' />
                    <h2 class="font-semibold text-md pt-4 text-gray-600">User Experience:</h2>
                        <p class="text-gray-500 pt-2">Talent Quest offers a seamless job search experience with a vast database of opportunities from top-tier companies across industries. Our intuitive search features make it easy for candidates to discover roles that align with their skills, interests, and career aspirations.</p>
                </div>
                <div class="pt-2 pb-8 shadow-lg bg-blue-300 px-1">
                <img className="w-8 mx-auto pt-2" src='public/document.png' />
                    <h2 class="font-semibold text-md pt-4 text-gray-600">Effortless Application Process:</h2>
                        <p class="text-gray-500 pt-2">Gone are the days of complicated application processes. With Talent Quest, applying for jobs is a breeze. Our platform streamlines the application process, allowing candidates to submit their resumes and cover letters with just a few clicks.</p>
                </div>
                <div class="pt-2 pb-8 shadow-lg bg-blue-300 px-1">
                <img className="w-8 mx-auto " src='public/magnify.png' />
                    <h2 class="font-semibold text-md pt-4 text-gray-600">Job Tracking Made Simple:</h2>
                        <p class="text-gray-500 pt-2">Keeping track of your job applications has never been easier. Talent Quest provides a centralized dashboard where candidates can monitor the status of their applications, receive updates from employers, and gain valuable insights into their job search progress.</p>
                </div>
            </div>
        <div>
            <h2 className="text-md font-semibold pt-2">Our Commitment</h2> 
            <h3 className="text-gray-500 pb-2">We prioritize user experience in everything we do. Our platform is designed with candidates in mind, ensuring a user-friendly interface that simplifies the job search journey.</h3>
        </div>
        </div>
    )
}

export default About;