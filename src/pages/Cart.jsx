import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import ShoppingCart from '../components/ShoppingCart'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
 
import img1 from "../assets/Home/recommended/1.png"
import Banner from '../components/Banner';

const Cart = () => {
    const relatedProducts = [
  { id: 1, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", image: "/placeholder.svg?text=Product1" },
  { id: 2, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", image: "/placeholder.svg?text=Product2" },
  { id: 3, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", image: "/placeholder.svg?text=Product3" },
  { id: 4, name: "Xiaomi Redmi 8 Original", price: "$32.00-$40.00", image: "/placeholder.svg?text=Product3" },
];

  return (
        <Box sx={{ backgroundColor: "#f7fafc",width:"100%", height: "100%", display: "flex" }}>
      <Box
        height={"100%"}
        width={"83%"}
        sx={{
          position: "relative",
          left: 140,
          pt: 2.3
        }}
      >
         <ShoppingCart />
           <Box
  sx={{
    mt: 3,
    mb: 2,
    border: "1px solid rgba(222, 226, 231, 1)",
    borderRadius: "6px",
    backgroundColor: "white"
  }}
>
  <Stack p={2} width="100%">
    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
      Saved for later
          </Typography>

    <Stack direction="row" alignItems="center" spacing={2} width="100%">
      {relatedProducts.map((p, index) => (
        <Stack
          key={index}
          alignItems="center"
          sx={{
            p: 1,
            width: "30%",
            height:"50%",
            borderRadius: "6px",

             "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    }
          }}
        >
         <Box bgcolor={"rgba(238, 238, 238, 1)"} sx={{  
           border: "1px solid #eee",
            borderRadius: "4px",
            }} width={"100%"}  display={"flex"} alignContent={"center"} justifyContent={"center"} p={2}>
           <Box
            component="img"
            src={img1}   // use p.image if available
            alt={p.name}
            sx={{ width: 140, height: 160, objectFit: "cover", borderRadius: "4px", p:0.5 }}
          />
         </Box>
   <Stack sx={{ mt: 1.5, width: "80%", position:"relative", left: -22 }}>
  <Typography variant="body2" color="rgba(80, 80, 80, 1)" sx={{ mb: 0.5 }}>
    {p.price}
  </Typography>

  <Typography variant="body2" color="rgba(139, 150, 165, 1)" sx={{ fontWeight: 500 }}>
    {p.name}
  </Typography>

  <Button
    sx={{
      border: "1px solid rgba(222, 226, 231, 1)",
      borderRadius: "6px",
      width: "180px",
      fontSize:"14px",
      mt: 1
    }}
  >
     <ShoppingCartIcon /> &nbsp; Move to cart
  </Button>
</Stack>

        </Stack>
      ))}
    </Stack>
  </Stack>
</Box>

<Banner />

        </Box>
        </Box> 
      )
}

export default Cart