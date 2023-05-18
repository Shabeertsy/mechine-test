import React, { useContext } from 'react'
import Navbar from './Navbar'
import './ShowUsers.css'
import FormContext from '../UseContext'



export default function ShowUsers() {

    let{userData,setUserData}=useContext(FormContext)

    // fuction for deleting userdata
    const deleteHandler = (index) => {
        setUserData((prevData) => {
          const newData = [...prevData];
          newData.splice(index, 1);
          return newData;
        });
      };
      

  return (
    <div>
        <Navbar/>
        <h3 className='text-center'>Users</h3>
      <div className="table-main">
        <div className="table-inner">

        <table className='table'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>DOB</th>
          <th>Email</th>
          <th>Salary</th>
          <th>Gender</th>
          <th>Activity</th>
        </tr>
      </thead>
      <tbody>

        {
            userData&&userData.map((obj,index)=>{
                console.log(obj.id);
                return(
                    <tr>
                    <td className='td'>{obj.id}</td>
                    <td className='td'>{obj.name}</td>
                    <td className='td'>{obj.dob}</td>
                    <td className='td'>{obj.email}</td>
                    <td className='td'>{obj.salary}</td>
                    <td className='td'>{obj.gender}</td>
                    <td className='td delete'><p onClick={()=>deleteHandler(index)}>Delete</p></td>
                    <td className='td edit'><p onClick={()=>deleteHandler(index)}>Edit</p></td>

                  
                  </tr>
                )
            })
        }
      </tbody>
    </table>

        </div>
      </div>
    </div>
  )
}
