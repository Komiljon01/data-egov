// Components
import { Box } from "@mui/material";
import { Footer, Navbar } from "../components";

// rrd imports
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Box component="main" className="container" pt="30px">
        <Outlet />
      </Box>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default MainLayout;
