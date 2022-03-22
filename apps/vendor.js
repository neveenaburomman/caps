'use strict';

const { faker } = require("@faker-js/faker");

const client=require('socket.io-client');
const host='http://localhost:3000';


const capsConnection =client.connect(host);  // create a connection between server and client 

capsConnection.on('prepareTheOrder',() =>{
//console.log('hhi')

   let theOrder={
    
       store :"Neveen's store",
       orderId: faker.datatype.uuid(),
       customer:faker.name.firstName(),
       address: faker.address.city()

   }
   capsConnection.emit('handletheorder',theOrder);

})


capsConnection.on("order successfully deliverd",theOrder=>{
    console.log(`thank you for delivering ${theOrder.orderId}`);
})


//////////////////////////////////////////////////////////////////////////////////////////////////////
//const eventEmitter=require('../lib/events.pool');
//require("./driver");

/*eventEmitter.on("prepareTheOrder",handletheorder);
eventEmitter.on("order successfully deliverd",handlethedelivery);

 function handletheorder(){
    let time = new Date().toISOString();
    let theOrder={
     
        store :"Neveen's store",
        orderId: faker.datatype.uuid(),
        customer:faker.name.firstName(),
        address: faker.address.city()

    }
    console.log(`EVENT { event: 'pickup',
     time: ${time},
     payload: 
     { store: ${theOrder.store},
     orderID: ${theOrder.orderId},
     customer: ${theOrder.customer},
     address:  ${theOrder.address}} }
     `)

     
    eventEmitter.emit("handleThePickup",theOrder);
      

    
    //console.log("hi")

 }

 function handlethedelivery(theOrder){
    let time = new Date().toISOString();
     console.log(`VENDOR: Thank you for delivering ${theOrder.orderId}`)
     console.log(`EVENT { event: 'delivered',
     time: ${time},
     payload: 
     { store: ${theOrder.store},
     orderID: ${theOrder.orderId},
     customer: ${theOrder.customer},
     address:  ${theOrder.address}} }
     `)

     }
    */
