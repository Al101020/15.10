import { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService} from '../actions/actionCreators';

export default function ServiceAdd() {
  const item = useSelector(state => state.serviceAdd);  
  console.log(item);

  const dispatch = useDispatch();

  const handleChange = evt => {    // console.log(evt); // --- проверка ---
    const {name, value} = evt.target;    
    // console.log(name + ' - ' + value); // --- проверка ---
    dispatch(changeServiceField(name, value));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    const name = evt.target.children[0].value;
    const price = evt.target.children[1].value;
    // console.log(name + ' - ' + value); // --- проверка ---
    dispatch(addService(name, price));
    evt.target.children[0].value = '';
    evt.target.children[1].value = 0;
    // name = '';
    // price = 0;
    // dispatch(addService(name, price));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='name' onChange={handleChange} value={item.name} required />
      <input type='number' name='price' onChange={handleChange} value={item.price} required />

      {/* <input 
        type='text' 
        id='nameOfTheService' 
        name='nameOfTheService'
        value={item.name}
        onChange={handleChange}
        placeholder='Наименование услуги'
        required
      />
      <input 
        type='number' 
        id='cost' 
        name='cost'        
        value={item.price}        // pattern='[0-8]*' // не работает
        onChange={handleChange}
        placeholder='Стоимость'
        required
      /> */}

      {/* <input name='name' onChange={handleChange} autoComplete='off' />
      <input name='price' onChange={handleChange} autoComplete='off' /> */}
      <button type='submit'>Save</button>
    </form>
  );
} 


// export default function ServiceAdd() {
//   // const item = ...;
  
//   const handleChange = evt => {
//     const {name, value} = evt.target;
//   }
  
//   const handleSubmit = evt => {
//     evt.preventDefault();
//   }
  
//   return (
//     <form onSubmit={handleSubmit}>
//       {/* <input name='name' onChange={handleChange} value={item.name} />
//       <input name='price' onChange={handleChange} value={item.price} /> */}
//       <input name='name' onChange={handleChange} autoComplete='off' />
//       <input name='price' onChange={handleChange} autoComplete='off' />
//       <button type='submit'>Save</button>
//     </form>
//   );
// }