import { ProgressBar } from '.';

const Card = () => {
  return (
    <div className='card'>
      <div className='card__info text-preset-2'>
        You've used <span className='text-preset-2-bold'>815 GB</span> of your
        storage
      </div>
      <div className='card__bar'>
        <ProgressBar />
      </div>

      <div className='card__stats text-preset-3'>
        <span className='text-preset-1'>185</span> GB Left
      </div>
    </div>
  );
};
export default Card;
