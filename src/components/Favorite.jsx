import React from 'react';
import '../FavoriteStyle.css';
import TopNavbar from './TopNavBar';
import BottomNavBar from './BottomNavBar';

const Favorite = () => {
    // Dummy data for favorite people
    const favoritePeople = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' },
        { id: 4, name: 'Bob Brown' },
        { id: 5, name: 'Emma Davis' },
        { id: 6, name: 'Michael Wilson' },
        { id: 7, name: 'Olivia Martinez' },
        { id: 8, name: 'William Anderson' },
        { id: 9, name: 'Sophia Taylor' },
        { id: 10, name: 'David Thomas' },
          { id: 11, name: 'lusatia daman' },
          { id: 12, name: 'David Thomas' },
          { id: 13, name: 'David Thomas' },
          { id: 14, name: 'David Thomas' },
          { id: 15, name: 'David Thomas' },
          { id: 16, name: 'David Thomas' },

    ];

    // Function to handle visiting a favorite person
    const handleVisit = (id) => {
        // Logic to handle visiting a favorite person
        console.log(`Visiting favorite person with ID ${id}`);
    };

    // Function to handle removing a favorite person
    const handleRemove = (id) => {
        // Logic to handle removing a favorite person
        console.log(`Removing favorite person with ID ${id}`);
    };

    return (
        <>
        <TopNavbar />
        <div className="favorite-container">
            <h1 className='favorite-people'>Favorite People</h1>
            <div className='search-favorite'>
                <input type = "text" placeholder='search your favorite' className='favorite-search'></input>
            </div>
            <ul className="favorite-list">
                {favoritePeople.map(person => (
                    <li key={person.id} className="favorite-person">
                      <section className='person'> {person.name}</section> 
                        <button onClick={() => handleVisit(person.id)} className='visit-button'>Visit</button>
                        <button onClick={() => handleRemove(person.id)} className='remove-button'>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
        <BottomNavBar />
   </>
   
   );
}

export default Favorite;
