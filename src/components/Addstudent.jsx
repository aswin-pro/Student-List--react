import Stulist from "./stulist"
import { useState } from 'react';

function Addstudent(props) {
    const [input,setinput]=useState("")

    const handleChange=(evt)=>{
        setinput(evt.target.value)
    }
    const add=()=>{
        props.setstudent([...props.student, {id: props.student.length+1, stuname: input} ])
        setinput("")
    }
    return (
      <div className=" mt-6 w-80 p-2 mx-auto shadow-lg border rounded-md">
        <h1 className="text-3xl font-medium mb-2">Students List</h1>
        <div className='flex gap-1 mb-3'>
        <input type="text" placeholder='Student Name' value={input} onChange={handleChange} className='border border-black p-1 focus:outline-none' />
        <button onClick={add} className='bg-black border border-black p-1 text-white w-28'>Add Student</button>
        </div>
        {
            props.student.map((item, index) => {
            return (
              <Stulist  id={item.id} item={item} index={index} setFavoriteStudents={props.setFavoriteStudents} favoriteStudents={props.favoriteStudents} />
            )
          })
        }
      </div>
    );
  }
  
  export default Addstudent;