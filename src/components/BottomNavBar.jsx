import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import MessageIcon from '@mui/icons-material/Message';

const BottomNavBar = () => {
    const navigate = useNavigate();
    const [selectedIcon, setSelectedIcon] = useState(null);

    const handleClick = (iconName) => {
        navigate('/' + iconName.toLowerCase());
        setSelectedIcon(iconName);
    };

    return (
        <div className='bottombox'>
            <section className={selectedIcon === 'nearby' ? 'iconSection selected' : 'iconSection'} onClick={() => handleClick('nearby')}>
                <ModeOfTravelIcon className='icon' />
                <h6>Nearby</h6>
            </section>
            <section className={selectedIcon === 'favorite' ? 'iconSection selected' : 'iconSection'} onClick={() => handleClick('favorite')}>
                <StarBorderPurple500Icon className='icon' />
                <h6>Favorite</h6>
            </section>
            <section className={selectedIcon === 'records' ? 'iconSection selected' : 'iconSection'} onClick={() => handleClick('records')}>
                <ReceiptLongIcon className='icon' />
                <h6>Records</h6>
            </section>
            <section className={selectedIcon === 'chats' ? 'iconSection selected' : 'iconSection'} onClick={() => handleClick('chats')}>
                <MessageIcon className='icon' />
                <h6>Chats</h6>
            </section>
        </div>
    );
};

export default BottomNavBar;
