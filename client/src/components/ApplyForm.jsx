import react, { useState } from "react";

function ApplyForm ({job}) {
    const [newFirstName, setNewFirstName] = useState('')
    const [newLastName, setNewLastName] = useState('')
    const [newDob, setNewDOB] = useState('')
    const [newPhone, setNewPhone] = useState('')
    const [newEmail, setNewEmail] = useState('')
    const [newStreet, setNewStreet] = useState('')
    const [newCity, setNewCity] = useState('')
    const [newState, setNewState] = useState('')
    const [newZip, setNewZip] = useState('')
    const [apply, setApply] = useState('')
    const [newUser, setUser] = useState('')


    function handleSubmit() {
        fetch('http://127.0.0.1:5000/apply', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
          },
          body: JSON.stringify({
            first: newFirstName,
            last: newLastName,
            dob: newDob,
            phone: newPhone,
            email: newEmail,
            street: newStreet,
            city: newCity,
            state: newState,
            zip: newZip,
            user_id: 1,
            job_id: job.id
           })
        })
        .then(resp => resp.json())
        .then(data => setApply([...apply, data]))
      }
    

    return(
        <div className="flex-col">
            <form className="">
                <div className="py-4">
                <label className="px-2 font-semibold">First:</label>
                <input type="text" className="px-0.5 rounded-md shadow-md" value={newFirstName} onChange={event => setNewFirstName(event.target.value)} placeholder="John"/>

                <label className="px-2 font-semibold">Last:</label>
                <input type="text" className="px-0.5 rounded-md shadow-md" value={newLastName} onChange={event => setNewLastName(event.target.value)} placeholder="Doe"/>

                </div>
                <div className="py-4">
                <label className="px-2 font-semibold">Date of Birth:</label>
                <input type="text" className="px-0.5 rounded-md shadow-md" value={newDob} onChange={event => setNewDOB(event.target.value)} placeholder="xx/xx/xxxx"/>
                </div>
                <div className="py-4">
                <label className="px-2 font-semibold">Phone #:</label>
                <input type="text" className="px-0.5 rounded-md shadow-md" value={newPhone} onChange={event => setNewPhone(event.target.value)} placeholder="(123) 456-7890"/>
                <label className="px-2 font-semibold">Email:</label>
                <input type="text" className="px-0.5 rounded-md shadow-md" value={newEmail} onChange={event => setNewEmail(event.target.value)} placeholder="janedoe@gmail.com"/>
                </div>
                <div className="py-4">
                <label className="px-2 font-semibold">Street Address:</label>
                <input type="text" className="px-0.5 rounded-md shadow-md" value={newStreet} onChange={event => setNewStreet(event.target.value)}placeholder="123 Broadway,"/>
                <label className="px-2 font-semibold">City:</label>
                <input type="text" className="px-0.5 rounded-md shadow-md" value={newCity} onChange={event => setNewCity(event.target.value)} placeholder="New York,"/>
                <label className="px-2 font-semibold">State:</label>
                <select className="rounded-md shadow-md" value={newState} onChange={event => setNewState(event.target.value)}>
                    <option>--</option>
                    <option>Alabama</option>
                    <option>Alaska</option>
                    <option>Arizona</option>
                    <option>Arkansas</option>
                    <option>California</option>
                    <option>Colorado</option>
                    <option>Connecticut</option>
                    <option>Delaware</option>
                    <option>Florida</option>
                    <option>Georgia</option>
                    <option>Hawaii</option>
                    <option>Idaho</option>
                    <option>Illinois</option>
                    <option>Indiana</option>
                    <option>Iowa</option>
                    <option>Kansas</option>
                    <option>Kentucky</option>
                    <option>Louisiana</option>
                    <option>Maine</option>
                    <option>Maryland</option>
                    <option>Massachusetts</option>
                    <option>Michigan</option>
                    <option>Minnesota</option>
                    <option>Mississippi</option>
                    <option>Missouri</option>
                    <option>Montana</option>
                    <option>Nebraska</option>
                    <option>Nevada</option>
                    <option>New Hampshire</option>
                    <option>New Jersey</option>
                    <option>New Mexico</option>
                    <option>New York</option>
                    <option>North Carolina</option>
                    <option>North Dakota</option>
                    <option>Ohio</option>
                    <option>Oklahoma</option>
                    <option>Oregon</option>
                    <option>Pennsylvania</option>
                    <option>Rhode Island</option>
                    <option>South Carolina</option>
                    <option>South Dakota</option>
                    <option>Tennessee</option>
                    <option>Texas</option>
                    <option>Utah</option>
                    <option>Vermont</option>
                    <option>Virginia</option>
                    <option>Washington</option>
                    <option>West Virginia</option>
                    <option>Wisconsin</option>
                    <option>Wyoming</option>
                </select>
                <label className="px-2 font-semibold">Zip Code:</label>
                <input type="text" className="px-0.5 rounded-md shadow-md" value={newZip} onChange={event => setNewZip(event.target.value)} placeholder="12345"/>
                </div>
                <div className="py-2 items-center">
                <h1 className="font-semibold">Upload Resume:</h1>
                </div>
                <div>
                <input type="file" className="pb-2" />
                </div>
                <button type="submit" className="save-draft mb-2 justify-center bg-blue-300 rounded-md shadow-md" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default ApplyForm;