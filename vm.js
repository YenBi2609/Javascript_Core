var customers = [];
customers.push({ id: 1, vCPU: 2, ram: 4, price: 30 });
customers.push({ id: 2, vCPU: 2, ram: 4, price: 30 });
customers.push({ id: 3, vCPU: 4, ram: 2, price: 30 });
customers.push({ id: 4, vCPU: 1, ram: 2, price: 10 });
customers.push({ id: 5, vCPU: 1, ram: 2, price: 10 });
customers.push({ id: 6, vCPU: 1, ram: 2, price: 10 });
customers.push({ id: 7, vCPU: 1, ram: 2, price: 10 });
customers.push({ id: 8, vCPU: 2, ram: 2, price: 15 });
customers.push({ id: 9, vCPU: 2, ram: 2, price: 15 });
customers.push({ id: 10, vCPU: 2, ram: 2, price: 15 });
customers.push({ id: 11, vCPU: 2, ram: 2, price: 15 });
customers.push({ id: 12, vCPU: 2, ram: 2, price: 15 });
customers.push({ id: 13, vCPU: 2, ram: 2, price: 15 });
customers.push({ id: 14, vCPU: 1, ram: 4, price: 15 });
customers.push({ id: 15, vCPU: 1, ram: 4, price: 15 });
customers.push({ id: 16, vCPU: 1, ram: 4, price: 15 });
customers.push({ id: 17, vCPU: 1, ram: 4, price: 15 });
customers.push({ id: 18, vCPU: 2, ram: 4, price: 30 });

customers.sort(function (a, b) { return (b.price / (b.vCPU + b.ram)) - (a.price / (a.vCPU + a.ram));});

var totalPrice = 0;
var totalRam = 16;
var totalVCPU = 16;
var acceptedCustomers = [];
for ( let i = 0; i < 10; i++) {

    totalRam -= customers[i].ram;
    totalVCPU -= customers[i].vCPU;
    if (totalRam < 0 || totalVCPU < 0) { break; }
    acceptedCustomers.push(customers[i]);
    totalPrice += customers[i].price;
}
console.log("Accepted Customers : ")
console.log(acceptedCustomers); 
console.log("Total Price : " + totalPrice);

