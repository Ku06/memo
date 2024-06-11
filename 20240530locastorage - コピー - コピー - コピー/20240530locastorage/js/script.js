/**
 * let ●●● = [];
 * $("●●●")
 * 
$("#●●●").on("click", function () {

});

for (let i = 0; i < ●●●; i++) {

}
 *
 *
 *
 *
 */

//localStorage.setItem('301','コスゲ');

//更新
//localStorage.setItem('301','いわした');

//取得
//const todo = localStorage.getItem('todoText');
//console.log(todo);

//消去
//localStorage.clear();

//const taskList =['シャンプーを買う','そうじをする','洗濯をする']
//consoke.log(taskList);



let taskList = [];

const tasks =localStorage.getItem('todoText');

console.log(taskList);

if(tasks.length >0){
    taskList = JSON.parse(tasks);

for(let i = 0; i<taskList.length; i++){
    $("#todoList").append(`<li>${taskList[i]}</li>`);
}
}

//追加ボタン
$('#addTodoBtn').on('click',function(){

    const todoText = $("#todoText").val();

    taskList.push(todoText);
    $("#todoList").append(`<li>${todoText}</li>`);

    localStorage.setItem("todoText", JSON.stringify(taskList));

    console.log(taskList);
    
    $("#todoText").val("");
});


//削除ボタン
$('#deleteTodoBtn').on('click',function(){

    localStorage.clear();

$("#todoList").empty();
 taskList = [];
});
