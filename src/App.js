import React from 'react';
import './App.css';

const allUsers = [
  {
      text: 'Worek papierowy',
      basket: 'Papier',
      color: 'blue'
  },
  {
      text: 'Szklane opakowanie po kosmetykach',
      basket: 'Szkło',
      color: 'green'
  },
  {
      text: 'Obierki',
      basket: 'Odpadki biodegradowalne',
      color: 'brown'
  },
  {
      text: 'Puszka po konserwach',
      basket: 'Metale i tworzywa sztuczne',
      color: 'yellow'
  },
  {
      text: 'Gazeta, czasopismo',
      basket: 'Papier',
      color: 'blue'
  },
  {
      text: 'Szklane butelki',
      basket: 'Szkło',
      color: 'green'
  },
  {
      text: 'Gałęzie drzew i krzewów',
      basket: 'Odpadki biodegradowalne',
      color: 'brown'
  },
  {
      text: 'Plastikowa torba',
      basket: 'Metale i tworzywa sztuczne',
      color: 'yellow'
  },
];

class App extends React.Component {
  constructor(){
      super();

      this.state = {
          filteredUsers: allUsers
      }
  }

  filterUsers(e){
      const text = e.currentTarget.value;
      //const filteredUsers = this.getFilteredUsersForText(text);
      this.getFilteredUsersForText(text).then(filteredUsers => {
          this.setState({
              filteredUsers
          });
      })
  }

  getFilteredUsersForText(text) {
  return new Promise(resolve => {
      const time = (Math.random() + 1) * 250;
      setTimeout(() => {
      const filteredUsers = allUsers.filter(user => user.text.toLowerCase().includes(text.toLowerCase()));
      resolve(filteredUsers);
      }, time) ;
  });
  }
  render(){
      return (
          <div class="container-fluid p-0 m-0">
              <div class="input-container">
                  <p>Co chcesz wyrzucić?</p>
                  <input onInput={this.filterUsers.bind(this)} placeholder="Wpisz produkt"/>
              </div>
              <UsersList users={this.state.filteredUsers}/>
          </div>
      );
  }
}

const UsersList = ({users}) => {
  if(users.length > 0){
      return (
          <ul class="row p-0 m-0">
              {users.map(user => <li class="col-12 col-sm-6 col-lg-4" data-color={user.color} key={user.text}>{user.text}<span>&#8681;</span><span>{user.basket}</span></li>)}
          </ul>
      );
  }
  return (
      <p class="text-center p-4 none-result">Brak wyników, spróbuj wyszukać ponownie.</p>
  );
}

export default App;
