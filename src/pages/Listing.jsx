"use client"

import { useEffect, useState } from "react"
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
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Radio,
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
import img1 from "../assets/Home/tech/1.jpg"
import img2 from "../assets/Home/tech/2.jpg"
import img3 from "../assets/Home/tech/3.jpg"
import img4 from "../assets/Home/tech/4.jpg"
import img5 from "../assets/Home/tech/5.jpg"
import img6 from "../assets/Home/tech/6.jpg"
import ProductCard from "../components/ProductCard"
import PriceRangeFilter from "../modules/Filtering/Range"
import AllFiltering from "../modules/Filtering/AllFiltering"
import CustomPagination from "../modules/pagination"

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

const conditons = ["Any", "Refurbished", "Brand new", "Old items"]

const products = [
  {
    id: 1,
    name: "iPhone 13 mini 128GB, Pink (Unlocked)",
    price: 599.0,
    originalPrice: 699.0,
    rating: 4.5,
    reviews: 128,
    image: `${img1}`,
    freeShipping: true,
    description:
      "A15 Bionic chip for lightning-fast performance. Advanced dual-camera system for incredible photos in any light. Cinematic mode adds shallow depth of field and shifts focus automatically.",
  },
  {
    id: 7,
    name: "iPhone 13 mini 128GB, Pink (Unlocked)",
    price: 599.0,
    originalPrice: 699.0,
    rating: 4.5,
    reviews: 128,
    image: `${img1}`,
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
    image: `${img2}`,
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
    image: `${img3}`,
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
    image: `${img4}`,
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
    image: `${img5}`,
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
    image: `${img6}`,
    freeShipping: true,
    description:
      "Industry-leading noise canceling with Dual Noise Sensor technology. 30-hour battery life with quick charge. Touch sensor controls for pause, play, skip tracks.",
  },
  {
    id: 6,
    name: "Sony WH-1000XM4 Wireless Headphones",
    price: 279.0,
    originalPrice: 349.0,
    rating: 4.4,
    reviews: 523,
    image: `${img6}`,
    freeShipping: true,
    description:
      "Industry-leading noise canceling with Dual Noise Sensor technology. 30-hour battery life with quick charge. Touch sensor controls for pause, play, skip tracks.",
  },
  {
    id: 7,
    name: "Sony WH-1000XM4 Wireless Headphones",
    price: 279.0,
    originalPrice: 349.0,
    rating: 4.4,
    reviews: 523,
    image: `${img6}`,
    freeShipping: true,
    description:
      "Industry-leading noise canceling with Dual Noise Sensor technology. 30-hour battery life with quick charge. Touch sensor controls for pause, play, skip tracks.",
  },
  {
    id: 8,
    name: "Sony WH-1000XM4 Wireless Headphones",
    price: 279.0,
    originalPrice: 349.0,
    rating: 4.4,
    reviews: 523,
    image: `${img6}`,
    freeShipping: true,
    description:
      "Industry-leading noise canceling with Dual Noise Sensor technology. 30-hour battery life with quick charge. Touch sensor controls for pause, play, skip tracks.",
  },
  {
    id: 9,
    name: "Sony WH-1000XM4 Wireless Headphones",
    price: 279.0,
    originalPrice: 349.0,
    rating: 4.4,
    reviews: 523,
    image: `${img6}`,
    freeShipping: true,
    description:
      "Industry-leading noise canceling with Dual Noise Sensor technology. 30-hour battery life with quick charge. Touch sensor controls for pause, play, skip tracks.",
  },
]

