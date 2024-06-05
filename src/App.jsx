import Fab from '@mui/material/Fab';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { useState, useEffect } from 'react';
import Divider from '@mui/material/Divider';
import CartCard from './Components/cart-card';
import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from './api';
import chips from '/chips.png';
import Category from './Components/categories';
import BasicRating from './Components/rating';

const App = () => {
  const [open, setOpen] = useState(false);
  const [cartCardOpen, setCartCardOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isLoading, setIsLoading] = useState(false)

  // const { data, isLoading, error } = useQuery({
  //   queryKey: ['fetchUsers'],
  //   queryFn: fetchUsers,
  // });

  const data = [
    {
      id: 1,
      dish: 'Mandhi',
      price: 100,
      image: 'https://b.zmtcdn.com/data/pictures/chains/9/95089/1e370556ac987b583b299c94377a93c3.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*',
      rating: 4.5
    },
    {
      id: 2,
      dish: 'Biriyani',
      price: 100,
      image: 'https://b.zmtcdn.com/data/dish_photos/68e/95357b577103c4c6fb63be8035c5368e.jpg?output-format=webp',
      rating: 4.5
    },
    {
      id: 3,
      dish: 'Chicken',
      price: 100,
      image: 'https://b.zmtcdn.com/data/pictures/3/21110573/ae624abecc352825a44f5be1bd793aa5_o2_featured_v2.jpg',
      rating: 4.5
    }, {
      id: 4,
      dish: 'Noodles',
      price: 100,
      image: 'https://b.zmtcdn.com/data/pictures/9/19706049/918f6741a0a9b1cf65a02075074dbaa3.jpg',
      rating: 4.5
    }
  ]


  useEffect(() => {
    if (cartItem.length > 0) {
      setCartCardOpen(true);
    } else {
      setCartCardOpen(false);
    }
  }, [cartItem.length]);

  const handleCartItemChange = (item) => {
    console.log(item);
    setCartItem((previous) => [...previous, item]);
  };

  const handleCartCardClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setCartCardOpen(false);
  };

  console.log(cartItem.length, cartItem);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '95%', sm: '95%', md: 'auto', lg: 'auto', xl: 'auto' },
    height: '50%',
    bgcolor: 'background.paper',
    borderRadius: 10,
    boxShadow: 24,
    p: 4,
  };

  return (
    <>

      <div className="w-full mb-2 mt-2">

        <div className='flex justify-between p-5'><h1 className="text-black text-3xl font-bold text-left">Mocha</h1><div className="flex items-center md:space-x-4">
			<div className="relative">
				<span className="absolute inset-y-0 left-0 flex items-center pl-2">
					<button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
						<svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-800">
							<path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
						</svg>
					</button>
				</span>
				<input type="search" name="Search" placeholder="Search..." className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50" />
			</div>
			<button type="button" className="hidden px-6 py-2 font-semibold rounded lg:block dark:bg-violet-600 dark:text-gray-50">Log in</button>
		</div></div>


        <hr />

        {/* <Category /> */}
        {/* <Divider sx={{backgroundColor: '#E38035 !important'}}/> */}

        <div className="card flex justify-center pt-5">

          {isLoading ? <p>Loading...</p> : (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-1">
              {data?.map((card) => (

                <div key={card?.id} className="rounded-lg  h-[250px] w-[170px] md:w-[200px] xs:w-[200px] xl:w-[200px] bg-div shadow-md relative m-1 ">
                  <img className='h-[190px] rounded-t-md w-full object-cover' src={card?.image} />
                  <div className='absolute bottom-12 backdrop-blur-3xl right-0 pl-1  pr-1 text-slate-50'>25%OFF</div>
                  <div className='m-1 '>
                    <p className="text-black text-base font-semibold">{card?.dish}</p>
                    <div className='flex justify-between'>   <div className="flex text-base font-semibold text-green-500">{card?.rating}<BasicRating /></div> <p className="text-black text-base font-semibold">₹{card?.price}</p>
                    </div>


                  </div>


                  {/* <Fab onClick={handleOpen} style={{backgroundColor: 'black', position: 'absolute', right: 0, bottom: 0}} aria-label="add">
              <ArrowForwardIcon style={{color: 'white'}} />
            </Fab> */}
                </div>

              ))}
            </div>
          )}


        </div>

        {/* <div className="ml-2 mr-2 mb-8  mt-[0] flex justify-center">
          <div className='flex flex-col w-[100%] md:w-[60%] xl:w-[60%] lg:w-[60%] m-2'>
            <p className="text-white text-3xl m-2">Offers</p>
            <div className="custom-card h-[150px] bg-div relative m-2 shadow-md w-[100%]">
              <Fab onClick={handleOpen} style={{ backgroundColor: 'black', position: 'absolute', right: 0, bottom: 0 }} aria-label="add">
                <ArrowForwardIcon style={{ color: 'white' }} />
              </Fab>
            </div>
          </div>
        </div> */}

        {/* {cartCardOpen && ( */}
        <CartCard cartCardOpen={cartCardOpen} handleCartCardClose={handleCartCardClose} />
        {/* // )} */}

      </div>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            <Fab onClick={() => handleCartItemChange(1)} color="primary" aria-label="add" style={{ position: 'absolute', margin: 10, right: 0, bottom: 0, backgroundColor: 'black' }}>
              <AddIcon />
            </Fab>
          </Box>
        </Fade>
      </Modal>

    </>
  );
}

export default App;