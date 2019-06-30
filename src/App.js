import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customer = 
[
  {
    'id': 1,
    'name': '홍길동',
    'image': 'https://placeimg.com/64/64/1',
    'birth':'961222',
    'gender': '남자',
    'job': '대학생'
  },
  {
    'id': 2,
    'name': '김보',
    'image': 'https://placeimg.com/64/64/2',
    'birth':'121212',
    'gender': '여자',
    'job': '고졸'
  },
  {
    'id': 3,
    'name': '석보',
    'image': 'https://placeimg.com/64/64/3',
    'birth':'454544',
    'gender': '남자',
    'job': '대머리'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customer.map(c => {
            return (
            <Customer
            key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birth}
              gender={c.gender}
              job={c.job}
              />
              )
          })
        }
      </div>
    );
  }
}

export default App;