export default function ProductListing() {
    // ✅ Pagination State
  const [page, setPage] = useState(1);
  const [viewMode, setViewMode] = useState("list")
  const [opened, setOpened] = useState(false)
  const [rowsPerPage, setRowsPerPage] = useState(6);
  // ✅ Pagination Logic
  const totalPages = Math.ceil(products.length / rowsPerPage);
  const startIndex = (page - 1) * rowsPerPage;
  const paginatedProducts = products.slice(startIndex, startIndex + rowsPerPage);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [favorites, setFavorites] = useState([])
  const toggleFavorite = (productId) => {
    setFavorites((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  const toggleCategory = (categoryName) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryName) ? prev.filter((name) => name !== categoryName) : [...prev, categoryName],
    )
  }

    const toggleCategoryBox = () => {
    setOpen((prev) => !prev);
  };

    const [open, setOpen] = useState(true);

useEffect(() => {
  setRowsPerPage(viewMode === "grid" ? 9 : 6);
  setOpened(viewMode === "grid"? false : true)
}, [viewMode]);


  return (
    <Box sx={{ backgroundColor: "#f7fafc",width:"100%", height: "100%", display: "flex" }}>
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
            
                                
              {/* Categories */}
           <Divider  />
         <AllFiltering title="Category">
                 <List dense sx={{ p: 0 }}>
                {categories.map((category) => (
                  <Box key={category.name}>
                    <ListItem button onClick={() => toggleCategory(category.name)} sx={{ px: 0, py: 0.5, cursor:"pointer", }}>
                      <ListItemText primary={category.name} primaryTypographyProps={{ fontSize: "0.875rem" }} />
                      </ListItem>
                      
                  </Box>
                ))}
              </List>
         </AllFiltering>
          
           <Divider />
         <AllFiltering title="Brands">
              <List dense sx={{ p: 0 }}>
                {brands.map((brand) => (
                  <ListItem key={brand} sx={{ py: 0.10, px: 0 }}>
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
         </AllFiltering>

           <Divider />
         <AllFiltering title="Featured">
              <List dense sx={{ p: 0 }}>
                {brands.map((brand) => (
                  <ListItem key={brand} sx={{ py: 0.10, px: 0 }}>
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
         </AllFiltering>

              <Divider  />


              {/* Price Range */}

       <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }} onClick={toggleCategoryBox}>
        <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: 600, mb: 1, mt: 1 }}>
          Price range
        </Typography>
        {open ? <ExpandLess fontSize="small" /> : <ExpandMore fontSize="small" />}
      </Box>
  

               <Collapse in={open} timeout="auto" unmountOnExit>
        <List dense sx={{ p: 0 }}>
          <PriceRangeFilter />
        </List>
      </Collapse>

                <Divider  />

         <AllFiltering title="Condition" show={false} opened={opened}>
              <List dense sx={{ p: 0 }}>
                {conditons.map((brand) => (
                  <ListItem key={brand} sx={{ py: 0.10, px: 0 }}>
                    <FormControlLabel
                      control={<Radio size="small" />}
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
         </AllFiltering>
                           <Divider  />

              {/* Ratings */}

             <AllFiltering title="Ratings" show={false} opened={opened}>
                   <List dense sx={{ p: 0 }}>
                {[5, 4, 3, 2, 1].map((stars) => (
                  <ListItem key={stars} sx={{ py: 0.25, px: 0 }}>
                    <FormControlLabel
                      control={<Checkbox size="small" />}
                      label={
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                          <Rating value={stars} readOnly size="medium" />
              
                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>
                </AllFiltering>

     </Stack>

          <Stack  width={"90%"} ml={3}>

            
        {/* Header with view controls */}
        <Box sx={{ display: "flex",  alignItems: "center", mb: 2 ,
            backgroundColor: "white",
            height: "62px",
            justifyContent: "space-between",
         }}>
           <Stack direction={"row"} alignItems={"center"} fontSize={"16px"}>
                 <Typography  color="black" pl={3}>
            1221 items in  &nbsp;
          </Typography>
          <Typography  fontWeight={550} color="black" fontSize={"16px"}>
            Mobile 
          </Typography>
           </Stack>
            
            <Stack direction={"row"} alignItems={"center"} height={"100%"} gap={2} pr={2}>
              <Stack>
                    <label htmlFor="verified" >
      <input
        type="checkbox"
        id="verified"
        style={{ accentColor: "#046dff" }}
      />
      Verified only
    </label>

              </Stack>
              <Stack>
                <FormControl sx={{ minWidth: 172,}} size={"small"}>
      <InputLabel id="dropdown-label">Featured</InputLabel>
      <Select
        labelId="dropdown-label"
        value={value}
        onChange={handleChange}
      >
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>
    </FormControl>

              </Stack>

<Box sx={{ display: "flex", gap: 0.1}}>
  <IconButton
    size="small"
    onClick={() => setViewMode("grid")}
    color={viewMode === "grid" ? "primary" : "default"}
    sx={{
      border: "1px solid #ddd",
      borderRadius: "3px",
      bgcolor:`${viewMode === "grid" ? "#eff2f4" : "default"}`,
    }}
  >
    <ViewModule fontSize="small" />
  </IconButton>

  <IconButton
    size="small"
    onClick={() => setViewMode("list")}
    color={viewMode === "list" ? "primary" : "default"}
    sx={{
      border: "1px solid #ddd",
      borderRadius: "3px",
      bgcolor:`${viewMode === "list" ? "#eff2f4" : "default"}`,
    }}
  >
    <ViewList fontSize="small" />
  </IconButton>
</Box>
            </Stack>
            
          
        </Box>

             <ProductCard viewMode={viewMode} products={paginatedProducts} favorites={favorites} toggleFavorite={toggleFavorite} />
          </Stack>
        </Stack>
            {/* ✅ Pagination */}
            <Stack width={"100%"} direction={"row"}  pt={4} pb={5}>
              <Box flexGrow={1}/>
            <CustomPagination page={page} setPage={setPage}  rowsPerPage={rowsPerPage} setRowsPerPage={setRowsPerPage} totalPages={totalPages} />

            </Stack>

      </Box>
    </Box>
  )
}
