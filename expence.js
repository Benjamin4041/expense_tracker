// useful
let balance=10000
let arrAmount=[]
// let arrExpense=[]
// let arrIncome=[]
let arrText=[]
// let arrTextCredit=[]





// this is for the expense & income box
// let expenseIncome=(x)=>{
//     if(x[0]==="-"){
//         arrExpense.push(x.replace('-',''))
//         console.log(arrExpense)
//         arrExpense=arrExpense.map(Number)
//         let expenseSum=arrExpense.reduce((total,num)=>{
//             return total+num
//         })
//         let domExpense=document.querySelector("#Expense-figure").textContent="₦"+expenseSum
//         // console.log(expenseSum)// this will be passed in expense position
//     }else{
//         arrIncome.push(x)
//         console.log(arrIncome)
//         arrIncome=arrIncome.map(Number)
//         let incomeSum=arrIncome.reduce((total,num)=>{
//             return total+num
//         })
//         let domIncome=document.querySelector("#income-figure").textContent="₦"+incomeSum
//         // console.log(incomeSum)// this will be passed in income position
//     } 
// }


let expenseIncome=(x)=>{
    let negsum=0
    let pussum=0
    arrAmount.push(x)
    arrAmount=arrAmount.map(Number)
   for(y of arrAmount){
       if(y<0){
          negsum+=y*-1
        //   document.querySelector("#Expense-figure").textContent="₦"+negsum
          comma(negsum,"#Expense-figure")
       }else{
           pussum+=y
        //    document.querySelector("#income-figure").textContent="₦"+pussum
           comma(pussum,"#income-figure")
       }
    //    return{negsum,pussum}
    //     document.querySelector("#Expense-figure").textContent="₦"+negsum
    //    document.querySelector("#income-figure").textContent="₦"+pussum
    
    } 
    
    
}
// console.log(expenseIncome(arrAmount))

/*
 The code is a function that calculates the expense and income for an individual.
 The code starts by checking if the first argument is "-".
 If it is, then it will push all of the arguments to an array called arrExpense.
 Then, it will log out each item in this array using console.log().
 After doing this, they will map over these items and reduce them into one number which represents their total expenses or income.
 This new number is passed into document object's textContent property so that we can see what our final result looks like on screen as well as pass in to domIncome variable so that we can print out our final result on screen as well.
 The code will calculate the income and expense of an individual.

* */
//
let comma=(x,y)=>{
    if(String(x).length===5){// ten thousand
        let n=String(x).split("")
        n.splice(2,0,",")
        n=n.join("")
        console.log(n)
        domBalance=document.querySelector(y).textContent="₦"+n
    }else if(String(x).length===4){// one thousand
        let n=String(x).split("")
        n.splice(1,0,",")
        n=n.join("")
        console.log(n)
        domBalance=document.querySelector(y).textContent="₦"+n
    }else if(String(x).length===6){//hundred thousand
        let n=String(x).split("")
        n.splice(3,0,",")
        n=n.join("")
        console.log(n)
        domBalance=document.querySelector(y).textContent="₦"+n
    }else if(String(x).length===7){// one million
        let n=String(x).split("")
        n.splice(1,0,",")
        n.splice(5,0,",")
        n=n.join("")
        console.log(n)
        domBalance=document.querySelector(y).textContent="₦"+n
    }else if(String(x).length===8){//ten million
        let n=String(x).split("")
        n.splice(2,0,",")
        n.splice(6,0,",")
        n=n.join("")
        console.log(n)
        domBalance=document.querySelector(y).textContent="₦"+n
    }else if(String(x).length===9){// hundred million
        let n=String(x).split("")
        n.splice(3,0,",")
        n.splice(7,0,",")
        n=n.join("")
        console.log(n)
        domBalance=document.querySelector(y).textContent="₦"+n
    }else if(String(x).length===10){// one billion
        let n=String(x).split("")
        n.splice(1,0,",")
        n.splice(5,0,",")
        n.splice(9,0,",")
        n=n.join("")
        console.log(n)
        domBalance=document.querySelector(y).textContent="₦"+n
    }

}

// // balance edit
let balanceEdit=(y)=>{
    if(y.charAt(0)==='-'){
        balance=balance+(parseInt(y))
        // domBalance=document.querySelector("#balance-figure").textContent="₦"+balance
        // console.log(balance)
    }else{
        balance=balance+(parseInt(y))
        // domBalance=document.querySelector("#balance-figure").textContent="₦"+balance
        // console.log(balance)
    }
    comma(balance,"#balance-figure")
// return balance
}

// // console.log(balanceEdit("-5000"))


/* 
 The code starts by checking if the first character of y is a minus sign.
 If it is, then the balance will be increased by parseInt(y) and domBalance will be set to "₦"+balance.
 Otherwise, the balance will be increased by parseInt(y) and domBalance will be set to "₦"+balance.
 The code will add the number of characters in the string to the balance, and then increment it by one.
 The if statement checks whether or not the first character is a minus sign.
 If it is, then we add that value to our current balance and then increment our current balance by one.
 If it isn't, then we simply add that value to our current balance and leave it at that.
*/


// this is for the history
// let historyDebit=(x)=>{ 
//     let list=document.querySelector("ul")
//     list.innerHTML=""
//     let Text=document.querySelector("#text").value
//     arrTextDebit.push(Text)
//    x.forEach((items,idx)=>{
//         let li=document.createElement("li")
//         li.setAttribute("class","debit")

