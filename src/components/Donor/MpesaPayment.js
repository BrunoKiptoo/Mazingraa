// import React, { useState } from 'react';

// function MpesaPayment() {
//   const [phone, setPhoneNumber] = useState('');
//   const [amount, setAmount] = useState('');
//   // const [currency, setCurrency] = useState('KES');
//   // const [transactionDesc, setTransactionDesc] = useState('');
//   const [resultMessage, setResultMessage] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const phone = '0701800481'; // Replace with user input
//     const amount = 100; // Replace with user input
  
//     try {
//       const response = await fetch('http://127.0.0.1:3000/mpesa/stk_push', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ phone, amount })
//       });
  
//       const data = await response.json();
//       console.log(data); // Response from M-Pesa API
//     } catch (error) {
//       console.error(error);
//     }
//   }
  

//   return (
//     <div className="">
//       <div className="w-full max-w-md p-8 bg-white rounded-md shadow-lg">
//         <div className="flex justify-center">
//           <h2 className="text-xl font-bold mb-4 mpesa">M-PESA Payment</h2>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label htmlFor="phone-number" className="block font-medium mb-2">
//               Phone Number:
//             </label>
//             <input
//               id="phone-number"
//               type="tel"
//               pattern="[0-9]{10}"
//               required
//               className="border border-gray-300 rounded-md w-full p-2"
//               value={phone}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//             />
//           </div>
//           <div className="mb-4">
//             <label htmlFor="amount" className="block font-medium mb-2">
//               Amount:
//             </label>
//             <div className="flex items-center">
//               <input
//                 id="amount"
//                 type="number"
//                 min="1"
//                 step="any"
//                 required
//                 className="border border-gray-300 rounded-md p-2 mr-2 w-3/4"
//                 value={amount}
//                 onChange={(e) => setAmount(e.target.value)}
//               />
//               {/* <select
//                 className="border border-gray-300 rounded-md p-2 w-1/4"
//                 value={currency}
//                 onChange={(e) => setCurrency(e.target.value)}
//               >
//                 <option value="KES">KES</option>
//                 <option value="USD">USD</option>
//                 <option value="EUR">EUR</option>
//               </select> */}
//             </div>
//           </div>
//           <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4">
//             Submit Payment
//           </button>
//         </form>
//         {resultMessage && <p className="mt-4">{resultMessage}</p>}
//       </div>
//       </div>
//   );
// }
// export default MpesaPayment;


import React, { useState } from 'react';

function MpesaPayment() {
  const [phone, setPhone] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:3000/mpesa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ phone, amount })
      });

      const data = await response.json();
      console.log(data); // Response from M-Pesa API
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Phone:
        <input type="text" value={phone} onChange={event => setPhone(event.target.value)} />
      </label>
      <br />
      <label>
        Amount:
        <input type="text" value={amount} onChange={event => setAmount(event.target.value)} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}


export default MpesaPayment;