import React, { useState, useRef } from 'react';
import '../ForYou.css'; // Make sure to import your CSS file
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VerifiedIcon from '@mui/icons-material/Verified';
import maxresdefault from '../assets/maxresdefault.jpg';
import plastic from '../assets/plastic.jpg';
import cement from '../assets/cement.jpg';
import eggs from '/home/hamzah/myTrade/src/assets/eggs.jpg'
import electronics from '../assets/electroncs.jpg';
import soda from '../assets/soda.jpg';
import supermarket from '../assets/supermarket.jpg';
import R from '/home/hamzah/myTrade/src/assets/R.jpeg';
import cakes from '/home/hamzah/myTrade/src/assets/cakes.jpg'
const ForYou = () => {
    const [typing, setTyping] = useState(false);
    const [currentCard, setCurrentCard] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false); // State to track favorite status
    const [showPopup, setShowPopup] = useState(false); // State to track whether to show the popup
    const [addedToFavorite, setAddedToFavorite] = useState(false); // State to track whether "added to favorite" text should be shown
    const [verifiedHeading, setVerifiedHeading] = useState(''); // State to store verified heading

    const verifiedHeadingRef = useRef(null); // Reference to the h4 element inside the verified div

    const handleHover = (e) => {
        const card = e.target;
        const heading = card.querySelector('h2');

        if (heading && !typing) {
            setTyping(true);
            setCurrentCard(card); // Set the current hovered card
            heading.style.color = '#007bff'; // Apply blue color to the text

            const text = heading.textContent;
            heading.textContent = ''; // Clear the text content
            let index = 0;

            const typingInterval = setInterval(() => {
                if (index < text.length) {
                    heading.textContent += text.charAt(index);
                    index++;
                } else {
                    clearInterval(typingInterval);
                    setTyping(false);
                }
            }, 20); // Adjust typing speed as needed
        }
    };

    const handleMouseLeave = () => {
        if (currentCard) {
            const heading = currentCard.querySelector('h2');
            if (heading) {
                heading.style.color = ''; // Remove the color when mouse leaves
                setCurrentCard(null); // Reset current card
            }
        }
    };

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite); // Toggle favorite status
        setShowPopup(isFavorite); // Show the popup if it's being toggled true
        setAddedToFavorite(!isFavorite); // Show "added to favorite" text if not already favorited
        setVerifiedHeading(verifiedHeadingRef.current.textContent); // Set verified heading
        setTimeout(() => {
            setShowPopup(false); // Hide the popup after 2 seconds
            setAddedToFavorite(false); // Hide "added to favorite" text after 2 seconds
        }, 2000);
    };

    // Dummy data for cards
    const dummyData = [
       
 { id: 1, title: 'AGRICULTURE', image: maxresdefault, verifiedHeading: 'BYARUGABA FARM' },
 { id: 2, title: 'FOOD AND BEVERAGES', image: soda, verifiedHeading: 'NAKASERO FOOD SUPPLIES' },
 { id: 3, title: 'MILK', image: soda, verifiedHeading: 'Tugume Farm Milk Supply' },
 { id: 4, title: 'CHICKEN AND EGGS', image: eggs, verifiedHeading: 'Tugume Farm Milk Supply' },
 { id: 5, title: 'CAKES AND BREADS', image: cakes, verifiedHeading: 'BOFULO DELICIOUS' },
 { id: 6, title: 'SEAL AND GRAINS', image: supermarket, verifiedHeading: 'MUKISA STORES' },
 { id: 7, title: 'PLASTICS', image: plastic, verifiedHeading: 'NICE PLASTICS' },
 { id: 8, title: 'BUILDING AND HARDWARE', image: R, verifiedHeading: 'WAKISO REGIONAL HARDWARE' },
 { id: 9, title: 'VEGETABLE AND GREENS', image: cement, verifiedHeading: 'HELENAH WATER' },
 { id: 10, title: 'ELECTRONICS', electronics, verifiedHeading: 'DML Electronics' },

];

    return (
        <div className="container-ForYou">
            {dummyData.map((item) => (
                <div className="card" key={item.id} onMouseEnter={handleHover} onMouseLeave={handleMouseLeave}>
                    <h2>{item.title}</h2>
                    <div className='image'>
                        <img src={item.image} alt={item.title} />
                        {isFavorite ? (
                            <FavoriteIcon
                                className="favorite-icon"
                                onMouseEnter={() => setShowPopup(true)}
                                onMouseLeave={() => setShowPopup(false)}
                                onClick={toggleFavorite}
                            />
                        ) : (
                            <FavoriteBorderIcon
                                className="favorite-icon"
                                onMouseEnter={() => setShowPopup(true)}
                                onMouseLeave={() => setShowPopup(false)}
                                onClick={toggleFavorite}
                            />
                        )}
                        <button className="image-button">Inquire Wholesaler</button>
                    </div>
                    <div className='verified' ref={verifiedHeadingRef}><VerifiedIcon /><h4>{item.verifiedHeading}</h4></div>
                    {showPopup && <div className="favorite-popup">{isFavorite ? `${verifiedHeading} was added to favorites` : 'Add to Favorites'}</div>}
                    {addedToFavorite && <div className="favorite-added-text">Added to Favorites</div>}
                </div>
            ))}
        </div>
    );
};

export default ForYou;
