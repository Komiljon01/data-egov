import { Box, Stack, Typography } from "@mui/material";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { certificateIMG, egovSVG, vazirlikIMG } from "../../assets";
import { FooterPageLists } from "../../constants";

function Footer() {
  return (
    <Box component="div" className="footer">
      <div className="container">
        <Stack direction="row" className="footer-lists">
          <Box component="ul" className="footer-logo-list">
            <Link to="/" className="footer-logo">
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
            </Link>

            <Typography variant="body1" className="footer-copyrights">
              &copy; 2015-2025 All rights reserved
            </Typography>
            <Stack
              direction="row"
              gap="15px"
              alignItems="center"
              className="footer-messengers"
            >
              <Box
                component="a"
                href="https://www.youtube.com/c/Davlatstatistikaqomitasi"
                target="_blank"
              >
                <FaYoutube />
              </Box>
              <Box
                component="a"
                href="https://www.instagram.com/uzstataxborot/"
                target="_blank"
              >
                <FaInstagram />
              </Box>
              <Box
                component="a"
                href="https://www.facebook.com/uzstataxborot"
                target="_blank"
              >
                <FaFacebookF />
              </Box>
              <Box
                component="a"
                href="https://www.facebook.com/uzstataxborot"
                target="_blank"
              >
                <FaTelegramPlane />
              </Box>
            </Stack>
            <Box
              component="a"
              href="https://certificates.theodi.org/en/datasets/225526/certificate"
              target="_blank"
              className="footer-certificate"
            >
              <Box component="img" src={certificateIMG} />
              <Typography variant="body1">Gold</Typography>
            </Box>
          </Box>

          <Box component="ul" className="footer-messages">
            <Typography variant="h3">Messages</Typography>

            <Box component="div">
              <Typography variant="body1">
                State Committee of the Republic of Uzbekistan on Statistics:
              </Typography>
              <Box component="a" href="tel:+998712028060">
                (+998) 71-202-80-60
              </Box>
            </Box>
            <Box component="div">
              <Typography variant="body1">Tech. support:</Typography>
              <Box component="a" href="tel:+998555013606">
                (+998) 55-501-36-06 (1085)
              </Box>
            </Box>
            <Box component="div">
              <Typography variant="body1">Email:</Typography>
              <Box component="a" href="mailto:opendata@egov.uz">
                opendata@egov.uz
              </Box>
            </Box>
            <Box component="div">
              <Typography variant="body1">Address:</Typography>
              <Typography variant="body2">
                100170, Toshkent sh., Mustаqillik shoh ko‘chаsi, 63
              </Typography>
            </Box>
          </Box>

          <Box component="ul" className="footer-site-navigation">
            <Typography variant="h3">Site navigation</Typography>

            {FooterPageLists.map((link) => {
              const { id, path, text } = link;

              return (
                <Box component="div" key={id}>
                  <Link to={path}>{text}</Link>
                </Box>
              );
            })}
          </Box>

          <Box component="ul" className="footer-useful-links">
            <Typography variant="h3">Useful links</Typography>

            <Box component="a" href="https://egov.uz" target="_blank">
              egov.uz
            </Box>
            <Box component="a" href="https://id.egov.uz" target="_blank">
              id.egov.uz
            </Box>
            <Box component="a" href="https://cs.egov.uz" target="_blank">
              cs.egov.uz
            </Box>
            <Box component="a" href="https://reestr.uz" target="_blank">
              reestr.uz
            </Box>
          </Box>

          <Box component="ul" className="footer-terms">
            <Typography variant="h4">
              When using the site materials in whole or in part, a link to the
              site is required
            </Typography>

            <Stack direction="row" alignItems="center" gap="12px" className="footer-terms-govern">
              <Box component="img" src={egovSVG} alt="e-government image" />
              <Typography variant="body1">
                The site was developed by the E-Government Project Management
                Center
              </Typography>
            </Stack>

            <Box
              component="img"
              src={vazirlikIMG}
              alt="Digital ministry image"
            />
          </Box>
        </Stack>
      </div>
    </Box>
  );
}

export default Footer;

/* 

egov.uz
id.egov.uz
cs.egov.uz
reestr.uz
*/
