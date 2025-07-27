"use client"

import { Avatar, Box, Button, List, ListItem, ListItemText, Stack, Typography, Grid } from "@mui/material"
import Home1st from "../assets/Home/Home1st.png"
import Home2_1 from "../assets/Home/Home2.1.png"
import Home2_2 from "../assets/Home/Home2.2.png"
import Home2_3 from "../assets/Home/Home2.3.png"
import Home2_4 from "../assets/Home/Home2.4.png"
import Home2_5 from "../assets/Home/Home2.5.png"
import Home3_main from "../assets/Home/interior/main.jpg"
import Home3_1 from "../assets/Home/interior/1.jpg"
import Home3_2 from "../assets/Home/interior/2.jpg"
import Home3_3 from "../assets/Home/interior/3.jpg"
import Home3_4 from "../assets/Home/interior/4.jpg"
import Home3_5 from "../assets/Home/interior/5.jpg"
import Home3_6 from "../assets/Home/interior/6.jpg"
import Home3_7 from "../assets/Home/interior/7.jpg"
import Home3_8 from "../assets/Home/interior/8.jpg"
import Home3_9 from "../assets/Home/interior/9.jpg"
import Home4_main from "../assets/Home/interior/main2.png"
import Home4_1 from "../assets/Home/tech/10.jpg"
import Home4_2 from "../assets/Home/tech/1.jpg"
import Home4_3 from "../assets/Home/tech/2.jpg"
import Home4_4 from "../assets/Home/tech/9.jpg"


import { useState } from "react"
import Quotes from "../modules/Home/Quotes"
import Recommended from "../modules/Home/Recommended"
import Services from "../modules/Home/Services"
import Suppliers from "../modules/Home/Suppliers"

