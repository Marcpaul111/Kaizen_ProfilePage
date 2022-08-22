import { useState } from "react";
import '../styles/profile.css';





const AddEmployee = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [firstName, setFirstname] = useState('');
  const [lastName, setLastname] = useState(''); 
  const [position, setPosition] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
   
    const submitBtn = () => {
      props.callback ({firstName: firstName, lastName: lastName, position: position, email: email, contact: contact});

      setShowModal(false);
    }

  return (
    <div>
         <>
      <button
        className="text-black  
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        ADD EMPLOYEE
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none border: solid ">
            <div className="relative w-auto my-6 mx-auto max-w-3xl w-3/5">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  <h3 className="text-3xl font=semibold">Employee Info</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                    <label className="block text-black text-sm font-bold mb-1">
                      First Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" value={firstName} onChange={(e) => setFirstname(e.target.value)} />
                    <label className="block text-black text-sm font-bold mb-1">
                      Last Name
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" value={lastName} onChange={(e) => setLastname(e.target.value)} />
                    <label className="block text-black text-sm font-bold mb-1">
                      Position
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" value={position} onChange={(e) => setPosition(e.target.value)}/>
                    <label className="block text-black text-sm font-bold mb-1">
                      Contact number
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" value={contact} onChange={(e) => setContact(e.target.value)}/>
                    <label className="block text-black text-sm font-bold mb-1">
                      Email address
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" value={email} onChange={(e) => setEmail(e.target.value) }/>
                    <label className="block text-black text-sm font-bold mb-1">
                      Create password
                    </label>
                    <input type='password' className="shadow appearance-none border rounded w-full py-2 px-1 text-black" />
                  </form>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="text-white bg-green-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                     onClick={submitBtn} 
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
    </div>
  )
}

export default Modal