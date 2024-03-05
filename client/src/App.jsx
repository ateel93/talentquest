import './App.css';
import NavBar from './NavBar';
import Footer from './components/Footer.jsx';
import { useEffect, useState } from "react";
// import Profile from './routes/Profile';
import { Outlet } from 'react-router-dom';
// import Login from './components/Login';



function App() {

  const [marketing, setMarketing] = useState([])
  const [email, setEmail] = useState('')

  function handleSubmit() {
    console.log(email)
    fetch('http://127.0.0.1:5000/marketing', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        "Accept": "application/json"
      },
      body: JSON.stringify({
        email
       })
    })
    .then(resp => resp.json())
    .then(data => setMarketing([...marketing, data]))
  }

  console.log(marketing)

  
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex">
        <img className="left-0 w-32" src="./public/tquest.png" alt="Talent Quest Logo" />
      </div>
      <NavBar />
      <section className="flex-grow flex flex-col bg-blue-50">
        <div>

          {/* <h2 className="text-lg font-semibold py-2 shadow-xl w-3/4">Talent Quest: Search and track jobs from one place.</h2> */}
          {/* <div className="pb-2">
            <input type="text" className="py-2 w-96 h-8 text-center shadow-xl" placeholder="Job Title, Keywords" />
          </div> */}
          <Outlet />
          {/* <Profile /> */}
          {/* <Login /> */}
        </div>
        <div className="flex flex-col items-end mt-auto">
          <div className='bg-blue-400 w-full relative items-start'>
            <input type="text" placeholder="Sign up for marketing emails" className="w-80 p-2" value={email} onChange={event => setEmail(event.target.value)}/>
            <button className='hover:bg-blue-500 rounded-md' onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;

