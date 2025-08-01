import {
  Box,
  Stack,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  TextField,
  InputAdornment,
  Chip,
  Grid,
  AppBar,
  Toolbar,
} from "@mui/material"
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
  Person as PersonIcon,
  ShoppingBag as ShoppingBagIcon,
} from "@mui/icons-material"
import quotes from "../../assets/Home/quotes.png"
import Recommended from "../../modules/Home/Recommended"

const categories = [
  { id: 1, name: "Electronics", image: "https://example.com/electronics.jpg" },
  { id: 2, name: "Fashion", image: "https://example.com/fashion.jpg" },
  { id: 3, name: "Home & Kitchen", image: "https://example.com/home-kitchen.jpg" },
  { id: 4, name: "Beauty & Personal Care", image: "https://example.com/beauty.jpg" },
  { id: 5, name: "Sports & Outdoors", image: "https://example.com/sports.jpg" },
  { id: 6, name: "Books", image: "https://example.com/books.jpg" },
  { id: 7, name: "Toys & Games", image: "https://example.com/toys.jpg" },
  { id: 8, name: "Grocery", image: "https://example.com/grocery.jpg" }
];



export default function MobileHome({Home1st, dealsData}) {
  return (
    <Box sx={{ bgcolor: "#f7fafc", minHeight: "100vh" }} width={{xs:"100%",}} display={{md:"none"}} >
      {/* Header */}


      {/* Search Bar */}
      <Box sx={{ p: 2, mt:8, bgcolor: "white" }}>
        <TextField
          fullWidth
          placeholder="Search"
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#999" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              bgcolor: "#f5f5f5",
              borderRadius: 2,
            },
          }}
        />
      </Box>

      {/* Category Tabs */}
      <Box sx={{ px: 2, pb: 2, bgcolor: "white" }}>
        <Stack direction="row" spacing={2} sx={{ overflowX: "auto" }}>
     {categories.map((i, index) => (
  <Chip
    key={index}
    label={i.name} 
    sx={{
      color: "#2196f3",
      bgcolor: "#eff2f4",
      border: "1px solid #eff2f4",
      borderRadius: "6px",
      margin: "1px"
    }}
  />
))}

        </Stack>
      </Box>

      {/* Hero Banner */}
      <Box sx={{ mb: 2, overflow: "hidden" }}>
        <Box
          sx={{
            p: 3,
            position: "relative",
            backgroundImage: `url(${Home1st})`,
            backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
            minHeight: 120,
          }}
        >
          <Stack spacing={2} sx={{ maxWidth: "60%"}}>
            <Typography variant="h6" sx={{ color: "black", fontWeight: "bold" }}>
              Latest trending
            </Typography>
            <Typography variant="h5" sx={{ color: "black", fontWeight: "bold", position:"relative", top: -15 }}>
              Electronic items
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{
                bgcolor: "white",
                color: "#2196f3",
                textTransform: "none",
                position:"relative", top: -15,
                alignSelf: "flex-start",
                "&:hover": { bgcolor: "#f5f5f5" },
              }}
            >
              Learn more
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* Deals and Offers */}
      <Box sx={{ mb: 3 }} bgcolor={"white"} width={"100%"}>
        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2, p:1}} width={"100%"}>
         <Stack pt={2}>
                  <Typography variant="h6" fontWeight="bold" fontSize={"20px"}>
            Deals and offers
          </Typography>
           <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          Electronic equipments
        </Typography>
         </Stack>
          <Stack direction="row" spacing={2}>
            <Box display={"flex"} gap={1} mb={2} >
              {["04", "13", "34", "56"].map((time, index) => (
                <Stack  direction={"column"} justifyContent={"center"} alignItems={"center"}
                  key={index}
                  sx={{
                    backgroundColor: "#eff2f4",
                    color: "rgba(139, 150, 165, 1)",
                    px: 0.5,
                    borderRadius: "4px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    width:"30px",
                    height: "40px",
                  }}
                >
                  {time}
                 <span>
                   {
                    index==0 && "Days" 
                  }
                  {
                    index==1 && "Hour" 
                  }
                  {
                    index==2 && "Min" 
                  }
                  {
                    index==3 && "Sec" 
                  }
                 </span>
                </Stack>
              ))}
            </Box>

          </Stack>
        </Stack>

       

        <Stack direction="row"  sx={{ overflowX: "auto", pb: 1 }} width={"100%"}>
             <Stack direction={"row"} width={"100%"} >
               {dealsData.map((item, index) => (
                  <Box textAlign={"center"} gap={2} border={"1px solid #e0e0e0"} width={"100%"} p={3}
                  sx={{           "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
    }}}
                  >
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.name}
                      sx={{
                        width: 90,
                        height: 90,
                        objectFit: "contain",
                        borderRadius: "1px",
                        mb: 0.5,
                      }}
                    />
                    <Typography variant="body2" sx={{ fontSize: "12px", mb: 0.5 }}>
                      {item.name}
                    </Typography>
                        <Button 
                          variant="contained"
                          sx={{
                            width: "10px",
                            height: "25px",
                            fontSize: "10px",
                            color: "red",
                            fontWeight: "bold",
                            backgroundColor: "rgba(255, 227, 227, 1)",
                            borderRadius: "29px",        // better for a circle than 45%
                            pointerEvents: "none",      // makes it unclickable
                            cursor: "default"           // avoids hover pointer
                          }}
                        >
                          {item.discount}
                        </Button>

         
                  </Box>
              ))}
             </Stack>

        </Stack>
      </Box>

      {/* Home and Outdoor */}
      <Box sx={{ mb: 3 }} bgcolor={"white"}>
        <Typography variant="h6" fontWeight="bold" sx={{ p:2 }}>
          Home and outdoor
        </Typography>

        <Stack direction="row"  sx={{ overflowX: "auto", pb: 1 }} width={"100%"}>
             <Stack direction={"row"} width={"100%"} >
               {dealsData.map((item, index) => (
                  <Box textAlign={"center"} gap={2} border={"1px solid #e0e0e0"} width={"100%"} p={3}
                  sx={{           "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
    }}}
                  >
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.name}
                      sx={{
                        width: 90,
                        height: 90,
                        objectFit: "contain",
                        borderRadius: "1px",
                        mb: 0.5,
                      }}
                    />
                    <Typography variant="body2" sx={{ fontSize: "12px", mb: 0.5 }}>
                      {item.name}
                    </Typography>
                        <Button 
                          variant="contained"
                          sx={{
                            width: "10px",
                            height: "25px",
                            fontSize: "10px",
                            color: "red",
                            fontWeight: "bold",
                            backgroundColor: "rgba(255, 227, 227, 1)",
                            borderRadius: "29px",        // better for a circle than 45%
                            pointerEvents: "none",      // makes it unclickable
                            cursor: "default"           // avoids hover pointer
                          }}
                        >
                          {item.discount}
                        </Button>

         
                  </Box>
              ))}
             </Stack>

        </Stack>

        <Button
          variant="text"
          size="large"
          sx={{ color: "#2196f3", textTransform: "none",}}
          endIcon={<Box component="span">→</Box>}
        >
          Source now
        </Button>
      </Box>

      {/* Consumer Electronics */}
      <Box sx={{ mb: 3 }} bgcolor={"white"}>
        <Typography variant="h6" fontWeight="bold" sx={{ p:2 }}>
          Home and outdoor
        </Typography>

        <Stack direction="row"  sx={{ overflowX: "auto", pb: 1 }} width={"100%"}>
             <Stack direction={"row"} width={"100%"} >
               {dealsData.map((item, index) => (
                  <Box textAlign={"center"} gap={2} border={"1px solid #e0e0e0"} width={"100%"} p={3}
                  sx={{           "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.4)",
    }}}
                  >
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.name}
                      sx={{
                        width: 90,
                        height: 90,
                        objectFit: "contain",
                        borderRadius: "1px",
                        mb: 0.5,
                      }}
                    />
                    <Typography variant="body2" sx={{ fontSize: "12px", mb: 0.5 }}>
                      {item.name}
                    </Typography>
                        <Button 
                          variant="contained"
                          sx={{
                            width: "10px",
                            height: "25px",
                            fontSize: "10px",
                            color: "red",
                            fontWeight: "bold",
                            backgroundColor: "rgba(255, 227, 227, 1)",
                            borderRadius: "29px",        // better for a circle than 45%
                            pointerEvents: "none",      // makes it unclickable
                            cursor: "default"           // avoids hover pointer
                          }}
                        >
                          {item.discount}
                        </Button>

         
                  </Box>
              ))}
             </Stack>

        </Stack>

        <Button
          variant="text"
          size="large"
          sx={{ color: "#2196f3", textTransform: "none",}}
          endIcon={<Box component="span">→</Box>}
        >
          Source now
        </Button>
      </Box>



      {/* Promotional Banner */}
      <Box sx={{ mb: 3,overflow: "hidden" }}>
        <Box
          sx={{
            p: 3,
            backgroundImage: `linear-gradient(rgba(44, 124, 241, 1), rgba(0, 209, 255, 0.5)),url(${quotes})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
          }}
        >
          <Stack spacing={2} alignItems="flex-start">
            <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
              An easy way to send
            </Typography>
            <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>
              requests to all suppliers
            </Typography>
            <Button
              variant="contained"
              sx={{
                bgcolor:"#2196f3",
                color: "white",
                textTransform: "none",
                "&:hover": { bgcolor: "rgba(255,255,255,0.3)" },
              }}
            >
              Send inquiry
            </Button>
          </Stack>
        </Box>
      </Box>

      {/* Recommended Items */}
      <Box sx={{ px: 2, mb: 3 }}>
                     <Recommended />
      </Box>
    </Box>
  )
}
