function Stulist(props) {
    const { item, favoriteStudents, setFavoriteStudents } = props;
  
    // Check if the student is in the favorite list
    const isInFavoriteList = favoriteStudents.some(fav => fav.id === item.id);  
  
    function add() {
      // Add the current student to the favorite list
      setFavoriteStudents([...favoriteStudents, item])
    }
  
    return (
      <div className="flex justify-between mb-2 items-center">
        <p>{props.index + 1}. {item.stuname}</p>   
        <button
          className={`bg-blue-500 border border-blue-500 text-white p-1 rounded-md ${isInFavoriteList ? 'opacity-50 cursor-not-allowed'  : ''}`}
          onClick={add}
          disabled={isInFavoriteList}  // Disable the button if the student is already in the favorite list
        >
          {isInFavoriteList ? 'Added to Favorites' : 'Add to Favorite'} 
        </button>
      </div>
    );
  }
  
  export default Stulist;
  