function payWithPaystack(plan, amount) {
    let phone = prompt("Enter your phone number:");
    if (!phone) return;

    let handler = PaystackPop.setup({
        key: 'pk_live_075fe547503fcf530d4c1382cbdb30c6b66cd5c8',  // Replace with your real PUBLIC key
        email: phone + '@kalyburconnect.com',
        amount: amount * 100,
        currency: 'NGN',
        ref: '' + Math.floor(Math.random() * 1000000000 + 1),
        metadata: {
            custom_fields: [
                {
                    display_name: "Phone Number",
                    variable_name: "phone_number",
                    value: phone
                },
                {
                    display_name: "Plan",
                    variable_name: "voucher_plan",
                    value: plan
                }
            ]
        },
        callback: function(response) {
            // Redirect to backend for voucher processing
            window.location.href = `https://aliyuibrahimmuh.repl.co/verify?reference=${response.reference}`;
        },
        onClose: function() {
            alert('Transaction was cancelled');
        }
    });

    handler.openIframe();
}
