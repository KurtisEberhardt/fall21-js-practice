//Write a function that will output 100 through 0
function reverseCount(){
    for(let i =100; i>=0; i--){
        console.log(i)
    }
}

//Write a function that will take in 2 params, one is a start number, the other is a limit number. Console log every number between the 2. Assume the second number will always be larger than the first.

function varLoop(start, condition){
for(let i = start; i <= condition; i++){
    console.log(i)
}
}

//Write a function that will take in an array of objects, console log custom statements for each role:
//Instruct role should say 'Welcome (role) (name).'
//Admin role should say 'Welcome (role) (name), Have a great day.'
//Any other role should say 'Not a codeworks employee.'

  let peeps = [{
    name: 'Jake',
    role: 'Instruct'
  },
  {
    name: 'Harrison',
    role: 'Instruct'
  },
  {
    name: 'Brittany',
    role: 'Admin'
  },
  {
    name: 'Mark',
    role: 'Instruct'
  },
  {
    name: 'Kurtis',
    role: 'Tester'
  }]

  function greet(peeps){
      //FIXME figure out where the missing bracket is :)
    for(let i=0; i<= peeps.length; i++){
        let staff = peeps[i]
        if(staff.role == "Instruct"){
            console.log("Welcome" + staff.role + staff.name)
        }else if (staff.role == 'Admin'){
            console.log('Hello' + staff.role + staff.name + 'Have a great day!')
        }else {
            console.log(staff.name + 'is not a CodeWorks Employee')
        }
  }
}
// peeps.forEach(p =>{
//     if(p.role == "Instruct"){
//         console.log(`Hello ${p.role} ${p.name}`)
//     }else if (p.role == 'Admin'){
//         console.log(`Hello ${p.role} ${p.name}, Have a great day!`)
// }
// }

// write a function that will take in a num and console log false if num is odd or true if num is even from 0 - num

function evenOrOdd(num){
for(let i = 0; i <= num; i++){
//     if( i % 2 ==1){
//         console.log(false)
//     }else {
//         console.log(true)
// }
console.log(i%2 == 0)
}
}

//Given a basket of items with name, type, price and quantity, write a function that will return the total cost of the basket. 
//One thing to note is that different types are taxed differently. 
//Vegetables and fruit have a tax of 7% while meat has a tax of 9%. Everything else is taxed at 8%.
//How could we use a switch to solve this?
let basket = [
  {
    name: "Apple",
    type: 'Fruit',
    price: 3,
    quantity: 7
  },
  {
    name: "Carrot",
    type: 'Vegetable',
    price: 1,
    quantity: 4
  },
  {
    name: "Banana",
    type: 'Fruit',
    price: 2.50,
    quantity: 5
  },
  {
    name: "Lettuce",
    type: 'Vegetable',
    price: 6,
    quantity: 1
  },
  {
    name: "Steak",
    type: 'Meat',
    price: 27,
    quantity: 3
  },
  {
    name: "D$ Special",
    type: 'Other',
    price: 40,
    quantity: 9
  }
  ]
function cartTotal(items){
    let total = 0
    for(let i = 0; i<=items.length; i++){
        const item = items[i]
        switch(item.type){
            case 'Vegetable':
            case 'Fruit':
                total += ((item.price * item.quantity) + ((item.price * item.quantity) * .07))
                break;
            case 'Meat':
                total += ((item.price * item.quantity) + ((item.price * item.quantity)*.09))
                break;
            default:
                total += ((item.price * item.quantity) + ((item.price * item.quantity) * 0.08))
                break;
        }
        console.log(total)
}
    // items.forEach(item=>{
    //   switch(item.type){
    //     case 'Vegetable':
    //     case 'Fruit':
    //       total += ((item.price * item.quantity) + ((item.price * item.quantity) * .07)  )
    //       break;
    //     case 'Meat':
    //       total += ((item.price * item.quantity) + ((item.price * item.quantity) * .09)  )
    //       break;
    //     default:
    //       total += ((item.price * item.quantity) + ((item.price * item.quantity) * .08)  )
    //       break;
    //   }
    //   })
}
cartTotal(basket)



//Bonus questions?


// let staffs = [{ id: 1, name: 'Jon' }, { id: 2, name: 'Yuli' }, { id: 21, name: 'Peter' },
// { id: 17, name: 'St. MaryLou de la Playa Carmen' }, { id: 51, name: 'Doug' },
// { id: 881, name: 'Paul' }, { id: 0, name: 'Jon' }, { id: 999, name: 'Timma' }]

// function findById(staffId) {
//     let foundStaff = staffs.find(staff => staff.id == staffId)
//     if(foundStaff == null){
//         return {error: "no user with that id."}
//     }else return foundStaff
// }
