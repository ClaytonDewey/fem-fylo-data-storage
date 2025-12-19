const ProgressBar = () => {
  return (
    <>
      <div className='card__info text-preset-2'>
        You've used <span className='text-preset-2-bold'>815 GB</span> of your
        storage
      </div>{' '}
      <div className='progress'>
        <div className='progress-container'>
          <div className='progress-bar' style={{ width: '81.5%' }}>
            <div className='progress-indicator'></div>
          </div>
        </div>
        <div className='progress-stats'>
          <span className='text-preset-3-extra'>0 GB</span>
          <span className='text-preset-3-extra'>1000 GB</span>
        </div>
      </div>
    </>
  );
};
export default ProgressBar;
