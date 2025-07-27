"use client"

import { Box, Typography, Card, CardContent, CardMedia, Chip, Stack } from "@mui/material"
import Home5_1 from "../../assets/Home/recommended/1.png"
import Home5_2 from "../../assets/Home/recommended/2.jpg"
import Home5_3 from "../../assets/Home/recommended/3.png"
import Home5_4 from "../../assets/Home/recommended/4.png"
import Home5_5 from "../../assets/Home/recommended/5.png"
import Home5_7 from "../../assets/Home/recommended/7.png"
import Home5_8 from "../../assets/Home/recommended/8.png"
import Home5_9 from "../../assets/Home/recommended/9.png"

const Recommended = () => {
  const products = [
    {
      id: 1,
      image: `${Home5_1}`,
      price: "$10.30",
      description: "T-shirts with multiple colors, for men",
    },
    {
      id: 2,
      image: `${Home5_2}`,
      price: "$10.30",
      description: "Jeans, t-shirts for men blue color",
    },
    {
      id: 3,
      image: `${Home5_3}`,
      price: "$12.50",
      description: "Smart winter coat medium size",
    },
    {
      id: 4,
      image: `${Home5_5}`,
      price: "$34.00",
      description: "Suit bag for travel for men",
    },
    {
      id: 5,
      image: `${Home5_4}`,
      price: "$99.00",
      description: "Leather wallet",
    },
    {
      id: 6,
      image: `${Home5_9}`,
      price: "$9.99",
      description: "Canon camera black, 100% zoom",
    },
    {
      id: 7,
      image: `${Home5_7}`,
      price: "$8.99",
      description: "Headset for gaming with mic",
    },
    {
      id: 8,
      image: `${Home5_8}`,
      price: "$10.30",
      description: "Shirt watch silver color modern",
    },
    {
      id: 9,
      image: `${Home5_4}`,
      price: "$10.30",
      description: "Blue wallet for men leather material",
    },
    {
      id: 10,
      image: `${Home5_5}`,
      price: "$80.95",
      description: "Jeans bag for travel for men",
    },
  ]

  return (
    <Box
      sx={{
        width: "100%",
        // maxWidth: "1200px",
        mx: "auto",
        pt: 2,
        pb: 2,
        backgroundColor: "#f7fafc",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 3,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: "#1a1a1a",
            fontSize: "18px",
          }}
        >
          Recommended Items
        </Typography>

      </Box>

      {/* Products Grid - Fixed 5 columns */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 2,
        }}
      >
        {products.map((product) => (
          <Card
            key={product.id}
            sx={{
              width: "100%",
              height: "250px", // Fixed height for all cards
              border: "1px solid #e0e0e0",
              borderRadius: "5px",
              boxShadow: "none",
              transition: "box-shadow 0.2s ease-in-out",
              display: "flex",
              flexDirection: "column",
              "&:hover": {
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              },
            }}
          >
            <CardMedia
              sx={{
                position: "relative",
                mt:0.6,
                ml:5.2,
                top: 10,
                height: "130px", // Fixed image height
                width: "130px",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              image={product.image}
              title={product.description}
            />
            <CardContent
              sx={{
                flex: 1,
                p: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                "&:last-child": {
                },
              }}
            >
              <Stack spacing={0.5}   position={"relative"}
                top={20}
                >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#1a1a1a",
                    lineHeight: 1.2,
                  }}
                >
                  {product.price}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "#666",
                    lineHeight: 1.3,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontWeight: 350,
                  }}
                >
                  {product.description}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  )
}

export default Recommended
