import React from "react";
import Navbar from "./components/Navbar";

import homepro from "../assets/homeapplicance.png";
import electronic from "../assets/electronic.webp";
import mobilepic from "../assets/mobile.webp";
import Footer from "./components/Footer";

import m1 from "../assets/m1.jpeg";
import m2 from "../assets/m2.jpeg";
import m3 from "../assets/m3.jpeg";
import m4 from "../assets/m4.png";
import m5 from "../assets/m5.jpeg";

import d1 from "../assets/d1.jpg";
import d2 from "../assets/d2.png";
import d3 from "../assets/d3.png";
import d4 from "../assets/d4.png";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Stack,
} from "@mui/material";

const products = [
  { id: 1, name: "Vivo Smart Phone", price: "₹89,999", img: m1 },
  { id: 2, name: "Moto Smart Phone", price: "₹12,499", img: m2 },
  { id: 3, name: "OnePlus Smart Phone", price: "₹24,999", img: m3 },
  { id: 4, name: "Samsung Smart Phone", price: "₹45,999", img: m4 },
  { id: 5, name: "Redmi Smart Phone", price: "₹13,999", img: m1 },
  { id: 6, name: "Realme Smart Phone", price: "₹18,999", img: m5 },
  // { id: 7, name: "Oppo Smart Phone", price: "₹22,499", img: m1 },
  // { id: 8, name: "Asus Smart Phone", price: "₹28,999", img: m2 },
];

