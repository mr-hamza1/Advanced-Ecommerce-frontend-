import React from "react";
import {
  Box,
  Grid,
  Stack,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Rating,
  IconButton,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
const GridView = ({ products, favorites, toggleFavorite, viewMode }) => {
  return (
<Stack spacing={2} direction="column">
            {products.map((product) => (
              <Stack key={product.id} height="230px" sx={{                    
                "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)",
    }}}>
                <Card
                  sx={{
                    display: "flex",
                    height: "100%",
                    p: 2,
                    pb: 1,
                    backgroundColor: "white",
                    boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                    "&:hover": {
                      boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    },
                  }}
                >
                  {/* Product Image */}
                  <CardMedia
                    component="img"
                    sx={{
                      width: 190,
                      height: 190,
                      objectFit: "contain",
                      mr: 2,
                      backgroundColor: "#f9f9f9",
                      borderRadius: 1,
                    }}
                    image={product.image}
                    alt={product.name}
                  />

                  {/* Product Details */}
                  <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
                    <CardContent sx={{ p: 0, "&:last-child": { pb: 0 } }}>
                      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: "1rem",
                              fontWeight: 540,
                              mb: 1,
                              color: "black",
                              cursor: "pointer",
                              "&:hover": { textDecoration: "underline" },
                            }}
                          >
                            {product.name}
                          </Typography>

                          {/* Price */}
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                            <Typography variant="h5" sx={{ color: "#d32f2f", fontWeight: "bold", fontSize: "1.25rem" }}>
                              ${product.price.toFixed(2)}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{ textDecoration: "line-through", color: "text.secondary", fontSize: "0.875rem" }}
                            >
                              ${product.originalPrice.toFixed(2)}
                            </Typography>
                            {product.freeShipping && (
                              <Chip
                                label="Free Shipping"
                                size="small"
                                sx={{ backgroundColor: "#e8f5e8", color: "#2e7d32", fontSize: "0.75rem", height: 20 }}
                              />
                            )}
                          </Box>

                          {/* Rating */}
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                            <Rating value={product.rating} precision={0.1} readOnly size="small" />
                            <Typography variant="body2" color="text.secondary" sx={{ fontSize: "0.8rem" }}>
                              ({product.reviews})
                            </Typography>
                          </Box>

                          {/* Description */}
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              fontSize: "0.875rem",
                              lineHeight: 1.4,
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                              overflow: "hidden",
                            }}
                          >
                            {product.description}
                          </Typography>

                          <Typography color="#046dff" mt={2}>
                            View details
                          </Typography>
                        </Box>

                        {/* Favorite Button */}
                        <IconButton
                          onClick={() => toggleFavorite(product.id)}
                          sx={{
                            color: favorites.includes(product.id) ? "#d32f2f" : "#ccc",
                            ml: 2,
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                            p: 0.7,
                          }}
                        >
                          {favorites.includes(product.id) ? <Favorite fontSize="small" /> : <FavoriteBorder fontSize="small" />}
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Box>
                </Card>
              </Stack>
            ))}
          </Stack>  )
}

export default GridView