const Home = () => {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const categories = [
    "Automobiles",
    "Clothes and wear",
    "Home interiors",
    "Computer and tech",
    "Tools, equipments",
    "Sports and outdoor",
    "Animal and pets",
    "Machinery tools",
    "More category",
  ]

  const dealsData = [
    { name: "Smart watches", discount: "-25%", image: `${Home2_1}` },
    { name: "Laptops", discount: "-15%", image: `${Home2_2}`  },
    { name: "GoPro cameras", discount: "-40%", image: `${Home2_3}`  },
    { name: "Headphones", discount: "-25%", image: `${Home2_4}`  },
    { name: "Canon cameras", discount: "-25%", image: `${Home2_5}`  },
  ]

  const homeOutdoorData = [
    { name: "Soft chairs", price: "19", image: `${Home3_1}` },
    { name: "Kitchen dishes", price: "39", image: `${Home3_5}`  },
    { name: "Kitchen appliance", price: "19", image: `${Home3_3}`  },
    { name: "Kitchen mixer", price: "100", image: `${Home3_9}`  },
    { name: "Blenders", price: "39", image: `${Home3_8}`  },
    { name: "Home appliance", price: "19", image: `${Home3_6}`  },
    { name: "Coffee maker", price: "19", image: `${Home3_7}`  },
    { name: "Lamps", price: "19", image: `${Home3_6}`  },
  ]

  const electronicsData = [
    { name: "Smart watches", price: "19", image: `${Home2_1}` },
    { name: "Cameras", price: "89", image: `${Home2_4}` },
    { name: "Headphones", price: "10", image: `${Home4_4}`},
    { name: "Tablet", price: "90", image: `${Home4_3}`},
    { name: "Gaming set", price: "35", image: `${Home2_3}` },
    { name: "Laptops & PC", price: "340", image: `${Home2_2}`},
    { name: "Smartphones", price: "19", image: `${Home4_2}`},
    { name: "Electric kettle", price: "240", image: `${Home4_1}` },
  ]

  return (
    <Box height={"100%"} width={"100%"} bgcolor={"#f7fafc"} >
      <Box
        height={"100%"}
        width={"1250px"}
        sx={{
          position: "relative",
          left: 140,
          pt: 2.3
        }}
      >
        <Stack
          direction={"row"}
          width={"100%"}
          height={"400px"}
          backgroundColor={"white"}
          pt={2}
          pl={1}
          pr={1}
          pb={2}
          border={"2px solid #e0e0e0"}
          borderRadius={"6px"}
        >
          <Box height={"400px"} width={"18%"}>
            <List dense>
              {categories.map((category, index) => (
                <ListItem
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  sx={{
                    py: 0.7,
                    borderRadius: "6px",
                    backgroundColor: selectedIndex === index ? "rgba(229, 241, 255, 1)" : "transparent",
                    "&:hover": {
                      backgroundColor: "rgba(229, 241, 255, 0.5)",
                      cursor: "pointer",
                    },
                  }}
                >
                  <ListItemText
                    primary={category}
                    primaryTypographyProps={{
                      fontSize: "14px",
                      color: "text.secondary",
                      fontWeight: selectedIndex === index ? "bold" : "normal",
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Box>

          <Box
            sx={{
              position: "relative",
              width: "75%",
              height: "365px",
              backgroundImage: `url(${Home1st})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right center",
              display: "flex",
              alignItems: "center",
              ml: 2,
              mr: 2,
              borderRadius: 0.3,
            }}
          >
            <Box
              sx={{
                maxWidth: 300,
                display: "flex",
                flexDirection: "column",
                marginLeft: "50px",
              }}
              top={-70}
              position={"relative"}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 500,
                  color: "#2a2a2a",
                }}
              >
                Latest trending
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: "#000",
                }}
              >
                Electronic items
              </Typography>
              <Button
                size="small"
                sx={{
                  mt: 1,
                  width: 100,
                  color: "#000",
                  textTransform: "none",
                  fontSize: "13px",
                  p: 0.3,
                  backgroundColor: "white",
                }}
              >
                Learn more
              </Button>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }} width={"20%"} height={"100%"}>
            {/* Welcome Card */}
            <Box
              height={"180px"}
              width={"200px"}
              sx={{
                backgroundColor: "#e3f2fd",
                borderRadius: "6px",
              }}
              p={1}
            >
              <Box display={"flex"} alignItems={"center"} top={-10} position={"relative"}>
                <Avatar
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: "#1976d2",
                  }}
                >
                  U
                </Avatar>
                <p>
                  Hi, user <br /> let's get started
                </p>
              </Box>
              <Box top={-10} position={"relative"}>
                <Button variant="contained" size="small" fullWidth sx={{ textTransform: "none", mb: 1 }}>
                  Join now
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="black"
                  mb={2}
                  fullWidth
                  sx={{ textTransform: "none", backgroundColor: "rgba(255, 255, 255, 1)" }}
                >
                  Log in
                </Button>
              </Box>
            </Box>

            {/* Promo Card */}
            <Box
              height={"95px"}
              width={"200px"}
              sx={{
                backgroundColor: "#ff9800",
                color: "white",
                borderRadius: "6px",
              }}
              p={2}
            >
              <Typography variant="body1" sx={{ fontWeight: "" }}>
                Get US $10 off
              </Typography>
              <Typography variant="body2">with a new</Typography>
              <Typography variant="body2" mb={1}>
                supplier
              </Typography>
            </Box>

            {/* Quotes Card */}
            <Box
              height={"95px"}
              width={"200px"}
              sx={{
                backgroundColor: "#4fc3f7",
                color: "white",
                borderRadius: "6px",
              }}
              pt={2}
              pl={2}
            >
              <Typography variant="body2">Send quotes with</Typography>
              <Typography variant="body2">supplier</Typography>
              <Typography variant="body2" mb={1}>
                preferences
              </Typography>
            </Box>
          </Box>
        </Stack>

        {/* New Deals and Offers Section */}
        <Box width={"100%"} mt={3}>
          {/* Deals and Offers */}
          <Box backgroundColor={"white"} border={"2px solid #e0e0e0"} width={"100%"}  borderRadius={"6px"} mb={2}
             sx={{
              display: "flex",
              alignItems: "center",
             }}
          >
             <Stack width={"25%"}>
             <Stack ml={2.4} mt={-6}>
               <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Deals and offers
                </Typography>
                <Typography sx={{ color: "rgba(139, 150, 165, 1)", mb: 1 , position: "relative", top: -8, fontSize: "14px"}}>
                  Hygiene equipments
                </Typography>

            <Box display={"flex"} gap={1} mb={2} >
              {["04", "13", "34", "56"].map((time, index) => (
                <Stack  direction={"column"} justifyContent={"center"} alignItems={"center"}
                  key={index}
                  sx={{
                    backgroundColor: "rgba(96, 96, 96, 1)",
                    color: "white",
                    px: 1,
                    py: 0.5,
                    borderRadius: "4px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    width:"45px",
                    height: "50px",
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
             <Stack direction={"row"} width={"75%"} >
               {dealsData.map((item, index) => (
                  <Box textAlign={"center"} gap={2} borderLeft={"2px solid #e0e0e0"} width={"25%"} pt={2} pb={2} >
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.name}
                      sx={{
                        width: 120,
                        height: 120,
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
          </Box>

          {/* Home and Outdoor Section */}
          <Box backgroundColor={"white"} width={"100%"} border={"2px solid #e0e0e0"} borderRadius={"6px"}  mb={2}
             display={"flex"} 
          >
                  <Box
                    sx={{
                      position: "relative",
                      width: "25%",
                      height: "265px",
                      overflow: "hidden",
                    }}
                  >
                    {/* Background Image Layer (flipped) */}
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url(${Home3_main})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        transform: "scaleX(-1)", // only this flips
                      }}
                    />
                  
                    {/* Content Layer (normal text) */}
                    <Box sx={{ position: "relative", p: 2 }} mb={2}>
                      <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "20px", lineHeight: "26px" }} mb={2}>
                        Home and <br /> outdoor
                      </Typography>
                      <Button   size="large" sx={{ textTransform: "none",backgroundColor: "white", color:"black", fontSize: "12px", 
                        pt: 0.7,
                        pb: 0.7,
                        pl: 2,
                        pr: 2,

                         }}>
                        Source now
                      </Button>
                    </Box>
                  </Box>

                 <Stack width={"75%"}>
                  <Stack direction={"row"} width={"100%"} >
                    {homeOutdoorData.map((item, index) => (
          index<4 &&
                  <Box width={"25%"} borderLeft={"2px solid #e0e0e0"}  borderBottom={"2px solid #e0e0e0"}>
                     <Box >
                        <Typography variant="body1" sx={{ fontSize: "14px", fontWeight: 400, mb: 0.5 , mt: 1.5 ,ml: 2 }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: "12px", fontWeight: 400, color: "text.secondary", ml :2 }}>
                      From <br /> USD {item.price}
                    </Typography>
                     </Box>
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.name}
                      sx={{
                        width: 60,
                        height: 60,
                        display: "block",
                        objectFit: "cover",
                        borderRadius: "4px",
                        position: "relative",
                        right: -160,
                        top: -20,
                        p: 0
                      }}
                    />
                
                  </Box>
              ))}
                  </Stack>
                                   <Stack direction={"row"} width={"100%"} >
                    {homeOutdoorData.map((item, index) => (
          index>=4 && 
                  <Box width={"25%"} borderLeft={"2px solid #e0e0e0"}  >
                     <Box >
                        <Typography variant="body1" sx={{ fontSize: "14px", fontWeight: 400, mb: 0.5 , mt: 1.5 ,ml: 2 }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: "12px", fontWeight: 400, color: "text.secondary", ml :2 }}>
                      From <br /> USD {item.price}
                    </Typography>
                     </Box>
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.name}
                      sx={{
                        width: 60,
                        height: 60,
                        objectFit: "cover",
                        display: "block",
                        borderRadius: "4px",
                        position: "relative",
                        right: -160,
                        top: -20,
                      }}
                    />
                
                  </Box>
              ))}
                  </Stack>
                 </Stack>
          </Box>
          {/* Home and Outdoor Section */}
          <Box backgroundColor={"white"} width={"100%"} border={"2px solid #e0e0e0"} borderRadius={"6px"}  mb={2}
             display={"flex"} 
          >
                  <Box
                    sx={{
                      position: "relative",
                      width: "25%",
                      height: "265px",
                      overflow: "hidden",
                    }}
                  >
                    {/* Background Image Layer (flipped) */}
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url(${Home4_main})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        transform: "scaleX(-1)", // only this flips
                      }}
                    />
                  
                    {/* Content Layer (normal text) */}
                    <Box sx={{ position: "relative", p: 2 }} mb={2}>
                      <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "20px", lineHeight: "26px" }} mb={2}>
                                         Consumer <br /> electronics and <br /> gadgets
                      </Typography>
                      <Button   size="large" sx={{ textTransform: "none",backgroundColor: "white", color:"black", fontSize: "12px", 
                        pt: 0.7,
                        pb: 0.7,
                        pl: 2,
                        pr: 2,

                         }}>
                        Source now
                      </Button>
                    </Box>
                  </Box>

                 <Stack width={"75%"}>
                  <Stack direction={"row"} width={"100%"} >
                    {electronicsData.map((item, index) => (
          index<4 &&
                  <Box width={"25%"} borderLeft={"2px solid #e0e0e0"}  borderBottom={"2px solid #e0e0e0"}>
                     <Box >
                        <Typography variant="body1" sx={{ fontSize: "14px", fontWeight: 400, mb: 0.5 , mt: 1.5 ,ml: 2 }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: "12px", fontWeight: 400, color: "text.secondary", ml :2 }}>
                      From <br /> USD {item.price}
                    </Typography>
                     </Box>
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.name}
                      sx={{
                        width: 60,
                        height: 60,
                        display: "block",
                        objectFit: "contain",
                        borderRadius: "4px",
                        position: "relative",
                        right: -160,
                        top: -20,
                        p: 0
                      }}
                    />
                
                  </Box>
              ))}
                  </Stack>
                                   <Stack direction={"row"} width={"100%"} >
                    {electronicsData.map((item, index) => (
          index>=4 && 
                  <Box width={"25%"} borderLeft={"2px solid #e0e0e0"}  >
                     <Box >
                        <Typography variant="body1" sx={{ fontSize: "14px", fontWeight: 400, mb: 0.5 , mt: 1.5 ,ml: 2 }}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: "12px", fontWeight: 400, color: "text.secondary", ml :2 }}>
                      From <br /> USD {item.price}
                    </Typography>
                     </Box>
                    <Box
                      component="img"
                      src={item.image}
                      alt={item.name}
                      sx={{
                        width: 60,
                        height: 60,
                        objectFit: "contain",
                        display: "block",
                        borderRadius: "4px",
                        position: "relative",
                        right: -160,
                        top: -20,
                      }}
                    />
                
                  </Box>
              ))}
                  </Stack>
                 </Stack>
          </Box>


             <Quotes />
             <Recommended />
             <Services />
             <Suppliers />


        </Box>
      </Box>
    </Box>
  )
}

export default Home
