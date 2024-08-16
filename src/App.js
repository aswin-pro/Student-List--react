import Addstudent from './components/Addstudent'
import Favstudent from './components/Favstudent'
import { useState } from 'react';
import {BrowserRouter, Link,Route,Routes} from 'react-router-dom';

function App() {
  const [student, setstudent] = useState([
    { id: 1, stuname: "Aswin" },
    { id: 2, stuname: "Denis" },
    { id: 3, stuname: "Rex" },
    { id: 4, stuname: "John" },
    { id: 5, stuname: "Henry" }
  ]);

  const [favoriteStudents, setFavoriteStudents] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <nav className="text-center mt-10">
          <Link to={"./"} className="border px-8 py-2 bg-gray-600 text-white p-1"><button>Students List</button></Link>
          {" "}
          <Link to={"/Favstudent"} className="border px-1 py-2 bg-gray-600 text-white p-1"><button className='w-40'>Favorite Students</button></Link>
        </nav>
        <Routes>
          <Route path="/" element={<Addstudent student={student} setstudent={setstudent} setFavoriteStudents={setFavoriteStudents} favoriteStudents={favoriteStudents} />} />
          <Route path="/Favstudent" element={<Favstudent favoriteStudents={favoriteStudents} setFavoriteStudents={setFavoriteStudents} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
  

export default App;
