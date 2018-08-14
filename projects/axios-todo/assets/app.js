let user;

let tasks = document.getElementById('taskList');

let edits = {};

$('#completeWrap').checkbox()

let startGet = function(){
  let userInput = document.getElementById('user').value;
  if (user !== userInput) {
    user = userInput
    localStorage.setItem("getShitDoneUser", user);
    getData()
  }
}

let pushChange = function(obj) {
  edits[obj.id] = (obj.id === 'completed') ? obj.checked : obj.value;
  console.log(edits)
}

let populateTasks = function(task, i, arr) {
  let complete = task.completed
  let card = `<div class="card">
                <div class="image">
                  <img src="${(typeof task.imgUrl !== 'undefined') ? task.imgUrl : ''}">
                </div>
                <div class="content${complete ? ' completed' : ''}">
                  <div class="header">${task.title}</div>
                  <div class="meta">
                    <span class="date">${(task.price === null || task.price === undefined) ? '' : 'Cost: $' + task.price}</span>
                  </div>
                  <div class="description">
                    ${(typeof task.description !== 'undefined') ? task.description : ''}
                  </div>
                </div>
                <div class="extra content">
                  <button class="ui labeled icon button" onclick="editTask('${task._id}','${task.title}','${task.imgUrl}','${task.price}',\`${task.description}\`,'${complete}')">
                    <i class="pencil icon"></i>
                    Edit
                  </button>
                  <button class="ui right labeled icon button" onclick="removeTask('${task._id}')">
                    <i class="trash icon"></i>
                    Delete
                  </button>
                </div>
              </div>`
  tasks.innerHTML += card;
}

let removeTask = function(id) {
  $('#deleteTask')
  .modal({
    closable  : false,
    onDeny    : function(){
    },
    onApprove : function() {
      axios
        .delete(`https://api.vschool.io/${user}/todo/${id}`)
        .then(function(){
          axios
          .get(`https://api.vschool.io/${user}/todo`)
          .then(function(response) {
            tasks.innerHTML = "";
            console.log(response)
            response.data.forEach(populateTasks)
          })
        });
    }
  })
  .modal('show');
}

let editTask = function(id, title, img, price, desc, complete) {
  let putTitle = document.getElementById('title')
  let putImg = document.getElementById('imgUrl')
  let putPrice = document.getElementById('price')
  let putDesc = document.getElementById('description')
  let putComplete = document.getElementById('completed')

  putTitle.value = title
  putImg.value = img
  putPrice.value = (typeof price === 'undefined') ? 0 : price;
  putDesc.value = desc

  if (complete === 'true') {
    $('#completeWrap').checkbox('check')
  } else {
    $('#completeWrap').checkbox('uncheck');
  }
  console.log(putComplete.checked)


  $('#editTask')
  .modal({
    closable  : false,
    onDeny    : function(){
      edits = {}
    },
    onApprove : function() {
      axios
        .put(`https://api.vschool.io/${user}/todo/${id}`, edits)
        .then(function(){
          edits = {};
          axios
          .get(`https://api.vschool.io/${user}/todo`)
          .then(function(response) {
            tasks.innerHTML = "";
            console.log(response)
            response.data.forEach(populateTasks)
          })
        });
    }
  })
  .modal('show');
}

let createTask = function() {
  let createTitle = document.getElementById('title')
  let createImg = document.getElementById('imgUrl')
  let createPrice = document.getElementById('price')
  let createDesc = document.getElementById('description')
  let createComplete = document.getElementById('completed')
  
  $('#editTask')
  .modal({
    closable  : false,
    onDeny    : function(){
      edits = {}
    },
    onApprove : function() {
        axios
        .post(`https://api.vschool.io/${user}/todo`, {
          title: createTitle.value,
          imgUrl: createImg.value,
          price: createPrice.value,
          description: createDesc.value,
          completed: createComplete.value
        })
        .then(function(){
          axios
          .get(`https://api.vschool.io/${user}/todo`)
          .then(function(response) {
            tasks.innerHTML = "";
            console.log(response)
            response.data.forEach(populateTasks)
          })
        })
        .catch(function(err){
          console.log(err)
        });
    }
  })
  .modal('show');
}

let getData = function() {
  axios
    .get(`https://api.vschool.io/${user}/todo`)
    .then(function(response) {
      tasks.innerHTML = "";
      console.log(response)
      response.data.forEach(populateTasks)
    })
};

let login = function(str){
  var lsUser = localStorage.getItem("getShitDoneUser");
  if (lsUser === null || str === 'change') {
    $('.ui.basic.modal')
    .modal({
      closable  : false,
      onApprove : startGet
    })
    .modal('show');
  } else {
    user = lsUser
    getData()
  }
}