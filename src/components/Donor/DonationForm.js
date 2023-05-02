





import React, { useState } from 'react';
import { FaCreditCard, FaPaypal } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// import MpesaPayment from './MpesaPayment';


function PaymentForm() {
  const [selectedOption, setSelectedOption] = useState('credit-card');
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  // const [isDonated, setIsDonated] = useState(false);
  const [resultMessage, setResultMessage] = useState('');
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const transaction = { phoneNumber, amount };
    fetch(' https://mazingira-api.onrender.com/donations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(transaction)
    })
    .then(() => {
      setShowThankYouMessage(true);
    })
    .catch(() => {
      setShowThankYouMessage(true);
    });
  }

  

  
  



  const handleOptionChange = (option) => {
    setSelectedOption(option);
    if (option === 'paypal') {
        window.location.href = 'https://www.paypal.com/signin'; 
      }
      // else if (option === 'net-banking') {
      //   history('/mpesa-transactions'); 
      // }
     
  };




  return (
    <div className="flex flex-col items-center mt-8">
 <ul role="tablist" className="flex">
    <li>
      <button
        type="button"
        role="tab"
        className={` rounded-lg text-gray-700 font-medium py-2 px-3 focus:outline-none transition duration-150 ease-in-out ${
          selectedOption === 'credit-card'
            ? 'bg-yellow-400 text-gray-900'
            : 'text-gray-600 hover:text-gray-900 hover:scale-105'
        }`}
        onClick={() => handleOptionChange('credit-card')}
      >
        <FaCreditCard className="inline-block mr-1" />
        Credit Card
      </button>
    </li>
    <li>
      <button
        type="button"
        role="tab"
        className={`rounded-lg text-gray-700 font-medium py-2 px-3 focus:outline-none transition duration-150 ease-in-out ${
          selectedOption === 'paypal'
            ? 'bg-blue-600 text-white'
            : 'text-gray-600 hover:text-gray-900 hover:scale-105'
        }`}
        onClick={() => handleOptionChange('paypal')}
      >
        <FaPaypal className="inline-block mr-1" />
        Paypal
      </button>
    </li>
    <li>
      <button 
        className={`image-btn focus:outline-none transition duration-150 ease-in-out ${selectedOption === 'net-banking'
    
        ? ''
        : 'hover:scale-105'
    } `}
        onClick={() => handleOptionChange('net-banking')}
      >
      </button>
    </li>
  </ul>
      <div className="w-full max-w-sm mt-8">
        {selectedOption === 'credit-card' && (
          <form
            role="form"
            onSubmit={(e) => e.preventDefault()}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 rounded-lg"
          >
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-gray-700 font-bold mb-2"
              >
                Card Owner
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Card Owner Name"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cardNumber"
                className="block text-gray-700 font-bold mb-2"
              >
                Card number
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="cardNumber"
                  id="cardNumber"
                  placeholder="Valid card number"
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <span
className="fa fa-credit-card text-gray-400 text-lg"
aria-hidden="true"
></span>
<span className="sr-only">Credit Card Icon</span>
</div>
</div>
<div className="mb-4 flex -mx-2">
<div className="px-2 w-1/2">
<label
               htmlFor="cardExpiry"
               className="block text-gray-700 font-bold mb-2"
             >
Expiration Date
</label>
<input
               type="text"
               name="cardExpiry"
               id="cardExpiry"
               placeholder="MM / YY"
               required
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             />
</div>
<div className="px-2 w-1/2">
<label
               htmlFor="cardCvc"
               className="block text-gray-700 font-bold mb-2"
             >
CVC
</label>
<input
               type="text"
               name="cardCvc"
               id="cardCvc"
               placeholder="CVC"
               required
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
             />
</div>
</div>
<div className="mt-8">
<button
             type="submit"
             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
           >
Submit
</button>
</div>
</div>
</form>

)}


{selectedOption === 'paypal' && (
<div id="paypal" class="tab-pane fade pt-3">
<p class="text-gray-700">You will be redirected to the PayPal website to complete your donation.</p>
</div>
)}




{selectedOption === 'net-banking' && (
  <div className="">
    <div className="w-full max-w-md p-8 bg-white rounded-md shadow-lg">
      <div className="flex justify-center">
        <h2 className="text-xl font-bold mb-4 mpesa">M-PESA Payment</h2>
      </div>
      <form onSubmit={handleSubmit}>
  <label className="block mb-2">
    Phone Number:
    <input
      type="text"
      value={phoneNumber}
      onChange={e => setPhoneNumber(e.target.value)}
      placeholder="Enter your phone number"
      className="border-gray-400 border rounded-md px-4 py-2 w-full mt-1"
    />
  </label>
  <label className="block mb-2">
    Amount:
    <input
      type="number"
      value={amount}
      onChange={e => setAmount(e.target.value)}
      placeholder="Enter the amount you want to donate"
      className="border-gray-400 border rounded-md px-4 py-2 w-full mt-1"
    />
  </label>
  <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4">
    Submit Payment
  </button>
</form>
{showThankYouMessage && (
              <div className="mt-4 p-4 bg-green-100 rounded-md">
                <h2 className="text-xl font-semibold text-green-800">Thank you for your donation!</h2>
                <p className="mt-2">
                  Your donation has been received and will be used to support the organization's efforts.
                </p>
              </div>
            )}


    </div>
  </div>
)}


</div>
</div>

);
}

export default PaymentForm;