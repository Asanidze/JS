
// 1.

let newDiv = document.createElement("div")
newDiv.setAttribute("id","wraper")

let newImg = document.createElement("img")
newImg.setAttribute("src","https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg")
newImg.setAttribute("alt","image")
newImg.setAttribute("class","img")

let newTitle = document.createElement("h2")
newTitle.textContent = "image title"
newTitle.setAttribute("class","title")

document.getElementById("wraper-div").appendChild(newDiv)
document.getElementById("wraper").appendChild(newImg)
document.getElementById("wraper").appendChild(newTitle)

// --------------------------------------------------------------

// 2.

// let MyArray = ["adidas","nike","puma",3,10,78]

// for (let i = 0; i < MyArray.length; i++) {
//     console.log(MyArray[i]);
// }
// for (let k of MyArray){
//     console.log(k);
// }


// --------------------------------------------------------------


// 3.

// let user = {
//     name: "giorgi",
//     age: 20,
//     studentstatus: "active"
// }

// if (user.age < 18 && user.studentstatus == "active"){
//     console.log("Hello");
// }
// else if (user.name == "levan"){
//     console.log("Hello levan")
// }
// else if (user.studentstatus == "active" || user.age < 25){
//     console.log("Hello world")
// }
// else {
//     console.log("error")
// }


// --------------------------------------------------------------



// 4.

// let users = [
//     {username: 'giorgi', status: false},
//     {username: 'levani', status: false},
//     {username: 'anna', status: true}
// ]

// for (i = 0; i < users.length; i++){
//     if (users[i].status == true) {
//         console.log(users[i]);
//     }
// }