// Components
import { Box } from "@mui/material";
import { Footer, Navbar } from "../components";

// rrd imports
import { Outlet } from "react-router-dom";

// Styles
import "./MainLayout.css";
import { leftSidebarElements, rightSidebarElements } from "../constants";
import SideBarElement from "../components/SidebarElement/SideBarElement";

function MainLayout() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Box component="main" className="container" pt="30px">
        <Outlet />

        <Box className="leftsidebar sidebar">
          {leftSidebarElements.map((sidebarEl) => (
            <SideBarElement sidebarEl={sidebarEl} key={sidebarEl.id} />
          ))}
        </Box>

        <Box className="rightsidebar sidebar">
          {rightSidebarElements.map((sidebarEl) => (
            <SideBarElement sidebarEl={sidebarEl} key={sidebarEl.id} />
          ))}
        </Box>
      </Box>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default MainLayout;
