"use strict";

// in today's lab we will refactor our code to get the same result but with using the socket.io
//this file will be for the hub /server socket.io 

require('dotenv').config();

const port = process.env.PORT || 3000;
console.log(port);

const socket = require('socket.io')(port);

 
socket.on('connection', (client) => {

    let time = new Date().toISOString();
    console.log("A client has been connected", client.id);

    client.on('pick-up', () => {
        setInterval(() => {
        socket.emit('prepareTheOrder');//this will emit the pickup event to all clients
        }, 5000);
        //console.log('jkjk')

    })

    client.on("handletheorder", theOrder => {


        console.log(`EVENT { event: 'pickup',
                  time: ${time},
                  payload: 
                  { store: ${theOrder.store},
                  orderID: ${theOrder.orderId},
                  customer: ${theOrder.customer},
                  address:  ${theOrder.address}} }
                     `)
        socket.emit('transmit the order', theOrder);
    })



    client.on("handleTheTransmit", theOrder => {
        console.log(`EVENT { event: 'in-transit',
                  time: ${time},
                  payload: 
                 { store: ${theOrder.store},
                 orderID: ${theOrder.orderId},
                 customer: ${theOrder.customer},
                 address:  ${theOrder.address}} }
                  `)

        socket.emit("order successfully deliverd",theOrder);


    })

    client.on("delivered", theOrder =>{
        console.log(`EVENT { event: 'delivered',
                  time: ${time},
                  payload: 
                  { store: ${theOrder.store},
                  orderID: ${theOrder.orderId},
                  customer: ${theOrder.customer},
                  address:  ${theOrder.address}} }
                    `)
    })
});
////////////////////////////////////////////////////////////////////////////////
//const eventEmitter = require("./lib/events.pool");
//require("./apps/driver");
//require("./apps/vendor");


//setInterval(() => {
//eventEmitter.emit("prepareTheOrder");
//}, 5000);

//////////////////////////////////