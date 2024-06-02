const Category = () => {
  return(
    <div className='h-[200px] flex justify-center'>
      <div className="w-[80%] flex justify-center overflow-x-auto">
        <div className="flex">

        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="rounded-[50%] h-[80px] w-[80px] shadow-md bg-div m-2 hover:cursor-pointer"
          ></div>
        ))}
        
        </div>
      </div>
    </div>
  );
}

export default Category;