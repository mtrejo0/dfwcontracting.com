import { Stack } from "@mui/material";

const Home = () => {


  const email = "atozdfw@gmail.com"
  const telephone = "972-469-9652"
  
  return (
    <Stack sx={{alignItems: "center"}}>

      <h1>DFW Contracting</h1>
      <p><a href={`mailto:${email}`}>{email}</a></p>
      <p><a href={`tel:${telephone}`}>{telephone}</a></p>
    </Stack>
      
  );
};

export default Home;
