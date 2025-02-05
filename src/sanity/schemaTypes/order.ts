
export const order = {
    name: 'order',
    type: 'document',
    title: 'Order data',
    fields: [
        {
            name: 'firstName',
            title: 'First Name',
            type: 'string'
        },
        {
            name: 'lastName',
            title: 'Last Name',
            type: 'string'
        },
        {
            name: 'address',
            title: 'Address',
            type: 'string'
        },
        {
            name: 'city',
            title: 'City',
            type: 'string'
        },
        {
            name: 'ZipCode',
            title: 'Zip Code',
            type: 'string'
        },
        {
            name: 'phone',
            title: 'Phone no',
            type: 'string'
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string'
        },
        {
            name: 'total',
            title: 'Total',
            type: 'number'
        },
        {
            name: 'discount',
            type : 'number',
            title: 'Discount'
        },
        {
            name: 'cartItems',
            title: 'Cart Items',
            type: 'array',
            of : [ { type: 'reference', to : { type : 'product' } }]
        },
        {
            name: 'status',
            title : 'Order Status',
            type: 'string',
            options: {
                list : [
                    {title : 'Pending' , value : 'pending'},
                    {title : 'Success' , value : 'success'},
                    {title : 'Dispatch' , value : 'dispatch'},
                ],
                layout : 'radio' // Optionally, change to 'dropdown' if you prefer a dropdown
            },
            initialValue : 'pending' // by Default value is pending
        }
        
        
    ]
}