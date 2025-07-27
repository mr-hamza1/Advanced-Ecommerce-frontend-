"use client"

import { useState } from "react"
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Chip,
  IconButton,
  Breadcrumbs,
  Link,
  Pagination,
  FormControlLabel,
  Checkbox,
  Collapse,
  Stack,
} from "@mui/material"
import {
  Favorite,
  FavoriteBorder,
  ExpandLess,
  ExpandMore,
  ViewModule,
  ViewList,
  NavigateNext,
} from "@mui/icons-material"

const categories = [
  {
    name: "Computers",
    subcategories: ["Desktop", "Laptop", "Gaming PC", "All-in-One"],
    expanded: true,
  },
  {
    name: "Mobile accessories",
    subcategories: ["Cases & Covers", "Chargers", "Screen Protectors", "Cables"],
    expanded: false,
  },
  {
    name: "Tablets",
    subcategories: ["iPad", "Android Tablets", "Windows Tablets", "Accessories"],
    expanded: false,
  },
  {
    name: "Smart watch",
    subcategories: ["Apple Watch", "Samsung Galaxy Watch", "Fitness Trackers", "Bands"],
    expanded: false,
  },
]

const brands = ["Apple", "Samsung", "Sony", "Microsoft", "Google", "OnePlus"]

const priceRanges = ["Under $25", "$25 to $50", "$50 to $100", "$100 to $200", "$200 & Above"]

const products = [
  {
    id: 1,
    name: "iPhone 13 mini 128GB, Pink (Unlocked)",
    price: 599.0,
    originalPrice: 699.0,
    rating: 4.5,
    reviews: 128,
    image: "/placeholder.svg?height=100&width=100",
    freeShipping: true,
    description:
      "A15 Bionic chip for lightning-fast performance. Advanced dual-camera system for incredible photos in any light. Cinematic mode adds shallow depth of field and shifts focus automatically.",
  },
  {
    id: 2,
    name: "Samsung Galaxy X6 5G",
    price: 899.0,
    originalPrice: 1199.0,
    rating: 4.3,
    reviews: 256,
    image: "/placeholder.svg?height=100&width=100",
    freeShipping: true,
    description:
      "Pro-grade Camera with 108MP resolution. 8K Video recording capability. S Pen compatibility. Dynamic AMOLED 2X display with 120Hz refresh rate.",
  },
  {
    id: 3,
    name: "iPad Pro 11-inch (3rd generation)",
    price: 799.0,
    originalPrice: 899.0,
    rating: 4.7,
    reviews: 89,
    image: "/placeholder.svg?height=100&width=100",
    freeShipping: true,
    description:
      "M1 chip delivers next-level performance. Stunning 11-inch Liquid Retina display with ProMotion, True Tone, and P3 wide color. Ultra Wide front camera with Center Stage.",
  },
  {
    id: 4,
    name: "MacBook Air 13-inch M2 Chip",
    price: 1199.0,
    originalPrice: 1299.0,
    rating: 4.8,
    reviews: 342,
    image: "/placeholder.svg?height=100&width=100",
    freeShipping: true,
    description:
      "Supercharged by M2 chip. Up to 18 hours of battery life. Fanless design for silent operation. 13.6-inch Liquid Retina display with 500 nits of brightness.",
  },
  {
    id: 5,
    name: "Apple Watch Series 8 GPS 45mm",
    price: 399.0,
    originalPrice: 429.0,
    rating: 4.6,
    reviews: 167,
    image: "/placeholder.svg?height=100&width=100",
    freeShipping: true,
    description:
      "Advanced health sensors including temperature sensing. Crash Detection. Water resistant to 50 meters. All-day battery life up to 18 hours.",
  },
  {
    id: 6,
    name: "Sony WH-1000XM4 Wireless Headphones",
    price: 279.0,
    originalPrice: 349.0,
    rating: 4.4,
    reviews: 523,
    image: "/placeholder.svg?height=100&width=100",
    freeShipping: true,
    description:
      "Industry-leading noise canceling with Dual Noise Sensor technology. 30-hour battery life with quick charge. Touch sensor controls for pause, play, skip tracks.",
  },
]

