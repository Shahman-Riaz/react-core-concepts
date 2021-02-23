import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const nayoks = ['Anwar','Salman', 'Jafor', 'Alomgir','Jasim']
const products = [{name:'Photoshop', price:'$90.99'},
{name:'Illustrator', price:'$60.99'},
{name:'PDF Reader', price:'$6.99'},
{name:'Premier Pro', price:'$70.99'}
]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
       {
         products.map(product=> <li>{product.name} ---- {product.price}</li>)
       }
      </ul>
      <User></User>
        {
          products.map(product => <Product product={product}></Product>)
        }
        
        
         
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count-1)}>Decrease</button>
      <button onClick={ () => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function User(){
  const [users, setUsers] = useState([]);
  useEffect(() =>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(data => setUsers(data),[])
  })
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props) { 
  const {name, price} = props.product;
  const productStyle={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'skyblue',
    height:'200px',
    width:'200px',
    float:'left'
  }
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy Now</button>
    </div>
  )
 }

// function Person(props) { 
//   return(
//     <div style={{border:'2px solid yellow', margin:'10px'}}>
//       <h3>My Name : {props.name}</h3>
//       <p>My Profession: {props.price}</p>
//     </div>
//   )
//  }

export default App;
