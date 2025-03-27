// let tasks=[
//     {
//         id:1,
//         task:"Cong viec 1",
//     },
//     {
//         id:2,
//         task:"Cong viec 2",
//     },
//     {
//         id:3,
//         task:"Cong viec 3",
//     }
// ]
//Lưu dữ liệu vào local storage
//localStorage.setItem("tasks", JSON.stringify(tasks));
let tasks = JSON.parse(localStorage.getItem("tasks"))|| [];
//Chức năng đọc
//Hàm hiển thị toàn bộ dữ liệu ra giao diện
function renderTasks(){
//B1:Truy cập phần tử cha chứa các task
let container = document.getElementById("task-container");
//B2:
tasks.forEach((item) => {
    container.innerHTML+=`
    <div class="task-item">
    <span>${item.task}</span>
    <button>Sua</button>
    <button>Xoa</but
    `

})
    
};



//Chuc nang them
//Ham them task moi vao du lieu
//B1:Them su kien cho nut them
function addTask(e){
    e.preventDefault();
    //B2:Lay du lieu tu input
    //B3: Tao ra mot doi tuong moi
    //B4:Them doi tuong vao mang du lieu
    //B5:Goi ham renderTaks
    //B6: Luu vao localStorage
    let taskInput= document.getElementById('task-input');
    let taskValue=taskInput.value;
    let newTask={
        id: tasks.length==0? 1: tasks[tasks.length-1].id+1,
        task: taskValue,
    }
    tasks.push(newTask);
    renderTasks();
    localStorage.setItem("tasks", JSON.stringify(tasks));
// chuc nang sua
// b1 gan su kien cho nut sua
// ham sua
function updateTask(id){
    console.log('nnn');
    // b2 tim ra phan tu muon cap nhat
    let taskIndex=tasks.findIndex((item)=>item.id===id);
    // b3 su dung prompt de lay gia tri tu phia ng dung
    let newTask=prompt("chinh sua cong viec: ", tasks[taskIndex].task)
    // b3.1 phai co gia tri ban dau trc khi sua trong o input
    // b4 cap nhat phan tu theo gia tri cua prompt
    tasks[taskIndex]={
        id,
        task:newTask,
    }
    //b5 goij ham render
    renderTasks();
    //b6 luu vao localstorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// chuc nang xoa
// b1 gan su kien
//b2
function deleteTask(id){
    //b2 tim ra phan tu muon xoa theo id
    let taskIndex=tasks.findIndex((item)=>item.id===id);
    //b3 su dung confirm de xac nhan xoa phan tu
    if(confirm('xac nhan xoa phan tu')){
    //b4 xoa phan tu da tim thay
    tasks.splice(taskIndex,1);
    }
   
    //b5 goij ham render
    renderTasks();
    //b6 luu vao localstorage
    localStorage.setItem("tasks", JSON.stringify(tasks));

}

}
renderTasks();

