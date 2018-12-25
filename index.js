var name = new Array(10);
var email = new Array(10);
var phone_number = new Array(10);
var password = new Array(10);
for (let i=0; i<=10; i++);{
    let Name = prompt("ENTER YOUR NAME: ");
    name.push(Name);
    let Email = prompt("ENTER YOUR EMAIL: ");
    email.push(Name);
    let Phone_Number = prompt("ENTER YOUR PHONE NUMBER: ");
    phone_number.push(Name);
    let Password = prompt("ENTER YOUR PASSWORD: ");
    password.push(Name);
}
for (let i=0; i<=10; i++){
    console.log(name[i]);
    console.log(email[i]);
    console.log(phone_number[i]);
    console.log("Sorry we can\'t show you teh password");
}