import React from 'react';
import TopNavBar from './TopNavBar';
import BottomNavBar from './BottomNavBar';
import ForYou from './ForYou';
const MainContent = () => {
    return (
        <div className='MainContent'>
            <TopNavBar />
            {/* Add some spacing or content here if needed */}
            <ForYou />
            <BottomNavBar />
        </div>
    );
};

export default MainContent;
