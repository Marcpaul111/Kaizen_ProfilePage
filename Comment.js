import React from 'react'
import '../styles/profile.css';
import  profilePic  from '../assets/image/profilePic.png'
import Modal from './Modal';
import Swal from 'sweetalert2'

// const ColoredLine = ({ color }) => (
//   <hr
//       style={{
//           color: color,
//           backgroundColor: color,
//           height: 5
//       }}
//   />
// );
const delData = (e) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
    }
  })
}

const Comment = () => {
  return (
    <div className='container'>
      <div className='profile_output '>
        <img src={profilePic} alt="profile"/>
        <div className='id'>
         <h2>EMPLOYEE ID:</h2>  
        </div> 
        <button onClick={delData}>REMOVE EMPLOYEE</button>
        <hr style={{
          backgroundColor: 'black',
          height: 5,   
          marginLeft: 110,
          width: 700
        }} />

       
        


      </div>
      <div className="buttons">
      <Modal/>
       


       
       <button>RESET PASSWORD</button>
      </div>
    </div>

  )
}

export default Comment