import React from 'react';
import '../NearBy.css';
import TopNavbar from './TopNavBar';
import BottomNavBar from './BottomNavBar';
import johnDoeImage from '../Images/john_doe.jpg';
import janeSmithImage from '../Images/jane_smith.jpeg';

const NearBy = () => {
    // Dummy trader data
    const dummyTraders = [
        { 
            id: 1, 
            name: 'John Doe', 
            location: 'New York', 
            distance: '1.2 miles', 
            status: 'Online', 
            rating: 4.5,
            goods: 'Eggs',
            image: johnDoeImage,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labor',
        },
        { 
            id: 2, 
            name: 'Jane Smith', 
            location: 'Los Angeles', 
            distance: '0.8 miles', 
            status: 'Offline', 
            rating: 3.8,
            goods: 'Milk',
            image: janeSmithImage,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labor',
        },
         { 
            id: 1, 
            name: 'John Doe', 
            location: 'New York', 
            distance: '1.2 miles', 
            status: 'Online', 
            rating: 4.5,
            goods: 'Eggs',
            image: johnDoeImage,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labor',
        },
         { 
            id: 1, 
            name: 'John Doe', 
            location: 'New York', 
            distance: '1.2 miles', 
            status: 'Online', 
            rating: 4.5,
            goods: 'Eggs',
            image: johnDoeImage,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labor',
        },
         { 
            id: 1, 
            name: 'John Doe', 
            location: 'New York', 
            distance: '1.2 miles', 
            status: 'Online', 
            rating: 4.5,
            goods: 'Eggs',
            image: johnDoeImage,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labor',
        },
         { 
            id: 1, 
            name: 'John Doe', 
            location: 'New York', 
            distance: '1.2 miles', 
            status: 'Online', 
            rating: 4.5,
            goods: 'Eggs',
            image: johnDoeImage,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labor',
        },
         { 
            id: 1, 
            name: 'John Doe', 
            location: 'New York', 
            distance: '1.2 miles', 
            status: 'Online', 
            rating: 4.5,
            goods: 'Eggs',
            image: johnDoeImage,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labor',
        },
         { 
            id: 1, 
            name: 'John Doe', 
            location: 'New York', 
            distance: '1.2 miles', 
            status: 'Online', 
            rating: 4.5,
            goods: 'Eggs',
            image: johnDoeImage,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labor',
        },
         { 
            id: 1, 
            name: 'John Doe', 
            location: 'New York', 
            distance: '1.2 miles', 
            status: 'Online', 
            rating: 4.5,
            goods: 'Eggs',
            image: johnDoeImage,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labor',
        },
         { 
            id: 1, 
            name: 'John Doe', 
            location: 'New York', 
            distance: '1.2 miles', 
            status: 'Online', 
            rating: 4.5,
            goods: 'Eggs',
            image: johnDoeImage,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labor',
        },
        
        // Add more dummy traders here...
    ];

    return (
        <>
            <TopNavbar />
            <div className='nearby-container'>
                <div className='trader-title'>
                    <h2>Nearby Traders</h2>
                </div>
                {/* Map through dummy traders */}
                {dummyTraders.map(trader => (
                    <div key={trader.id} className='trader-card'>
                        <div className='trader-name'>
                       <p className='t-name'>    {trader.name}</p> 
                            </div>
                        <div className='trader-collection'>
                            <div className='trader-image'>
                                <img src={trader.image} alt={trader.name} />
                            </div>
                            {/* Add other trader details */}
                            <div className='about-trader-description'>
                                <h6 className='about-trader'>About My Goods</h6>
                                <p className='description'>{trader.description}</p>
                       </div>

                       <div className='buckets'> 
                            <div className='trader-info'>
                                <div className='trader-details'>
                                    <p className='goods'>Goods:</p>
                                    <p className='good'>  {trader.goods}</p>
                                </div>
                                <div className='trader-location'>
                                    <p className='location'>Location: </p>
                                    <p className='locate'>  {trader.location}</p>
                                </div>
                                <div className='trader-distance'>

                                     <p className='distance'>Distance: </p>
                                     <p className='miles'> {trader.distance}</p>
                                    
                                    </div>
                                <div className='trader-status'>
                                <p className='status' >Status: </p>
                                    <p className='s-online'>{trader.status}</p>
                                </div>
                                <div className='trader-rating'>
                             <p className='rating' > Rating:</p>
                              <p className='rate'> {trader.rating}</p>
                                     </div>
                            </div>
                            <button className='visit-trader-button'>visit</button>
                            </div>
                            
                        </div>
                    </div>
                    
                ))}
            </div>
            <BottomNavBar />
        </>
    );
};

export default NearBy;
