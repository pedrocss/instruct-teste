var app = new Vue({
  el: '#app',
  data: {
    users: [] 
  }
})

var getUsers = function() {
  axios.get('http://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      app.users = response.data;
    });
};

getUsers();
