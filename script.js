var app = new Vue({
  el: '#app',
  data: {
    users: [],
    hosts: [],
    filterSelected: ""
  },
  created: function() {
    // Carrega users do endpoint e lista de filtros
    axios.get('http://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        app.users = response.data;
        app.hosts = app.getHosts();
      });
  },
  methods: {
    // dada a string retorna uma string com todos os caracteres depois do '@'
    getHostFromEmail: function(email) {
      // expressão regular pra filtrar a string do email
      let re = /@\S+/;
      let found = email.match(re);

      return found[0];
    },

    // retorna um array com todos os hosts de email
    getHosts: function(){
      let arr = [];

      for (var i in this.users) {
        let host = this.getHostFromEmail(this.users[i].email);
        arr.push(host);
      }

      return arr;
    },

    // retorna um boleano verificando se email pertence ao filtro selecionado
    filterHost: function(email){
      return (this.filterSelected === "") || email.endsWith(this.filterSelected);
    }
  }
})
