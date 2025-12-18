import React from "react";
import {
    Box
} from '@mui/material';
import Header from "../../components/Header";
import  About  from "../../components/About";
import Programs from "../../components/programs";
import Benefits from "../../components/Benefits";
import Footer from "../../components/Footer";
function Home(){
    return(
<Box>
     <Header/>
     <About/>
     <Programs/>
     <Benefits/>
     <Footer/>

</Box>
    )
}
export default Home;