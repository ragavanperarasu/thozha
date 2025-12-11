import React from 'react'
import Navbar from './components/Navbar';

import { Box, Typography } from '@mui/material';

import smartphonepic from '../assets/smartphonedeals.webp';
import homepro from '../assets/home.webp';

// Category Icons
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import KitchenIcon from "@mui/icons-material/Kitchen";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";

const Home = () => {
  return (
    <>
      <Navbar />

            <Box sx={{ display: "flex", justifyContent: "center" , mt: 10, bgcolor: "#AC74EC", py: 1 }}>
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
      </Box>

      {/* Category Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          bgcolor: "white",
          py: 2,
         
          
 
          position: "sticky",
          top: 80,
          zIndex: 10,
        }}
      >
        {/* Smartphone */}
        <Box sx={{ textAlign: "center", display: "flex", flexDirection: "row", alignItems: "center", gap: 1 }}>
          <img src={smartphonepic} alt="Smartphones" style={{ width: 50, height: 50, color: "#7c13f4" }} />
          <Typography sx={{ fontFamily: "Comfortaa, sans-serif", fontSize: 14, color: "#7c13f4" }}>
            Smart phones
          </Typography>
        </Box>

        {/* Mobile Accessories */}
        <Box sx={{ textAlign: "center", display: "flex", flexDirection: "row", alignItems: "center", gap: 1 }}>
          <HeadphonesIcon sx={{ fontSize: 40, color: "#7c13f4" }} />
          <Typography sx={{ fontFamily: "Comfortaa, sans-serif", fontSize: 14, color: "#7c13f4" }}>
            Accessories
          </Typography>
        </Box>

        {/* Home Appliances */}
        <Box sx={{ textAlign: "center", display: "flex", flexDirection: "row", alignItems: "center", gap: 1 }}>
          <img src={homepro} alt="Home Appliances" style={{ width: 50, height: 50, color: "#7c13f4" }} />
          <Typography sx={{ fontFamily: "Comfortaa, sans-serif", fontSize: 14, color: "#7c13f4" }}>
            Home Appliances
          </Typography>
        </Box>

        {/* Laptop */}
        <Box sx={{ textAlign: "center", display: "flex", flexDirection: "row", alignItems: "center", gap: 1 }}>
          <LaptopMacIcon sx={{ fontSize: 40, color: "#7c13f4" }} />
          <Typography sx={{ fontFamily: "Comfortaa, sans-serif", fontSize: 14, color: "#7c13f4" }}>
            Laptops
          </Typography>
        </Box>
      </Box>

<Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam possimus eius ea, perspiciatis, saepe adipisci sint iste perferendis modi laboriosam minus? Quasi alias maiores labore voluptatem dolores voluptate modi sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam perspiciatis esse nemo et aut eligendi dolorem a reprehenderit sapiente nobis distinctio, voluptatibus voluptatem illum minima quo, doloremque corrupti!
Earum maiores in soluta corrupti architecto temporibus labore accusantium consequuntur nam sit odio, nulla expedita ipsum dolore assumenda id, atque voluptas incidunt qui. Illo aut vero exercitationem. Similique, beatae officiis.
Repellat, ut vitae quidem asperiores veritatis sit a qui exercitationem rem officiis expedita dolorum dolores eaque omnis, laborum placeat dolore ad cumque. Tempore soluta dolorum aperiam. Tenetur accusamus nesciunt similique!
Beataeluptates ducimus adipisci, distinctio in, odit, placeat reprehenderit tempora aspernatur?
At veniam soluta dolore placeat rem numquam nam eveniet voluptatibus deserunt velit delectus, dignissimos expedita incidunt ocilis perferendis cum eligendi id hic tempore. Officia.
Ea accusantium molestias qui asperiores animi quod dolorum suscipit unde cumque officiis deleniti omnis, fuga tempora numquam illum laboriosam harum odio a error porro! Culpa ut delectus omnis debitis sunt!
Beatae cumque odio aperiam suscipit minima, possimus ea illo distinctio eius minus animi dolore, impedit enim mollitia temporibus tenetur id dolorem id magnam ex. Nisi at quaerat a deleniti, sunt animi!
Excepturi corrupti cs fugit auptatum sit quidem eum, sunt nihil fugiat dolor neque architecto labore optio eius molestias voluptate culpa. Eveniet similique dolor aspernatur nulla iste reprehenderit.
Dicta eveniet distinctio similique tempora hic consectetur. Corporis, dolorum? Voluptate amet, consectetur itaque atque quibusdam eligendi incidunt tenetur voluptatibus deserunt doloribus ducimus dolore. Commodi, ipsam et dolores veniam aut reiciendis.
Ipsa tempora autem animi minus cum quos debitis fuga adipisci ipsum, vero hic esse quae, dolorum harum placeat maxime architecto, officiis obcaecati doloremque quis praesentium commodi? Impedit veniam ipsum iure!
Saepe, tempora! Aliquid dolore repudiandae possimus in voluptatibus numquam aperiam officia ipsa nihil? Earum placeat voluptate nesciunt error, sed blanditiis doloremque consequatur ipsa explicabo eum omnis! At sed quae vero?
Inventore unde, hic maiores autem voluptatem ratione delectus consequatur ipsum provident tempora iusto officia asperiores iste nam, non ea esse quam incidunt aperiam ipsam modi amet! Assumenda, perspiciatis. Dicta, porro?
Voluptatem quo possimus est doloribus. Inventore, pariatur, illo repudiandae voluptatum iste maxime temporibus magni suscipit nam est at aliquam voluptate quisquam dolores consectetur numquam neque fuga cupiditate. Eius, totam animi!
Autem dolorum sint cupiditate id recusandae soluta, cumque sequi praesentium molestias, magnam dolores eum porro? Voluptas accusamus explicabo eum doloribus alias molestiae voluptatibus laborum, natus suscipit et voluptate commodi ex!
Iure vel dolorum et nihil reprehenderit veritatis temporibus reiciendis accusantium eaque minima possimus itaque sed quisquam, quibusdam quas? Dolorem nisi est illum libero consequatur harum architecto tenetur doloremque possimus perferendis.
Officiis explicabo tenetur eum. Dolore ipsam nulla similique et dolorum, deleniti, eveniet voluptatem tempore cum libero quam q repudiandae non cumque voluptatem ullam, voluptatibus similique unde distinctio perferendis. Officiis tenetur magnam possimus dolor corrupti suscipit, quibusdam impedit. Hic, a.
Dolor excepturi nisi dolorum laborum sed! Perspiciatis rem ipsum est doloremque aliquam voluptates qui quidem enim non iure corporis perferendis ex accusamus impedit, labore distinctio quod. Vel ratione asperiores aliquid!
Quasi aperiam, amet dolorem fugiat nulla illo expedita porro est dicta cupiditate, necessitatibus hic. Vel inventore eligendi deserunt soluta hic, cupiditate suscipit commodi. Unde quasi blanditiis maiores impedit harum totam!</Typography>
    </>
  )
}

export default Home