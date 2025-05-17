// script.js
function buyVoucher(plan, amount) {
  const phone = prompt("Enter your phone number:");
  if (!phone) return alert("Phone number is required.");

  const paystackURL = {
    '8hours': 'https://paystack.com/pay/8hourvoucher',
    '30hours': 'https://paystack.com/pay/30hourvoucher',
    '3days': 'https://paystack.com/pay/3dayvoucher',
    '7days': 'https://paystack.com/pay/7dayvoucher',
    '30days': 'https://paystack.com/pay/30dayvoucher'
  }[plan];

  const url = `${paystackURL}?phone=${encodeURIComponent(phone)}`;
  window.location.href = url;
}
