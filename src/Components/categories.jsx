import chips from '/chips.png';

const Category = () => {
  return(
    <>
      <div className='h-[100px] flex justify-center'>
        <div className="w-[100%] md:w-[80%] lg:w-[80%] xl:w-[80%] flex justify-center overflow-x-auto">
          <div className="flex">

          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="rounded-[50%] h-[80px] w-[80px] shadow-md bg-div m-3 hover:cursor-pointer flex justify-center items-center"
            >
              <img className='w-[100%]' src={chips} />
            </div>
          ))}
          
          </div>
        </div>
      </div>
      <div className='h-[100px] flex justify-center'></div>
    </>
  );
}

export default Category;