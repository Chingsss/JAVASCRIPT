let contactsList = []; //create empyt array
//start adding phone numbers to array

contactsList.push({name:"lee",email:"leemlwando@gmail.com",phone:"0950482560",password:"1234"}) //add object  to array
contactsList.push({name:"mike",email:"mike@gmail.com",phone:"0967433377",password:"1234"})
contactsList.push({name:"peter",email:"peter@gmail.com",phone:"0978446633",password:"1234"})
contactsList.push({name:"john",email:"john@gmail.com",phone:"0933443322",password:"1234"})
contactsList.push({name:"alll",email:"alll@gmail.com",phone:"0943332223",password:"1234"})
contactsList.push({name:"amaka",email:"amaka@gmail.com",phone:"097533662",password:"1234"})
contactsList.push({name:"iye",email:"iye@gmail.com",phone:"0973226677",password:"1234"})
contactsList.push({name:"bonse",email:"bonse@gmail.com",phone:"097322211",password:"1234"})
contactsList.push({name:"tebonse",email:"tebonse@gmail.com",phone:"097588322",password:"1234"})
contactsList.push({name:"abantu",email:"abantu@gmail.com",phone:"09763344223",password:"1234"})
contactsList.push({name:"ifinama",email:"ifinama@gmail.com",phone:"09786336622/ 097337223",password:"1234"})
contactsList.push({name:"inkoko",email:"inkoko@gmail.com",phone:"0964332211",password:"1234"})
contactsList.push({name:"ifipushi",email:"ifipushi@gmail.com",phone:"097222211",password:"1234"})
contactsList.push({name:"dobo",email:"dobo@gmail.com",phone:"096522112",password:"1234"})
contactsList.push({name:"weed",email:"weed@gmail.com",phone:"09725536633",password:"1234"})
contactsList.push({name:"umushanga",email:"umushanga@gmail.com",phone:"0983662377/0974336644",password:"1234"})
contactsList.push({name:"fyompo",email:"fyompo@gmail.com",phone:"0933772277",password:"1234"})
contactsList.push({name:"fympobo",email:"fympobo@gmail.com",phone:"0933775533/094466337",password:"1234"})
contactsList.push({name:"akafna",email:"akafna@gmail.com",phone:"0933776633",password:"1234"})
contactsList.push({name:"boi",email:"boi@gmail.com",phone:"0993366366",password:"1234"})
contactsList.push({name:"amasampo",email:"amasampo@gmail.com",phone:"0337883663",password:"1234"})
contactsList.push({name:"samos",email:"samos@gmail.com",phone:"0038837333",password:"1234"})
contactsList.push({name:"sampoz",email:"sampoz@gmail.com",phone:"0933773663/09336633",password:"1234"})
contactsList.push({name:"sampoliciuius",email:"sampoliciuius@gmail.com",phone:"003773776",password:"1234"})
contactsList.push({name:"cbu",email:"cbu@gmail.com",phone:"0950482560",password:"1234"})
contactsList.push({name:"unzacollege",email:"unzacollege@gmail.com",phone:"0950482560",password:"1234"})


let myNewContactsList = []; //create a new list

//loop through the array

for(i=0; i<contactsList.length-1; i++){ //rember array index starts from 0 not 1
        //for each item in the array at index i, get the item 
        if(contactsList[i]["phone"]){
            //which means it exists and not equal to 0
                //validate that phone field contains valid number
            
                //check if it contains /
                if(contactsList[i]["phone"].includes("/")){
                    //split the string at /
                    let _splitString = contactsList[i]["phone"].split("/");
                    //for each time element in _splitString array, push to newContactsList
                    for(j=0; j<_splitString.length; j++){
                        myNewContactsList.push(_splitString[j]); //add phone numbers to list
                    }

                }else{
                    //else just add to list 
                    myNewContactsList.push(contactsList[i]["phone"]);
                }

                
        }
};

console.log("my old contacts list", contactsList);
console.log("my new contacts list:", myNewContactsList);




/**
 * thats how we used to do it before....
 * but in the new EcmaScript specification i.e es6 and beyond
 * we a function called map. lets use it in the next example
 */



 contactsList.map(function(contact,index){
   //remember array index starts from 0 not 1
        //for each item in the array at index i, get the item 
        if(contact["phone"]){
            //which means it exists and not equal to 0
                //validate that phone field contains valid number
            
                //check if it contains /
                if(contact["phone"].includes("/")){
                    //split the string at /
                    let _splitString = contact["phone"].split("/");
                    //for each time element in _splitString array, push to newContactsList
                    _splitString.map(function(_contact,_index){

                        myNewContactsList.push(_contact); //add phone numbers to list
                    });

                }else{
                    //else just add to list 
                    myNewContactsList.push(contact["phone"]);
                }

                
        } 
 });

 
console.log("my old contacts list with a better way", contactsList);
console.log("my new contacts list: a better way", myNewContactsList);