import React from 'react';
import TopNavbar from './TopNavBar';
import BottomNavBar from './BottomNavBar';
import '../Records.css'
import VerifiedIcon from '@mui/icons-material/Verified';

const Records = () => {
    // Dummy data for receipts
    const dummyReceipts = [
        {
            traderName: "ABC Traders",
            date: "2024-04-20",
            receiptNumber: "R001",
            items: [
                { itemName: "Item 4", quantity: 2, pricePerItem: 12 },
                { itemName: "Item 4", quantity: 2, pricePerItem: 12 },
                { itemName: "Item 4", quantity: 2, pricePerItem: 12 },
                { itemName: "Item 1", quantity: 2, pricePerItem: 10 },
                { itemName: "Item 2", quantity: 1, pricePerItem: 15 },
            ]
        },
        {
            traderName: "XYZ Inc.",
            date: "2024-04-21",
            receiptNumber: "R002",
            items: [
                { itemName: "Item 3", quantity: 3, pricePerItem: 8 },
                { itemName: "Item 4", quantity: 2, pricePerItem: 12 },
            ]
        },
         {
            traderName: "XYZ Inc.",
            date: "2024-04-21",
            receiptNumber: "R002",
            items: [
                { itemName: "Item 3", quantity: 3, pricePerItem: 8 },
                { itemName: "Item 4", quantity: 2, pricePerItem: 12 },
            ]
        },
         {
            traderName: "XYZ Inc.",
            date: "2024-04-21",
            receiptNumber: "R002",
            items: [
                { itemName: "Item 3", quantity: 3, pricePerItem: 8 },
                { itemName: "Item 4", quantity: 2, pricePerItem: 12 },
            ]
        },
         {
            traderName: "XYZ Inc.",
            date: "2024-04-21",
            receiptNumber: "R002",
            items: [
                { itemName: "Item 3", quantity: 3, pricePerItem: 8 },
                { itemName: "Item 4", quantity: 2, pricePerItem: 12 },
            ]
        },
         {
            traderName: "XYZ Inc.",
            date: "2024-04-21",
            receiptNumber: "R002",
            items: [
                { itemName: "Item 3", quantity: 3, pricePerItem: 8 },
                { itemName: "Item 4", quantity: 2, pricePerItem: 12 },
          { itemName: "Item 4", quantity: 2, pricePerItem: 12 },
          { itemName: "Item 4", quantity: 2, pricePerItem: 12 },
          { itemName: "Item 4", quantity: 2, pricePerItem: 12 },
          
            ]
        },
        // Add more dummy data as needed
    ];

    return (
        <>
            <TopNavbar />
            <div className="record-container">
                <h1 className='title-receipt'>Received Receipts</h1>
                {dummyReceipts.map((receipt, index) => (
                    <div key={index} className="receipt">
                        <h2 className='receipt-number'>Receipt {receipt.receiptNumber}</h2>
                        <p className='trader'><strong>Trader:</strong> {receipt.traderName}</p>
                        <p className='date-receipt'><strong>Date:</strong> {receipt.date}</p>
                        
  <div className='verified-receipt'>
                               <section className='ver-icon'><VerifiedIcon />
                               Accepted
                               </section> 
                            </div>

                        <div className="columns">
                          
                            <div className="column">
                                <h3>ITEMS</h3>
                                {receipt.items.map((item, i) => (
                                    <p key={i}className='item-name'>{item.itemName}</p>
                                ))}
                            </div>
                            <div className="column">
                                <h3>QUANTITY</h3>
                                {receipt.items.map((item, i) => (
                                    <p key={i} className='quantity'>{item.quantity}</p>
                                ))}
                            </div>
                            <div className="column">
                                <h3>@PRICE </h3>
                                {receipt.items.map((item, i) => (
                                    <p key={i} className='price'>${item.pricePerItem}</p>
                                ))}
                            </div>
                            <div className="column">
                                <h3>TOTAL</h3>
                                {receipt.items.map((item, i) => (
                                    <p key={i} className='total-sum'>${item.quantity * item.pricePerItem}</p>
                                ))}
                            </div>
                        </div>
                        <p className="total"><strong>Total:</strong> ${receipt.items.reduce((total, item) => total + (item.quantity * item.pricePerItem), 0)}</p>
                        <div className="action-buttons">
                            <button className="accept-button">Accept</button>
                            <button className="delete-button">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <BottomNavBar />
        </>
    );
}

export default Records;
