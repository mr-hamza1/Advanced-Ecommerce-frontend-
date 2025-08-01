import { Box, AppBar, Toolbar, Typography , InputBase, FormControl, InputLabel, Select, MenuItem, Stack, Tooltip,
   IconButton,
} from "@mui/material"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"; // or your icon of choice
import { useState } from "react";
import {Person as PersonIcon,} from "@mui/icons-material"
import ChatIcon from '@mui/icons-material/Chat';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import HeaderBottom from "./HeaderBottom";
import { useNavigate } from "react-router-dom";
import MenuDrawer from "../modules/Home/Menu";



const Header = () => {
   
    const [search , setSearch] = useState("") 
    const [open , setOpen] = useState(false) 
    const [categorySearch, setCategorySearch] = useState("")
    const navigate = useNavigate();

    const handleDrawerToggle = ()=>{
      setOpen(true)
    }

  return (
    <Box >
          <Box width={{xs:"100%", md:"30%", lg:"50%"}} height={{xs:"3.5px", md:"5rem"}}>
        <AppBar 
         position="fixed"
         elevation={0}
         sx={{
            backgroundColor: "#FFFFFF",
            borderBottom: {xs:"none", md:"2px solid #e0e0e0"},
            paddingBottom: "7px",
            width:{xs:"100%", md:"100%", lg:"100%"},
         }}
        >
            <Toolbar >
                       
               <IconButton 
  onClick={handleDrawerToggle} 
  sx={{
    color: "black",
    display: { xs: "flex", md: "none" }, // ✅ hide on md and lg
    position: "relative",
    top: 5
  }}
>
  <MenuIcon />
</IconButton>

<Box sx={{ display: { xs: "block", md: "none" } }}>  {/* ✅ correct display */}
  <MenuDrawer open={open} onClose={() => setOpen(false)} />
</Box>


                       <Box  
                          sx={{
                            height: {xs:"36px", md:"46px"},
                            width: {xs:"116px", md:"150px"},
                            position: "relative", // 👈 Add this
                            top: 5,
                            left: {xs:1, md:40, lg: 100},
                            cursor: "pointer"
                          }}
                           display={"flex"}
                           gap={1}
                           alignItems={"center"}
                           justifyContent={"center"}
                           onClick={()=> navigate("/")}
                          
                        >
                          <Box
                            sx={{
                              position: "relative",
                              width: {xs:"34px", md:"44px"},
                              height: {xs:"34px", md:"44px"},
                            }}
                          >
                            {/* Back (lighter) box */}
                            <Box
                              sx={{
                                position: "absolute",
                                top: 0,
                                left: "6px", // slight offset
                                width: {xs:"28px", md:"36.35px"},
                                height: {xs:"31px", md:"40.17px"},
                                backgroundColor: "rgba(13, 110, 253, 0.2)",
                                borderRadius: {xs:"7px", md:"11px"},
                              }}
                            />
                          
                            {/* Front (main) box */}
                            <Box
                              sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: {xs:"29px", md:"38.26px"},
                                height: {xs:"31px", md:"40.17px"},
                                backgroundColor: "#0D6EFD",
                                borderRadius: {xs:"7px", md:"11px"},
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "white",
                              }}
                            >
                              <ShoppingBagIcon height={{xs:"16px", md:"17px"}} width={{xs:"13px", md:"20px"}} fontSize="small" />
                            </Box>
                          </Box>
                          

                           <Typography
                             color="#8CB7F5"
                             variant="inherit"
                             sx={{
                               width: {xs:"59px", md:"77px"},
                               height: {xs:"16px", md:"21.1px"},
                               position: "relative", 
                               top: -8,
                               fontSize: {xs:"1.3rem", md:"1.5rem"},
                               fontWeight: "bold"
                             }}
                           >
                             Brand
                           </Typography>

                    </Box>

                          <Box 
                           sx={{
                               width: {md: "42%", lg: "45%"},
                               height: "40px",
                               position: "relative", 
                               top: 2,
                               left: {md:80, lg: 150},
                               border: "1px solid rgba(13, 110, 253, 1)",
                               borderRadius: "10px",
                             }}
                               display={{xs:"none", md:"flex"}}

                          >

                          <Box
                            sx={{
                              width: {md: "100%", lg: "70%"},
                              height: "40px",
                              border: "1px solid rgba(13, 110, 253, 1)",
                              borderTopLeftRadius: "10px",
                              borderBottomLeftRadius: "10px",
                              paddingLeft: "12px", // spacing inside input
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <InputBase
                              placeholder="Search"
                              fullWidth
                              value={search}
                              onChange={(e)=> setSearch(e.target.value) }
                              sx={{
                                fontSize: "16px",
                                color: "#000",
                              }}
                            />
                          </Box>

                          <Box 
                           sx={{
                               width: {md: "30%", lg: "30%"},
                               height: "40px",
                               borderTop: "1px solid rgba(13, 110, 253, 1)",
                               borderBottom: "1px solid rgba(13, 110, 253, 1)",
                               borderLeft: "0px solid transparent",
                               borderRight: "0px solid transparent",
                               display: "flex",
                               justifyContent: "center",
                               alignItems: "center",
                             }}
                             >
                               <Box  sx={{
                               width: {md:"120px",lg:"130px",},
                               height: "60px",
                               border: "none"
                               }}>
                               <FormControl fullWidth variant="standard">
                                 <InputLabel id="dropdown-label"> All category</InputLabel>
                                 <Select
                                   labelId="dropdown-label"
                                   value={categorySearch}
                                   onChange={(e) => setCategorySearch(e.target.value)}
                                   disableUnderline
                                   sx={{
                                     fontSize: "14px",
                                     height: "19px",
                                     color: "black",
                                   }}
                                 >
                                   <MenuItem value="option1">Option 1</MenuItem>
                                   <MenuItem value="option2">Option 2</MenuItem>
                                   <MenuItem value="option3">Option 3</MenuItem>
                                 </Select>
                             </FormControl>

                               </Box>

                            </Box>
                          <Box 
                           sx={{
                               width: {md:"120px", lg:"100px"},
                               height: "40px",
                               background: "linear-gradient(rgba(18, 127, 255, 1), rgba(0, 103, 255, 1))",
                               color: "white",
                               borderTopRightRadius: "10px",
                               borderBottomRightRadius: "10px",
                               border: "1px solid rgba(13, 110, 253, 1)",
                               fontSize: "14px"

                             }}
                             component={"button"}
                             onClick={()=> navigate("/search")}
                             >
                                Search
                        
                            </Box>
                     </Box>
                        
                          <Box  sx={{
                               width: { md:"200px",lg:"228px"},
                               height: "50px",
                               top: 5,
                               position: "relative",
                               left: { md:"180px",lg:"300px"},
                               color: "rgba(139, 150, 165, 1)",
                               display: {xs: "none",md:"flex"},
                               justifyContent: "center",
                               alignItems: "center"

                             }}
                             gap={5}
                             >

                            <Stack 
                            sx={{
                                width: "37px",
                               height: "41px",
                                justifyContent: "center",
                               alignItems: "center"
                            }}
                            >
                                 <IconButton>
                                     <PersonIcon/>
                                 </IconButton>                                
                                 <Typography  variant="subtitle1" fontSize={"10px"}>Profile</Typography>
                            </Stack>

                            <Stack 
                            sx={{
                                width: "37px",
                               height: "41px",
                                justifyContent: "center",
                               alignItems: "center"
                            }}
                            >    
                                 <IconButton>
                                    <ChatIcon/>
                                 </IconButton>
                                 <Typography  variant="subtitle1" fontSize={"10px"}>Message</Typography>
                            </Stack>

                            <Stack 
                            sx={{
                                width: "37px",
                               height: "41px",
                                justifyContent: "center",
                               alignItems: "center"
                            }}
                            >
                                <IconButton>
                                   <FavoriteIcon/>
                                 </IconButton>
                                 <Typography  variant="subtitle1" fontSize={"10px"}>Order</Typography>
                            </Stack>

                            <Stack 
                            sx={{
                                width: "37px",
                               height: "41px",
                                justifyContent: "center",
                               alignItems: "center"
                            }}
                            >
                                 <IconButton onClick={()=> navigate("/cart")}>
                                     <ShoppingCartIcon/>
                                 </IconButton>
                                 <Typography width={"40px"}  variant="subtitle1" fontSize={"10px"}>My cart</Typography>
                            </Stack>

                       </Box>

                         
                         <Box flexGrow={1} /> 
                         <MobileIcons />
            </Toolbar>

        </AppBar>
    </Box>
     
     <Box display={{xs:"none", md:"flex"}}>
            <HeaderBottom />

     </Box>
      
    </Box>
  )
}


const MobileIcons = ()=>{
  return(

      <Box
        gap={1}
        sx={{
          display: { xs: "flex", md: "none" },
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          top: 3,
          right: -5,
        }}
      >
        <Tooltip title="Cart">
          <IconButton>
            <ShoppingCartIcon sx={{ fontSize: 24 }} />
          </IconButton>
        </Tooltip>
      
        <Tooltip title="Profile">
          <IconButton>
            <PersonIcon sx={{ fontSize: 24 }} />
          </IconButton>
        </Tooltip>
      </Box>
      
  )
}

export default Header