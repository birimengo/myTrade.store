import React from 'react';
import '../Categories.css'; // Import CSS file for styling

const Categories = () => {
    const categories = [
        "Agricultural",
        "Hardware",
        "Seals and Grains",
        "Electronics and Electrical Appliances",
        "Beverages and Drinks",
        "Plastics",
        "Foods",
        "Swanks",
        "Shop-Store-Variety",
        "Animal Feeds",
        "Shoes",
        "Clothing's",
        "Beddings",
        "Household Items",
        "Pet Supplies",
        "Health and Beauty",
        "Books and Stationery",
        "Toys and Games",
        "Sports and Leisure",
        "Home and Garden",
        "Automobiles and Motorcycles",
        "Jewelry and Accessories",
        "Art and Collectibles",
        "Antiques and Heritage",
        "Musical Instruments",
        "Cameras and Optics",
        "Computers and Electronics",
        "Office Supplies",
        "Home Appliances",
        "Furniture",
        "Home Decor",
        "Kitchenware",
        "Tools and Hardware",
        "Gardening and Pest Control",
        "Pet Supplies",
        "Milk"
    ];

    return (
        <div className="categories-container">
            <div className="category-card"
            >           <h3>Categories</h3>

                <ul className="category-list">
                    {categories.map((category, index) => (
                        <li key={index}>{category}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Categories;
