let students = 
JSON.parse(localStorage.getItem("students"))
||[];

function addStudent(){
    let name = document.getElementById("name").value;
let course = document.getElementById("course").value;

if(name==="" || course===""){
    alert("Fill all fields");
    return;
}


}
students.push({name:course});
localStorage.setItem("students", JSON.stringify(students));

alert("Student Added");

document.getElementById("name").value="";
document.getElementById("course").value="";

function showStudents(){
let table = document.getElementById("table");
if(!table)return;  
table.innerHTML="";
students.forEach((student,index)=>{
    table.innerHTML += `
       <tr>
        <td>${student.name}</td>
        <td>${student.course}</td>
        <td> 
            <button onclick="deleteStudent(${index})">
                Delete
                </button>
                </td>
                </tr>
        `;
});

}
function deleteStudent(index){
students.splice(index,1);
localStorage.setItem("students", JSON.stringify(students));

showStudents();

}
function searchStudent(){

let search = document.getElementById("search").value.tolowerCase();
let table =document.getElementById("table");
table.innerHTML = "";
 students
 .filter(student =>student.name.tolowerCase().includes(search)|| student.course.tolowerCase().includes(search));
 orEach((students,index)=>{
    table.innerHTML += `
    <tr>
        <td>${students.name}</td>
        <td>${students.course}</td>
        <td> 
            <button onclick="deleteStudent(${index})">
                Delete
                </button>
                </td>
                </tr>
        `;
});

}
showStudents();