export default function ProductListing() {
  const [favorites, setFavorites] = useState([])
  const [expandedCategories, setExpandedCategories] = useState(["Computers"])
  const [viewMode, setViewMode] = useState("list")

  const toggleFavorite = (productId) => {
    setFavorites((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  const toggleCategory = (categoryName) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryName) ? prev.filter((name) => name !== categoryName) : [...prev, categoryName],
    )
  }

  return (
    <Box sx={{ backgroundColor: "#f7fafc",width:"100%", minHeight: "100vh", display: "flex" }}>
      <Box
        height={"100%"}
        width={"1250px"}
        sx={{
          position: "relative",
          left: 140,
          pt: 2.3
        }}
      >
                {/* Breadcrumbs */}
        <Breadcrumbs separator={<NavigateNext fontSize="small" />} sx={{ mb: 2 }}>
          <Link underline="hover" color="inherit" href="/" sx={{ fontSize: "0.875rem" }}>
            Category
          </Link>
          <Link underline="hover" color="inherit" href="/electronics" sx={{ fontSize: "0.875rem" }}>
            Electronics
          </Link>
          <Typography color="text.primary" sx={{ fontSize: "0.875rem" }}>
            Mobile accessories
          </Typography>
        </Breadcrumbs>

        
        <Stack width={"100%"} direction={"row"}>

            
            
        <Stack width={"240px"}>
            <Paper sx={{ p: 2, backgroundColor: "white" }}>
              {/* Categories */}
              <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: 600, mb: 2 }}>
                Category
              </Typography>

              <List dense sx={{ p: 0 }}>
                {categories.map((category) => (
                  <Box key={category.name}>
                    <ListItem button onClick={() => toggleCategory(category.name)} sx={{ px: 0, py: 0.5 }}>
                      <ListItemText primary={category.name} primaryTypographyProps={{ fontSize: "0.875rem" }} />
                      {expandedCategories.includes(category.name) ? (
                        <ExpandLess fontSize="small" />
                      ) : (
                        <ExpandMore fontSize="small" />
                      )}
                    </ListItem>
                    <Collapse in={expandedCategories.includes(category.name)}>
                      <List dense sx={{ pl: 2 }}>
                        {category.subcategories.map((sub) => (
                          <ListItem key={sub} sx={{ py: 0.25, px: 0 }}>
                            <FormControlLabel
                              control={<Checkbox size="small" />}
                              label={sub}
                              sx={{
                                "& .MuiFormControlLabel-label": {
                                  fontSize: "0.8rem",
                                  color: "text.secondary",
                                },
                              }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Collapse>
                  </Box>
                ))}
              </List>

              <Divider sx={{ my: 2 }} />

              {/* Brands */}
              <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: 600, mb: 1 }}>
                Brands
              </Typography>
              <List dense sx={{ p: 0 }}>
                {brands.map((brand) => (
                  <ListItem key={brand} sx={{ py: 0.25, px: 0 }}>
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      label={brand}
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontSize: "0.875rem",
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>

              <Divider sx={{ my: 2 }} />

              {/* Price Range */}
              <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: 600, mb: 1 }}>
                Price range
              </Typography>
              <List dense sx={{ p: 0 }}>
                {priceRanges.map((range) => (
                  <ListItem key={range} sx={{ py: 0.25, px: 0 }}>
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      label={range}
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontSize: "0.875rem",
                        },
                      }}
                    />
                  </ListItem>
                ))}
              </List>

              <Divider sx={{ my: 2 }} />

              {/* Ratings */}
              <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: 600, mb: 1 }}>
                Ratings
              </Typography>
              <List dense sx={{ p: 0 }}>
                {[5, 4, 3, 2, 1].map((stars) => (
                  <ListItem key={stars} sx={{ py: 0.25, px: 0 }}>
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      label={
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                          <Rating value={stars} readOnly size="small" />
                          <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
                            & up
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
        </Stack>

          <Stack  width={"90%"} ml={3}>

            
        {/* Header with view controls */}
        <Box sx={{ display: "flex",  alignItems: "center", mb: 2 ,
            backgroundColor: "white",
            height: "62px"
         }}>
           <Stack direction={"row"} alignItems={"center"} fontSize={"16px"}>
                 <Typography  color="black" pl={3}>
            1221 items in  &nbsp;
          </Typography>
          <Typography  fontWeight={550} color="black" fontSize={"16px"}>
            Mobile 
          </Typography>
           </Stack>
            
          <Box sx={{ display: "flex", gap: 0.5 }}>
            <IconButton
              size="small"
              onClick={() => setViewMode("grid")}
              color={viewMode === "grid" ? "primary" : "default"}
              sx={{ border: "1px solid #ddd" }}
            >
              <ViewModule fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              onClick={() => setViewMode("list")}
              color={viewMode === "list" ? "primary" : "default"}
              sx={{ border: "1px solid #ddd" }}
            >
              <ViewList fontSize="small" />
            </IconButton>
          </Box>
        </Box>

          {/* Right Side - Products */}

        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <Stack spacing={1}>
              {products.map((product) => (
                <Card
                  key={product.id}
                  sx={{
                    display: "flex",
                    p: 2,
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
                      width: 100,
                      height: 100,
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
                          {/* Product Name */}
                          <Typography
                            variant="h6"
                            component="h3"
                            sx={{
                              fontSize: "1rem",
                              fontWeight: 500,
                              mb: 1,
                              color: "#1976d2",
                              cursor: "pointer",
                              "&:hover": { textDecoration: "underline" },
                            }}
                          >
                            {product.name}
                          </Typography>

                          {/* Price */}
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                            <Typography
                              variant="h5"
                              sx={{
                                color: "#d32f2f",
                                fontWeight: "bold",
                                fontSize: "1.25rem",
                              }}
                            >
                              ${product.price.toFixed(2)}
                            </Typography>
                            <Typography
                              variant="body2"
                              sx={{
                                textDecoration: "line-through",
                                color: "text.secondary",
                                fontSize: "0.875rem",
                              }}
                            >
                              ${product.originalPrice.toFixed(2)}
                            </Typography>
                            {product.freeShipping && (
                              <Chip
                                label="Free Shipping"
                                size="small"
                                sx={{
                                  backgroundColor: "#e8f5e8",
                                  color: "#2e7d32",
                                  fontSize: "0.75rem",
                                  height: 20,
                                }}
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
                        </Box>

                        {/* Favorite Button */}
                        <IconButton
                          onClick={() => toggleFavorite(product.id)}
                          sx={{
                            color: favorites.includes(product.id) ? "#d32f2f" : "#ccc",
                            ml: 2,
                          }}
                        >
                          {favorites.includes(product.id) ? (
                            <Favorite fontSize="small" />
                          ) : (
                            <FavoriteBorder fontSize="small" />
                          )}
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Box>
                </Card>
              ))}
            </Stack>

            
          </Grid>
        </Grid>
          </Stack>
        </Stack>

      </Box>
    </Box>
  )
}
