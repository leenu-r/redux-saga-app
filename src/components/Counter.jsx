import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../utils/counterSlice';
const Counter = () => {
    const counter = useSelector((store) => store.counter)
    const dispatch = useDispatch();
    return (<>
        <div> <h2>Count: {counter}</h2>  </div>
        <button onClick={() => { dispatch(increment()) }}>Increment</button>
        <button onClick={() => { dispatch(decrement()) }}>Decrement</button>
        <button onClick={() => { dispatch(reset()) }}>Reset</button>
    </>);
}

export default Counter