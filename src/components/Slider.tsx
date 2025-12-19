import { useState } from 'react';
import { Input } from '.';

const Slider = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <>
      <div className='slider__container'>
        <label htmlFor='storage' className='sr-only'>
          Storage
        </label>
        <Input
          className='slider'
          type='range'
          id='storage'
          min='0'
          max='1000'
          value={value}
          onChange={handleChange}
        />
      </div>
      <div className='progress-stats'>
        <span className='text-preset-3-extra'>0 GB</span>
        <span className='text-preset-3-extra'>1000 GB</span>
      </div>
    </>
  );
};
export default Slider;
