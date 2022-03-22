'use strict';

const client=require('socket.io-client')
const host='http://localhost:3000';

const capsConnection =client.connect(host);
//console.log('iiiii');
capsConnection.on('transmit the order',theOrder=>{
    console.log(`picked up ${theOrder.orderId}`);
    setTimeout(() => {
    capsConnection.emit("handleTheTransmit",theOrder)
}, 1000);
});

capsConnection.on('order successfully deliverd',theOrder=>{
    console.log(`delivered up ${theOrder.orderId}`);
    setTimeout(() => {
    capsConnection.emit("delivered",theOrder)
}, 2000);
});


//////////////////////////////////////////////////////////////////////////////////////////////////
//const eventEmitter=require('../lib/events.pool');
//require("./vendor")


/*eventEmitter.on("handleThePickup", handleThePickup);
eventEmitter.on('transmit the order', handleTheTransmit);
eventEmitter.on('the order has been delivered', handleThedelivery);

function  handleThePickup (theOrder){

console.log('DRIVER', `picked up ${theOrder.orderId}`);

setTimeout(() => {
eventEmitter.emit("transmit the order", theOrder);
}, 1000);

}


function handleTheTransmit(theOrder){
    let time = new Date().toISOString();

    console.log(`EVENT { event: 'in-transit',
    time: ${time},
    payload: 
    { store: ${theOrder.store},
    orderID: ${theOrder.orderId},
    customer: ${theOrder.customer},
    address:  ${theOrder.address}} }
    `) 
    setTimeout(() => {
    eventEmitter.emit("the order has been delivered", theOrder);
     }, 3000);
    }

function handleThedelivery(theOrder){

    console.log(`DRIVER: delivered up ${theOrder.orderId}`)
    setTimeout(() => {
     eventEmitter.emit("order successfully deliverd", theOrder);
    }, 2000);
}*/