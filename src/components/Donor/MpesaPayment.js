// import React, { useState } from "react";

// function MpesaPayment({ orgShortCode, orgPasskey, orgCallbackUrl }) {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [amount, setAmount] = useState("");
//   const [transactionDesc, setTransactionDesc] = useState("");
//   const [resultMessage, setResultMessage] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const timestamp = new Date()
//       .toISOString()
//       .replace(/[^0-9]/g, "")
//       .slice(0, -3);
//     const password = btoa(`${orgShortCode}${orgPasskey}${timestamp}`);

//     fetch("https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${YOUR_ACCESS_TOKEN}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         BusinessShortCode: orgShortCode,
//         Password: password,
//         Timestamp: timestamp,
//         TransactionType: "CustomerPayBillOnline",
//         Amount: amount,
//         PartyA: phoneNumber,
//         PartyB: orgShortCode,
//         PhoneNumber: phoneNumber,
//         CallBackURL: orgCallbackUrl,
//         AccountReference: "Donation",
//         TransactionDesc: transactionDesc,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setResultMessage(data.ResponseDescription);
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   };

//   return (
//     <div>
//       <h2>M-PESA Payment</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Phone Number:
//           <input
//             type="tel"
//             pattern="[0-9]{10}"
//             required
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Amount (KES):
//           <input
//             type="number"
//             min="1"
//             step="any"
//             required
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//           />
//         </label>
//         <br />
//         <label>
//           Transaction Description:
//           <input
//             type="text"
//             required
//             value={transactionDesc}
//             onChange={(e) => setTransactionDesc(e.target.value)}
//           />
//         </label>
//         <br />
//         <button type="submit">Submit Payment</button>
//       </form>
//       {resultMessage && <p>{resultMessage}</p>}
//     </div>
//   );
// }

// export default MpesaPayment;


import React from 'react'

function MpesaPayment() {
  return (
    <div>MpesaPayment</div>
  )
}

export default MpesaPayment
