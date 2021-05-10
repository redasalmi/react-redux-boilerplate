import { createContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from './Button';
import {
  addCount,
  subCount,
  resetCount,
  addCountAsync,
  subCountAsync,
  resetCountAsync,
} from '../features/counter/counterSlice';

export const LoadingContext = createContext(false);

const syncButtons = [
  {
    text: 'Count Up',
    label: 'Increment count',
    action: addCount(),
  },
  {
    text: 'Count Down',
    label: 'Decrement count',
    action: subCount(),
  },
  {
    text: 'Reset Count',
    label: 'Reset Count',
    action: resetCount(),
  },
];

const asyncButtons = [
  {
    text: 'Count Up Async',
    label: 'Increment count async',
    action: addCountAsync(),
  },
  {
    text: 'Count Down Async',
    label: 'Decrement count async',
    action: subCountAsync(),
  },
  {
    text: 'Reset Count Async',
    label: 'Reset count async',
    action: resetCountAsync(),
  },
];

const Counter = () => {
  const { count, loading } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className='container'>
      <h1>React Redux Boilerplate</h1>

      <h1>count: {count}</h1>
      <h3>{loading && 'loading async count, please wait...'}</h3>

      <LoadingContext.Provider value={loading}>
        <div className='sync-btn'>
          {syncButtons.map(({ text, label, action }) => (
            <Button
              key={text}
              text={text}
              label={label}
              onClick={() => dispatch(action)}
            />
          ))}
        </div>

        <div className='async-btn'>
          {asyncButtons.map(({ text, label, action }) => (
            <Button
              key={text}
              text={text}
              label={label}
              onClick={() => dispatch(action)}
            />
          ))}
        </div>
      </LoadingContext.Provider>
    </div>
  );
};

export default Counter;
