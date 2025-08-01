"use client";

import { useState } from "react";
import { Box, Stack, Typography, IconButton, Rating, Card, CardMedia, CardContent } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function CardView({product}) {

 const {
  image,
   name,
  price,
  originalPrice,
  rating,
  reviews,
  description,
} = product;



  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
      <Box height={"405px"} width={"100%"} mb={1.5} sx={{                    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
    }}}>
        <Card
      sx={{
        width: "100%",
        boxShadow: 2,
        borderRadius: 2,
        minHeight: "100%",
        "&:hover": {
          boxShadow: 4,
          transform: "translateY(-2px)",
          transition: "all 0.3s ease-in-out",
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardMedia
          component="img"
          height="270"
          image={image}
          alt={name}
          sx={{
            objectFit: "contain",
            backgroundColor: "white",
            p: 2,
          }}
        />
      </Box>

      <CardContent sx={{ p: 2 , pb: 0, pt: 1, borderTop:"1px solid rgba(239, 242, 244, 1)"}}>
        <Stack spacing={1} >
          {/* Price and Favorite Section */}
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Stack direction="row" alignItems="center" spacing={1}>
              <Typography variant="h6" fontWeight="bold" color="primary">
                ${price.toFixed(2)}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textDecoration: "line-through",
                  color: "text.secondary",
                }}
              >
                ${originalPrice.toFixed(2)}
              </Typography>
            </Stack>

            <IconButton
              onClick={handleFavoriteClick}
              size="small"
              sx={{
                "&:hover": {
                  backgroundColor: "rgba(255, 71, 87, 0.1)",
                },
              }}
            >
              {isFavorite ? (
                <FavoriteIcon sx={{ color: "#ff4757" }} />
              ) : (
                <FavoriteBorderIcon sx={{ color: "#666" }} />
              )}
            </IconButton>
          </Stack>

          {/* Rating Section */}
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Rating value={rating} precision={0.5} size="small" readOnly />
            <Typography variant="caption" color="text.secondary">
              ({reviews})
            </Typography>
          </Stack>

          {/* Product Title */}
          <Typography
            variant="body2"
            color="text.primary"
            sx={{
              fontWeight: 500,
              lineHeight: 1.3,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {name}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
      </Box>
  );
}
