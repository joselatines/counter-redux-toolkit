import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from './counterSlice';

export const Counter = () => {
	const count = useSelector(state => state.counter.count);
	const dispatch = useDispatch();

	const [incrementedAmount, setIncrementedAmount] = useState(0);
	// If we receive an string the value will be 0
	console.log(incrementedAmount);

	const resetAll = () => {
		setIncrementedAmount(0);
		dispatch(reset());
	};

	return (
		<section>
			<h1>Counter</h1>
			<p>{count}</p>
			<div>
				<button onClick={() => dispatch(increment())}>+</button>
				<button onClick={() => dispatch(decrement())}>-</button>
				<button onClick={() => resetAll()}>Rest</button>
				<div>
					<input
						type='number'
						value={incrementedAmount}
						placeholder='insert a number'
						onChange={e => setIncrementedAmount(e.target.value)}
					/>
					<button
						onClick={() =>
							dispatch(incrementByAmount(Number(incrementedAmount)))
						}
					>
						Amount
					</button>
				</div>
			</div>
		</section>
	);
};