const Home = () => {
  return (
    <>
      <Navbar />

      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: { xs: 8, sm: 10, md: 10 },
          bgcolor: "#AC74EC",
          py: 1,
          width: "100%",
        }}
      >
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            fontFamily: "Comfortaa, sans-serif",
            fontSize: 16,
            pb: 1,
            color: "white",
          }}
        >
          Deliver to Chennai - 600128
        </Typography>
      </Box> */}

      {/* Category Section */}
      <Box
        sx={{
          display: "flex",
          mt: { xs: 8, sm: 10, md: 10 },
          justifyContent: "space-around",
          bgcolor: "white",
          py: 1,
          px: 1,
          // borderBottom: "1px solid #7c13f4",
          backgroundColor:'#f4ebffff',
          position: "sticky",
          top: { xs: 70, sm: 80, md: 80 },
          zIndex: 10,
        }}
      >
        {/* Smartphone */}
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            mr: 1,
          }}
        >
          <Box
            component="img"
            src={mobilepic}
            alt="Smartphones"
            sx={{
              width: { xs: 30, sm: 40, md: 50 },
              height: { xs: 30, sm: 40, md: 50 },
              color: "#7c13f4",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Comfortaa, sans-serif",
              fontSize: { xs: 10, sm: 14, md: 16 },
              color: "#7c13f4",
            }}
          >
            Smart phones
          </Typography>
        </Box>

        {/* Home Appliances */}
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
            mr: 1,
          }}
        >
          <Box
            component="img"
            src={homepro}
            alt="Home Appliances"
            sx={{
              width: { xs: 30, sm: 40, md: 50 },
              height: { xs: 30, sm: 40, md: 50 },
              color: "#7c13f4",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Comfortaa, sans-serif",
              fontSize: { xs: 10, sm: 14, md: 16 },
              color: "#7c13f4",
            }}
          >
            Home Appliances
          </Typography>
        </Box>

        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Box
            component="img"
            src={electronic}
            alt="Electronic"
            sx={{
              width: { xs: 30, sm: 40, md: 50 },
              height: { xs: 30, sm: 40, md: 50 },
              color: "#7c13f4",
            }}
          />
          <Typography
            sx={{
              fontFamily: "Comfortaa, sans-serif",
              fontSize: { xs: 10, sm: 14, md: 16 },
              color: "#7c13f4",
            }}
          >
            Electronic
          </Typography>
        </Box>
      </Box>




 <Box sx={{ px: 2, mt: 3 }}>
        <Typography
          sx={{
            fontFamily: "Comfortaa, sans-serif",
            fontSize: 20,
            fontWeight: "bold",
            mb: 2,
            color: "#7c13f4",
          }}
        >
          Top Products
        </Typography>

        <Grid container spacing={2} justifyContent={"center"}>
          {products.map((item) => (
            <Grid key={item.id} item size={{ xs: 6, md: 4, lg: 2 }}>
              <Card
                sx={{ borderRadius: 3,boxShadow:'none', pt: 3 }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={item.img}
                  alt={item.name}
                  style={{ objectFit: "contain", padding: 10 }}
                />

                <CardContent sx={{ textAlign: "center" }}>
                  <Typography sx={{ fontFamily: "Comfortaa", fontSize: 14 }}>
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Comfortaa",
                      fontSize: 16,
                      fontWeight: "bold",
                      color: "#7c13f4",
                    }}
                  >
                    {item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>


      <Box sx={{ px: 2, mt: 3 }}>
        <Typography
          sx={{
            fontFamily: "Comfortaa, sans-serif",
            fontSize: 20,
            fontWeight: "bold",
            mb: 2,
            color: "#7c13f4",
          }}
        >
          Top Discounts
        </Typography>



        

        <Grid container spacing={2}>
  {/* LEFT BIG IMAGE */}
  <Grid size={{ xs: 12, md: 6, lg: 8 }} >
    <CardMedia
      component="img"
      image={d1}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: 8,
      }}
    />
  </Grid>

  {/* RIGHT 3 SMALL IMAGES */}
  <Grid size={{ xs: 12, md: 6, lg: 4 }}>
    <Stack spacing={2}>
      {[d3, d4].map((img, index) => (
        <CardMedia
          key={index}
          component="img"
          image={img}
          style={{
            width: "100%",
            height: "10",
           
            borderRadius: 8,
          }}
        />
      ))}
    </Stack>
  </Grid>
</Grid>

        {/* <Grid container spacing={2} justifyContent={'center'}>
    <Grid item size={{xs:6, md:4, lg:2}} >
      <Card sx={{ borderRadius: 3, border: "1px solid #7c13f4", pt: 3 }}>
        <CardMedia
          component="img"
          height="150"
          image={products[0].img}
          alt={products[0].name}
          style={{ objectFit: "contain", padding: 10 }}
        />

        <CardContent sx={{ textAlign: "center" }}>
          <Typography sx={{ fontFamily: "Comfortaa", fontSize: 14 }}>
            {products[0].name}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Comfortaa",
              fontSize: 16,
              fontWeight: "bold",
              color: "#7c13f4",
            }}
          >
            {products[0].price}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
</Grid> */}
      </Box>

      <Box sx={{ px: 2, mt: 3 }}>
        <Typography
          sx={{
            fontFamily: "Comfortaa, sans-serif",
            fontSize: 20,
            fontWeight: "bold",
            mb: 2,
            color: "#7c13f4",
          }}
        >
          Top Products
        </Typography>

        <Grid container spacing={2} justifyContent={"center"}>
          {products.map((item) => (
            <Grid key={item.id} item size={{ xs: 6, md: 4, lg: 2 }}>
              <Card
                sx={{ borderRadius: 3, border: "1px solid #7c13f4", pt: 3 }}
              >
                <CardMedia
                  component="img"
                  height="150"
                  image={item.img}
                  alt={item.name}
                  style={{ objectFit: "contain", padding: 10 }}
                />

                <CardContent sx={{ textAlign: "center" }}>
                  <Typography sx={{ fontFamily: "Comfortaa", fontSize: 14 }}>
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Comfortaa",
                      fontSize: 16,
                      fontWeight: "bold",
                      color: "#7c13f4",
                    }}
                  >
                    {item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer/>
    </>
  );
};

export default Home;
