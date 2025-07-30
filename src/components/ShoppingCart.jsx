import {
  Box,
  Stack,
  Typography,
  Button,
  Card,
  Select,
  MenuItem,
  FormControl,
  Divider,
  Link,
  Grid,
  Paper,
} from "@mui/material"
import { ArrowBack, Security, Support, LocalShipping } from "@mui/icons-material"

import img1 from "../assets/Home/recommended/1.png"
import img2 from "../assets/Home/interior/1.jpg"

const cartItems = [
  {
    id: 1,
    image: "/placeholder.svg?height=80&width=80",
    title: "T-shirts with multiple colors, for men and lady",
    size: "medium",
    color: "blue",
    material: "Plastic",
    seller: "Ariel Market",
    price: 78.99,
    quantity: 9,
  },
  {
    id: 2,
    image: "/placeholder.svg?height=80&width=80",
    title: "T-shirts with multiple colors, for men and lady",
    size: "medium",
    color: "blue",
    material: "Plastic",
    seller: "Best factory LLC",
    price: 39.0,
    quantity: 3,
  },
  {
    id: 3,
    image: "/placeholder.svg?height=80&width=80",
    title: "T-shirts with multiple colors, for men and lady",
    size: "medium",
    color: "blue",
    material: "Plastic",
    seller: "Ariel Market",
    price: 170.3,
    quantity: 1,
  },
]

export default function ShoppingCart() {
  const subtotal = 1403.97
  const discount = 60.0
  const tax = 14.0
  const total = 1357.97

  return (
    <Box>
      <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
        My cart (3)
      </Typography>
      <Stack direction={"row"}>
        {/* Cart Items Section */}
           <Stack bgcolor={"white"} width={"70%"} p={3} sx={{  border:"1px solid rgba(222, 226, 231, 1)",
          borderRadius: "6px"}}>
                        <Stack spacing={2} bgcolor={"white"} width={"100%"}>
            {cartItems.map((item) => (
              <Card key={item.id} sx={{ p: 2,             "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    } }}>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Box
                    component="img"
                    src={img1}
                    alt={item.title}
                    sx={{
                      width: 120,
                      height: 130,
                      objectFit: "cover",
                      borderRadius: 1,
                      bgcolor: "#f0f0f0",
                      p:2
                    }}
                  />

                  <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 1 }}>
                      {item.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      Size: {item.size}, Color: {item.color}, Material: {item.material}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                      Seller: {item.seller}
                    </Typography>

                    <Stack direction="row" spacing={2} alignItems="center">
                      <Link href="#" color="error" underline="hover" variant="body2">
                        Remove
                      </Link>
                      <Link href="#" color="primary" underline="hover" variant="body2">
                        Save for later
                      </Link>
                    </Stack>
                  </Box>

                  <Box sx={{ textAlign: "right" }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                      ${item.price.toFixed(2)}
                    </Typography>

                    <FormControl size="small" sx={{ minWidth: 80 }}>
                      <Select value={item.quantity} displayEmpty>
                        <MenuItem value={item.quantity}>Qty: {item.quantity}</MenuItem>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <MenuItem key={num} value={num}>
                            Qty: {num}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
          
      {/* Bottom Actions */}
      <Box sx={{ mt: 4, mb: 3 }}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Button startIcon={<ArrowBack />} variant="outlined" sx={{ textTransform: "none" }}>
            Back to shop
          </Button>

          <Link href="#" color="primary" underline="hover">
            Remove all
          </Link>
        </Stack>
      </Box>
           </Stack>

        {/* Order Summary Section */}
           <Stack width={"28%"} height={"50%"} ml={3} sx={{             "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    }}}>
             <Card sx={{ p: 3, top: 20 }}>
            <Stack spacing={2}>
              <Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  Have a coupon?
                </Typography>
                <Stack direction="row" spacing={1}>
                  <Box
                    component="input"
                    placeholder="Add coupon"
                    sx={{
                      flex: 1,
                      p: 1,
                      border: "1px solid #ddd",
                      borderRadius: 1,
                      fontSize: "14px",
                    }}
                  />
                  <Button variant="text" size="small">
                    Apply
                  </Button>
                </Stack>
              </Box>

              <Divider />

              <Stack spacing={1}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="body2">Subtotal:</Typography>
                  <Typography variant="body2">${subtotal.toFixed(2)}</Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="body2">Discount:</Typography>
                  <Typography variant="body2" color="success.main">
                    -${discount.toFixed(2)}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="body2">Tax:</Typography>
                  <Typography variant="body2" color="success.main">
                    +${tax.toFixed(2)}
                  </Typography>
                </Box>
              </Stack>

              <Divider />

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Total:
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  ${total.toFixed(2)}
                </Typography>
              </Box>

              <Button
                variant="contained"
                size="large"
                sx={{
                  bgcolor: "rgba(0, 181, 23, 1)",
                  "&:hover": { bgcolor: "rgba(0, 181, 23, 1)" },
                  py: 1,
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Checkout
              </Button>

              <Stack direction="row" spacing={1} justifyContent="center" sx={{ mt: 2 }}>
                <Box component="img" src="/placeholder.svg?height=24&width=40" alt="Visa" sx={{ height: 24 }} />
                <Box component="img" src="/placeholder.svg?height=24&width=40" alt="Mastercard" sx={{ height: 24 }} />
                <Box component="img" src="/placeholder.svg?height=24&width=40" alt="PayPal" sx={{ height: 24 }} />
                <Box component="img" src="/placeholder.svg?height=24&width=40" alt="Apple Pay" sx={{ height: 24 }} />
              </Stack>
            </Stack>
          </Card>
           </Stack>
       </Stack>


      {/* Feature Cards */}
      <Grid container spacing={2} sx={{ mt: 4,mb:2 }} gap={18}>
        <Grid item xs={12} md={4}> 
          <Paper sx={{ p: 2, textAlign: "center",
             "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    } }}>
            <Security sx={{ fontSize: 40, color: "text.secondary", mb: 1 }} />
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Secure payment
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Have you ever finally just
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, textAlign: "center",
             "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    } }}>
            <Support sx={{ fontSize: 40, color: "text.secondary", mb: 1 }} />
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Customer support
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Have you ever finally just
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 2, textAlign: "center",
             "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    } }}>
            <LocalShipping sx={{ fontSize: 40, color: "text.secondary", mb: 1 }} />
            <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
              Free delivery
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Have you ever finally just
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}
 