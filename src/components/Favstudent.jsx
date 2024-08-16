
function Favstudent(props) {
    var favoriteStudents = props.favoriteStudents;
  
    function remove(removeid) {
      // var updatedFavorites = favoriteStudents.filter(item => item.id !== removeid);
      // props.setFavoriteStudents(updatedFavorites);
      var temp=favoriteStudents.filter(item=>{
        if(item.id==removeid){      
          return false
        }
        else
        {
          return true
        }
      })
      props.setFavoriteStudents(temp)
    }
  
    return (
      <div className=" mt-6 w-80 p-2 mx-auto shadow-lg border rounded-md">
        <h1 className="text-3xl  font-medium mb-2">Favorite Students List</h1>
        <div>
          {
            favoriteStudents.length > 0 ? favoriteStudents.map((item, index) => {
              return (
                <div  className="flex justify-between mb-2 items-center">
                  <p>{index + 1}. {item.stuname}</p>
                  <button className="bg-red-500 border border-red-500 rounded-md text-white p-1" onClick={() => remove(item.id)}>Remove</button>
                </div>
              );
            }) : <p>No favorite students added yet.</p>
          }
        </div>
      </div>
    );
  }
  
  export default Favstudent;