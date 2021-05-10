import { useContext } from 'react';

import { LoadingContext } from './Counter';

const Button = ({ text, label, onClick }) => {
  const loading = useContext(LoadingContext);

  return (
    <button
      type='button'
      className='button'
      aria-label={label}
      onClick={onClick}
      disabled={loading}
    >
      {text}
    </button>
  );
};

export default Button;
