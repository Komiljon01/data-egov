import {
  Box,
  Button,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import "./Home.css";
import { VscSettings } from "react-icons/vsc";
import { ChangeEvent, useRef } from "react";
import {
  heroCards,
  heroStatistics,
  HomeFreqDownloadStats,
  HomeNewsData,
  HomePopularDatasets,
  HomeRequestData,
  HomeScopOfApplications,
  HomeTopDatasets,
} from "../../constants";
import {
  HeroCard,
  HeroDatasetCard,
  HomeDatasetStat,
  HomeRequest,
  HomeSliderCard,
} from "../../components";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CustomInput = styled(TextField)({
  ".MuiInputBase-root": {
    input: {
      padding: "13.5px 16px",
      fontSize: "14px",
      transition: "color 0.2s, backgroundColor 0.2s, borderColor 0.2s",
      backgroundColor: "#fefefe",
      borderRadius: "10px 0 0 10px",
      border: "1px solid rgba(48, 111, 221, .2)",

      "&::placeholder": {
        fontSize: "14px",
        lineHeight: "24px",
        color: "#222",
        fontWeight: "normal",
        fontFamily: `"Fira Sans", sans-serif`,
      },
    },

    ":hover": {
      border: "none",
    },

    "&:focus-within fieldset": {
      border: "1px solid rgba(48, 111, 221, .2)",
    },

    fieldset: {
      border: "1px solid rgba(48, 111, 221, .2)",
      borderRadius: "10px 0 0 10px",
    },
  },
  ".MuiFormHelperText-root": {
    marginLeft: "0",
    marginTop: "8px",
    color: "hls(0 84.2% 60.2%)",
    fontSize: "13px",
    lineHeight: "19px",
    fontWeight: "400",
  },
  "& .MuiInputBase-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(48, 111, 221, .2)",
  },
});

function Home() {
  const search = useRef<HTMLInputElement>(null);

  const onSearch = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (search.current) {
      console.log(search.current.value);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <Box component="section" className="hero">
        <div className="container">
          <Typography component="h3" className="hero-intro">
            Open Data Portal of the Republic of Uzbekistan
          </Typography>

          <Box component="form" className="hero-form" onSubmit={onSearch}>
            <CustomInput
              type="text"
              placeholder="Search in Open Data..."
              required
              fullWidth
              inputRef={search}
            />
            <Box component="span" className="hero-form-filter">
              <VscSettings />
            </Box>
            <Button variant="contained" disableElevation type="submit">
              Find
            </Button>
          </Box>

          <Stack
            component="div"
            className="hero-stats"
            direction="row"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
          >
            {heroStatistics.map((item) => {
              const { id, color, statNum, text } = item;

              return (
                <Stack
                  direction="row"
                  gap="5px"
                  key={id}
                  className="hero-stats-item"
                >
                  <Typography component="span" color="#222222cc">
                    {text}
                  </Typography>
                  <Typography component="span" color="#222222cc">
                    -
                  </Typography>
                  <Typography
                    component="span"
                    color={`${color === "red" ? "#b31d53" : "#3369c7"}`}
                  >
                    {statNum}
                  </Typography>
                </Stack>
              );
            })}
          </Stack>

          <Box component="div" className="hero-cards">
            {heroCards.map((card) => (
              <HeroCard key={card.id} card={card} />
            ))}
          </Box>
        </div>
      </Box>

      <Box component="section" className="home-dataset">
        <Box component="div" className="home-top-dataset">
          <Typography variant="h3" className="home-dataset-title">
            Top data sets
          </Typography>

          {HomeTopDatasets.map((dataset) => (
            <HeroDatasetCard key={dataset.id} dataset={dataset} />
          ))}
        </Box>
        <Box component="div" className="home-popular-dataset">
          <Typography variant="h3" className="home-dataset-title">
            Popular data sets
          </Typography>

          {HomePopularDatasets.map((dataset) => (
            <HeroDatasetCard key={dataset.id} dataset={dataset} />
          ))}
        </Box>
      </Box>

      <Box component="section" className="home-news">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap="10px"
          className="hero-news-intro"
        >
          <Typography>Portal news</Typography>
          <Link to="/news">All news</Link>
        </Stack>
        <Box component="div" className="news-slider slider-container">
          <Slider {...settings}>
            {HomeNewsData.map((news) => (
              <HomeSliderCard key={news.id} news={news} />
            ))}
          </Slider>
        </Box>
      </Box>

      <Box component="section" className="home-dataset">
        <Box component="div">
          <Typography variant="h3" className="home-dataset-title">
            Frequently downloaded datasets
          </Typography>

          <Box component="div" className="home-dataset-wrapper">
            {HomeFreqDownloadStats.map((data) => (
              <HomeDatasetStat key={data.id} data={data} />
            ))}

            <Typography variant="subtitle1" className="home-dataset-readmore">
              More details...
            </Typography>
          </Box>
        </Box>
        <Box component="div">
          <Typography variant="h3" className="home-dataset-title">
            Scope of application
          </Typography>

          <Box component="div" className="home-dataset-wrapper">
            {HomeScopOfApplications.map((data) => (
              <HomeDatasetStat key={data.id} data={data} />
            ))}
          </Box>
        </Box>
      </Box>

      <Box component="section" className="home-request">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          gap="10px"
          className="home-request-intro"
        >
          <Typography>Popular requests</Typography>
          <Link to="/offers">All requests</Link>
        </Stack>

        <Box component="div" className="popular-requests-wrapper">
          <Box component="table">
            <Box component="tbody" className="popular-requests-body">
              {HomeRequestData.map((request) => (
                <HomeRequest key={request.id} request={request} />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Home;
