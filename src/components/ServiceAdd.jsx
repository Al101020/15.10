import {useSelector, useDispatch} from 'react-redux';
import {changeServiceField, addService} from '../actions/actionCreators';
// import { addService } from '../actions/actionCreators';

export default function ServiceAdd() {
  const item = useSelector(state => state.serviceAdd);  
  // console.log(item);

  const dispatch = useDispatch();

  const handleChange = evt => {
    // console.log(evt); // --- проверка ---
    const {name, value} = evt.target;
    // console.log(evt.nativeEvent.data);
    // console.log(name); // --- проверка ---
    dispatch(changeServiceField(name, value));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(addService(item.name, item.price));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name='name' onChange={handleChange} value={item.name} />
      <input name='price' onChange={handleChange} value={item.price} />
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