//         let newP=document.createElement("p")
//         newP.textContent="₦"+"-"+items

//         let P=document.createElement("p")
//         P.textContent=arrTextDebit[idx]

//         li.appendChild(P)
//         li.appendChild(newP)
//         list.appendChild(li)
//     })
// }


let history=(x)=>{ 
    let list=document.querySelector("ul")
    list.innerHTML=""
    let Text=document.querySelector("#text").value
    arrText.push(Text)
    x=x.map(Number)
   x.forEach((items,idx)=>{
        if(items<0){
        let li=document.createElement("li")
        li.setAttribute("class","debit")

        let newP=document.createElement("p")
        newP.setAttribute("class","his")
        newP.textContent="₦"+items.toLocaleString()

        let P=document.createElement("p")
        P.textContent=arrText[idx]
        li.appendChild(P)
        li.appendChild(newP)
        list.appendChild(li)
        // comma(items,".his")
        }else{
            let li=document.createElement("li")
            li.setAttribute("class","credit")
    
            let newP=document.createElement("p")
            newP.setAttribute("class","his")
            newP.textContent="₦"+items.toLocaleString()
    
            let P=document.createElement("p")
            P.textContent=arrText[idx]
            li.appendChild(P)
            li.appendChild(newP)
            list.appendChild(li)
            // comma(items,".his")
        }
        

    })
}


/* 
 The code starts by creating a new variable called list.
 This is done so that the code can reference it later on in the program.
 Next, an empty string is set to the innerHTML of list and then a text input field with id="text" is created.
 The value of this text input field will be used as the first item in an array called arrTextDebit which will be used later on in the program.
 Next, x is declared and assigned to a function which takes two arguments: items and idx.
 Items are arrays containing all of the numbers from 0-9 while idx represents where each number should go within arrTextDebit (0 being at index 0).
 For every item passed into x, there's another function call which sets up a new li element with class="debit".
 Inside these li elements are p elements with class="debit" inside them that contain "₦" followed by whatever number was passed into x for that particular iteration of looping through items/idx.
 After setting up all these li elements, they're appended onto list using appendChild().
 Finally, P elements are created with class="debit" inside them and their contents set to what was just written out for
 The code is a JavaScript snippet that will loop through the array of items in the variable x and create an unordered list with each item being a li.
 Each li will have its own p element inside it, which will contain the text "₦"+"-"+items.
 The last line of code creates a new p element and sets its text to arrTextDebit[idx].
*/

// let historyCredit=(x)=>{ 
//     let list=document.querySelector("ul")
//     list.innerHTML=""
//     let Text=document.querySelector("#text").value
//     arrTextCredit.push(Text)
//    x.forEach((items,idx)=>{
//         let li=document.createElement("li")
//         li.setAttribute("class","credit")

//         let newP=document.createElement("p")
//         newP.textContent="₦"+"+"+items

//         let P=document.createElement("p")
//         P.textContent=arrTextCredit[idx]

//         li.appendChild(P)
//         li.appendChild(newP)
//         list.appendChild(li)

//     })
// }

/* 
 The code starts by creating a list of ul elements.
 The code then creates an empty string for the innerHTML property on each element in the list.
 Next, it gets the text from  the input elements and pushes that text onto an array called arrTextCredit.
 Then, it iterates through all of the items in this array and creates a new li element with class credit.
 Inside this new li element is another p element which has its textContent set to "₦"+"+"+items.
 This p element is then appended to the end of each item in arrTextCredit so that they are all stacked up together inside their respective li elements as shown below:
₦1

₦2

₦3

 The code will create a list of UL elements with the class "Credit" in it.
 The code will also create new LI elements for every iteration.
 all LI element will have an attribute class="credit".
*/

// //  this is the button that is clicked
let btn=document.querySelector("button").addEventListener("click",()=>{
    let p=document.querySelector("#amount").value
    
    if(p.charAt(0)==="-"){
        if(p=="-0"){
            let error=document.querySelector("#insufficent-fund")
            error.textContent="Enter an amount"
            error.style.display="block"
            document.querySelector("#container").style.height="53em"
            setTimeout(()=>{
                document.querySelector("#insufficent-fund").style.display=""
                document.querySelector("#container").style.height=""
            },4000)
        }else{
            let check=p.replace("-","")
            if(check<=balance){
                expenseIncome(p)
                balanceEdit(p)
                history(arrAmount) 
            }else{
                document.querySelector("#insufficent-fund").style.display="block"
                document.querySelector("#container").style.height="53em"
                setTimeout(()=>{
                    document.querySelector("#insufficent-fund").style.display=""
                    document.querySelector("#container").style.height=""
                },4000)
            }
        }

    }else if(p===""||p==="+0"||p==="0"){
            let error=document.querySelector("#insufficent-fund")
            error.textContent="Enter an amount"
            error.style.display="block"
            document.querySelector("#container").style.height="53em"
            setTimeout(()=>{
                document.querySelector("#insufficent-fund").style.display=""
                document.querySelector("#container").style.height=""
            },4000)
    }else{
        expenseIncome(p)
        balanceEdit(p)
        history(arrAmount)
    }
})


/* 

*/

// tweking dom
comma(balance,"#balance-figure")
// let domBalance = document.querySelector("#balance-figure").textContent="₦"+balance











