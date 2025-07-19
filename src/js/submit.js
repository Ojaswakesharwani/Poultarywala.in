// document.querySelector('.quote-form').addEventListener('submit', async function (e) {
//   e.preventDefault();

//   const form = e.target;
//   const data = {
//     name: form.name.value,
//     trading: form.trading.value,
//     phone: form.phone.value,
//     city: form.city.value,
//     district: form.district.value,
//     purchase: form.purchase.value,
   
//   };

//   const webhookURL = 'https://script.google.com/macros/s/AKfycbz6gEakMjPd19uBb3rsVewIa95ixtiFYBbL_el8cJgUwIbVeRWd1Y0zsTMpLLT3ozw/exec';

//   try {
//     const res = await fetch(webhookURL, {
//       method: 'POST',
//       body: JSON.stringify(data),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });

//     const result = await res.json();
//     if (result.result === 'success') {
//       alert('आपका कोटेशन सफलतापूर्वक सबमिट हो गया है!');
//       form.reset();
//     } else {
//       alert('कोई त्रुटि हुई है, कृपया पुनः प्रयास करें।');
//     }
//   } catch (err) {
//     alert('Error: ' + err.message);
//   }
// });
