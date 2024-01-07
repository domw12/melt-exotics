paypal.Buttons({
    creatOrder: function(data, actions) {
        //this function sets up the details of transaction, including the amount and line item details.
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '0.010'
                }
            }]
        })
    },
    
    onApprove: function(data, actions){
return actions.order.capture().then(function(details){
    alert('Transation completed by ' + details.payer.name.given_name)
})
    }







}).render('#paypal-button-container');