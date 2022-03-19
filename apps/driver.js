const eventEmitter=require('../lib/events.pool');
require("./vendor")

eventEmitter.on("handleThePickup", handleThePickup);
eventEmitter.on('transmit the order', handleTheTransmit);
eventEmitter.on('the order has been delivered', handleThedelivery);

function  handleThePickup (theOrder){

console.log('DRIVER', `picked up ${theOrder.orderId}`);

eventEmitter.emit("transmit the order", theOrder);

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
     }, 2000);
    }

function handleThedelivery(theOrder){

    console.log(`DRIVER: delivered up ${theOrder.orderId}`)
    setTimeout(() => {
     eventEmitter.emit("order successfully deliverd", theOrder);
    }, 2000);
}