import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const nayoks = ['Anwar', 'Jafar', 'Alomgir', 'Salman']

  const products = [
    {name: 'photoshop', price: '$90.99'},
    {name: 'illustrator', price: '$60.99'},
    {name: 'PDF Reader', price: '$6.99'},
    {name: 'Premiere El', price: '$249.99'}
  ]
  const nayokNames = nayoks.map(nayok => nayok);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am React Person</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product =><li>{product.name}</li>)
          }


          {/* <li>{nayoks[0]}</li>
          <li>{nayoks[1]}</li>
          <li>{nayoks[2]}</li>
          <li>{nayoks[3]}</li> */}

        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }

          {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product> */}

        {/* <Product name={products[0].name} price={products[0].price}></Product> */}
        
        {/* <Person name="Munna" job="football"></Person>
        <Person name="Masum" job="Dorshok"></Person> */}
        <Person></Person>
        
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] =useState(10);
  const handleIncrease = () => setCount(count + 1);

  //  {
  //   // const newCount = count + 1; 1st
  //   // setCount(newCount); 1st
  //   setCount(count + 1); 2nd
  // };
  return(
    <div>
      <h1>Count: {count} </h1>
      {/* <button onClick={handleIncrease}>Increase</button> 1st */}
      <button onClick={ () => setCount(count + 1)}>Increase</button>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
     .then(res => res.json())
     .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users {users.length}</h3>
      <ul>
        {
          users.map(user => <li>{user.name},  phone: {user.phone}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius:'5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'

  }
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      {/* <h3>{props.name}</h3>
      <h5>{props.price}</h5> */}

      {/* <h3>{props.product.name}</h3>
       <h5>{props.product.price}</h5>  */}

      <h3>{name}</h3>
      <h5>{price}</h5> 

      <button>Buy now</button>
    </div>
  )
}


function Person(props){
  return (
    <div style={{border:'2px solid gold', width:'400px'}}>
      <h3> My Name: {props.name}</h3>
      <p>My Profession: {props.job} </p>
    </div>
  )
}

export default App;
