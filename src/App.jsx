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

const App = () => {

  const [open, setOpen] = useState(false);
  const [cartCardOpen, setCartCardOpen] = useState(false);
  const [cartItem, setCartItem] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { data, isLoading, error } = useQuery({
    queryKey: ['fetchUsers'],
    queryFn: fetchUsers,
  });

  useEffect(() => {
    if (cartItem.length > 0) {
      setCartCardOpen(true);
    } else {
      setCartCardOpen(false);
    }
  }, [cartItem.length]);

  const handleCartItemChange = (item) => {
    console.log(item);
    setCartItem((previous) => [...previous,item]);
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

  return(
    <>
    
    <div className="w-full mb-2 mt-2">

      <Category />
      {/* <Divider sx={{backgroundColor: '#E38035 !important'}}/> */}
      
    <div className="card flex justify-center">

      { isLoading ? <p>Loading...</p> : (
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {data.map((card) => (
          
          <div key={card?.id} className="custom-card m-2 h-[200px] w-[200px] bg-div shadow-md relative m-2 mb-[6em]">
            <div className='absolute top-[-50%]'>
              <img className='drop-shadow-custom' src={chips} />
            </div>
            <div className='flex flex-col justify-start m-6 absolute top-[20%]'>
              <div className='m-1'>
                <p className="text-white">Chocolate chips</p>
              </div>
              <div className='m-1'>
                <p className="text-text"><WorkspacePremiumIcon />PREMIUM</p>
              </div>
              <div className='m-1'>
                <p className="text-white bold">20 USD</p>
              </div>
            </div>
            <Fab onClick={handleOpen} style={{backgroundColor: 'black', position: 'absolute', right: 0, bottom: 0}} aria-label="add">
              <ArrowForwardIcon style={{color: 'white'}} />
            </Fab>
          </div>
            
        ))}
        </div>
      )}
      

    </div>

      <div className="ml-2 mr-2 mb-8  mt-[0]">
        <p className="text-white text-3xl">Offers</p>
        <div className="custom-card h-[150px] bg-div relative m-2 shadow-md">
          <Fab onClick={handleOpen} style={{backgroundColor: 'black', position: 'absolute', right: 0, bottom: 0}} aria-label="add">
            <ArrowForwardIcon style={{color: 'white'}} />
          </Fab>
        </div>
      </div>

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
            <Fab onClick={ () => handleCartItemChange(1)} color="primary" aria-label="add" style={{ position: 'absolute', margin: 10, right: 0, bottom: 0, backgroundColor: 'black' }}>
              <AddIcon />
            </Fab>
          </Box>
        </Fade>
      </Modal>
    
    </>
  );
}

export default App;