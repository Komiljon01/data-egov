import { Box, Button, Dialog, Drawer, List, Slide, Stack } from "@mui/material";
import "./Navbar.css";
import { Link } from "react-router-dom";
import NavbarLists from "../NavbarLists/NavbarLists";
import { FaCaretDown, FaSortDown, FaXmark } from "react-icons/fa6";
import React, { useState } from "react";
import { TransitionProps } from "@mui/material/transitions";
import OneIDImg from "../../assets/oneid.svg";
import { FaUserAlt } from "react-icons/fa";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

function Navbar() {
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");

  const [openMenu, setOpenMenu] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenMenu(newOpen);
  };

  const languages = ["O'zbekcha", "Ўзбекча", "Русский", "English"];

  const handleChangeLanguage = (value: string) => {
    setSelectedLanguage(value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box component="nav" className="navbar" bgcolor="#3369c7" p="0 16px">
      <Box component="div" className="container-1360">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          height="80px"
        >
          {/* Navbar start */}
          <Box component="div">
            <Link to="/" className="navbar-logo">
              <svg
                width="54"
                height="48"
                viewBox="0 0 54 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-v-4e3b8d2c=""
              >
                <path
                  d="M8.1203 4.17391C8.1203 6.47911 6.3025 8.34783 4.06015 8.34783C1.8178 8.34783 0 6.47911 0 4.17391C0 1.86872 1.8178 0 4.06015 0C6.3025 0 8.1203 1.86872 8.1203 4.17391Z"
                  fill="white"
                  data-v-4e3b8d2c=""
                ></path>{" "}
                <path
                  d="M16.8496 24C16.8496 26.3052 15.0318 28.1739 12.7895 28.1739C10.5471 28.1739 8.72932 26.3052 8.72932 24C8.72932 21.6948 10.5471 19.8261 12.7895 19.8261C15.0318 19.8261 16.8496 21.6948 16.8496 24Z"
                  fill="white"
                  data-v-4e3b8d2c=""
                ></path>{" "}
                <path
                  d="M4.06015 48C6.3025 48 8.1203 46.1313 8.1203 43.8261C8.1203 41.5209 6.3025 39.6522 4.06015 39.6522C1.8178 39.6522 0 41.5209 0 43.8261C0 46.1313 1.8178 48 4.06015 48Z"
                  fill="white"
                  data-v-4e3b8d2c=""
                ></path>{" "}
                <path
                  d="M26.594 5.0087C26.594 7.77492 24.4126 10.0174 21.7218 10.0174C19.031 10.0174 16.8496 7.77492 16.8496 5.0087C16.8496 2.24247 19.031 0 21.7218 0C24.4126 0 26.594 2.24247 26.594 5.0087Z"
                  fill="white"
                  data-v-4e3b8d2c=""
                ></path>{" "}
                <path
                  d="M30.6541 29.0087C33.345 29.0087 35.5263 26.7662 35.5263 24C35.5263 21.2338 33.345 18.9913 30.6541 18.9913C27.9633 18.9913 25.782 21.2338 25.782 24C25.782 26.7662 27.9633 29.0087 30.6541 29.0087Z"
                  fill="white"
                  data-v-4e3b8d2c=""
                ></path>{" "}
                <path
                  d="M26.594 42.9913C26.594 45.7575 24.4126 48 21.7218 48C19.031 48 16.8496 45.7575 16.8496 42.9913C16.8496 40.2251 19.031 37.9826 21.7218 37.9826C24.4126 37.9826 26.594 40.2251 26.594 42.9913Z"
                  fill="white"
                  data-v-4e3b8d2c=""
                ></path>{" "}
                <path
                  d="M39.485 11.4783C42.5682 11.4783 45.0677 8.90876 45.0677 5.73913C45.0677 2.5695 42.5682 0 39.485 0C36.4017 0 33.9023 2.5695 33.9023 5.73913C33.9023 8.90876 36.4017 11.4783 39.485 11.4783Z"
                  fill="white"
                  data-v-4e3b8d2c=""
                ></path>{" "}
                <path
                  d="M54 23.8957C54 27.0653 51.5005 29.6348 48.4173 29.6348C45.3341 29.6348 42.8346 27.0653 42.8346 23.8957C42.8346 20.726 45.3341 18.1565 48.4173 18.1565C51.5005 18.1565 54 20.726 54 23.8957Z"
                  fill="white"
                  data-v-4e3b8d2c=""
                ></path>{" "}
                <path
                  d="M39.485 48C42.5682 48 45.0677 45.4305 45.0677 42.2609C45.0677 39.0912 42.5682 36.5217 39.485 36.5217C36.4017 36.5217 33.9023 39.0912 33.9023 42.2609C33.9023 45.4305 36.4017 48 39.485 48Z"
                  fill="white"
                  data-v-4e3b8d2c=""
                ></path>
              </svg>

              <Box component="span">Open data portal</Box>

              <Box
                content="span"
                onClick={toggleDrawer(true)}
                className="navbar-menu"
              >
                <FaSortDown />
              </Box>
              <Drawer
                open={openMenu}
                onClose={toggleDrawer(false)}
                className="navbar-menu-content"
              >
                <FaXmark
                  className="navbar-menu-close"
                  onClick={() => setOpenMenu(false)}
                />
                <NavbarLists />
              </Drawer>
            </Link>
          </Box>

          {/* Navbar center */}
          <List className="navbar-lists" disablePadding>
            <NavbarLists />
          </List>

          {/* Navbar end */}
          <Stack
            component="div"
            className="navbar-end"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box component="span" className="navbar-changer">
              <svg
                width="20"
                height="14"
                viewBox="0 0 20 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                data-v-1f35a6a5=""
              >
                <path
                  d="M5.909 0.5H7.249C7.43902 0.500058 7.62194 0.572244 7.76079 0.701972C7.89964 0.831701 7.98407 1.0093 7.99703 1.19888C8.00998 1.38846 7.95048 1.57589 7.83057 1.7233C7.71065 1.87071 7.53925 1.9671 7.351 1.993L7.25 2H5.9095C5.73548 1.99993 5.56685 2.06039 5.4325 2.171L5.3575 2.2425L3.2835 4.499L6.7495 4.4995C7.30372 4.49952 7.83843 4.70408 8.25114 5.07398C8.66386 5.44388 8.92553 5.95309 8.986 6.504H11.0135C11.074 5.953 11.3357 5.44373 11.7485 5.07381C12.1614 4.7039 12.6962 4.49939 13.2505 4.4995L16.7275 4.499L14.6445 2.2415C14.5268 2.11383 14.3685 2.03095 14.1965 2.007L14.0925 2H12.7465C12.5565 1.99982 12.3737 1.92754 12.2349 1.79777C12.0962 1.668 12.0118 1.49041 11.999 1.30087C11.9861 1.11133 12.0456 0.923957 12.1655 0.776604C12.2854 0.62925 12.4568 0.532895 12.645 0.507L12.747 0.5H14.0925C14.6557 0.500008 15.1985 0.711252 15.6135 1.092L15.746 1.224L19.388 5.1715C19.438 5.226 19.479 5.286 19.51 5.349C19.816 5.7335 19.999 6.22 19.999 6.7495V10.246C19.999 11.108 19.6566 11.9346 19.0471 12.5441C18.4376 13.1536 17.611 13.496 16.749 13.496H14.25C13.388 13.496 12.5614 13.1536 11.9519 12.5441C11.3424 11.9346 11 11.108 11 10.246L10.999 8.004H8.998L8.999 10.246C8.999 11.108 8.65659 11.9346 8.0471 12.5441C7.4376 13.1536 6.61095 13.496 5.749 13.496H3.25C2.38805 13.496 1.5614 13.1536 0.951903 12.5441C0.34241 11.9346 0 11.108 0 10.246V6.75C0 6.1885 0.206 5.675 0.546 5.2805L0.584 5.2255L0.6275 5.173L4.252 1.228C4.63398 0.812179 5.15834 0.555176 5.721 0.508L5.909 0.5005H7.249H5.909V0.5ZM6.749 6H2.25C2.05109 6 1.86032 6.07902 1.71967 6.21967C1.57902 6.36032 1.5 6.55109 1.5 6.75V10.246C1.5 10.4758 1.54527 10.7034 1.63321 10.9157C1.72116 11.128 1.85006 11.3209 2.01256 11.4834C2.17507 11.6459 2.36798 11.7748 2.5803 11.8628C2.79262 11.9507 3.02019 11.996 3.25 11.996H5.749C6.21313 11.996 6.65825 11.8116 6.98644 11.4834C7.31463 11.1552 7.499 10.7101 7.499 10.246V6.75C7.499 6.55109 7.41998 6.36032 7.27933 6.21967C7.13868 6.07902 6.94791 6 6.749 6ZM17.749 6H13.25C13.0511 6 12.8603 6.07902 12.7197 6.21967C12.579 6.36032 12.5 6.55109 12.5 6.75V10.246C12.5 10.4758 12.5453 10.7034 12.6332 10.9157C12.7212 11.128 12.8501 11.3209 13.0126 11.4834C13.1751 11.6459 13.368 11.7748 13.5803 11.8628C13.7926 11.9507 14.0202 11.996 14.25 11.996H16.749C17.2131 11.996 17.6582 11.8116 17.9864 11.4834C18.3146 11.1552 18.499 10.7101 18.499 10.246V6.75C18.499 6.55109 18.42 6.36032 18.2793 6.21967C18.1387 6.07902 17.9479 6 17.749 6Z"
                  fill="white"
                  data-v-1f35a6a5=""
                ></path>
              </svg>
            </Box>

            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box component="div" className="navbar-dropdown">
                <button className="navbar-dropdown-btn">
                  {selectedLanguage}{" "}
                  <FaCaretDown className="navbar-dropdown-icon" />
                </button>

                <Box className="navbar-dropdown-content">
                  {languages
                    .filter((lang) => lang !== selectedLanguage)
                    .slice(0, 3)
                    .map((item, idx) => (
                      <p
                        key={idx}
                        className={`${
                          selectedLanguage === item ? "hidden" : ""
                        }`}
                        onClick={() => handleChangeLanguage(item)}
                      >
                        {item}
                      </p>
                    ))}
                </Box>
              </Box>

              <Button
                onClick={handleClickOpen}
                disableElevation
                disableFocusRipple
                sx={{
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: "400",
                  margin: "0 50px",
                  gap: "2px",
                  textTransform: "capitalize",
                }}
                className="navbar-login"
              >
                <FaUserAlt fontSize="20px" />
                Log in
              </Button>
              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                className="navbar-login-modal"
              >
                <FaXmark onClick={handleClose} className="dialog-close-btn" />
                <h3>Log in to your personal account</h3>
                <p>To log in, log in with One ID.</p>
                <Button
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  disableTouchRipple
                  variant="contained"
                  className="navbar-login-model-btn"
                  onClick={handleClose}
                >
                  <span>Log in with</span>
                  <Box component="img" src={OneIDImg} />
                </Button>
              </Dialog>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default Navbar;
