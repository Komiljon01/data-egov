import uuid4 from "uuid4";
import { GoLaw } from "react-icons/go";
import { IoChatbubbleEllipsesOutline, IoSettingsSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa6";
import {
  HeroCardsTypes,
  HeroStatisticsTypes,
  SidebarElementsTypes,
} from "../types";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { RiSurveyFill } from "react-icons/ri";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { BiMessageRoundedEdit } from "react-icons/bi";
import {
  adliyaSVG,
  agricultureSVG,
  boatSVG,
  brmSVG,
  buildSVG,
  caseSVG,
  coinsSVG,
  compSVG,
  cultureSVG,
  economySVG,
  educationSVG,
  heartSVG,
  insuranceSVG,
  lawSVG,
  leafSVG,
  peopleSVG,
  territorySVG,
  tradeSVG,
  transportSVG,
  turismSVG,
} from "../assets";

export const leftSidebarElements: SidebarElementsTypes[] = [
  {
    id: uuid4(),
    path: "/legislation",
    text: "Legislative acts",
    icon: GoLaw,
    type: "link",
  },
  {
    id: uuid4(),
    path: "/glossary",
    text: "Glossary",
    icon: IoChatbubbleEllipsesOutline,
    type: "link",
  },
  {
    id: uuid4(),
    path: "/instructions",
    text: "Instructions",
    icon: IoSettingsSharp,
    type: "link",
  },
  {
    id: uuid4(),
    path: "/copyrights",
    text: "Terms of Use",
    icon: FaLock,
    type: "link",
  },
];

export const rightSidebarElements: SidebarElementsTypes[] = [
  {
    id: uuid4(),
    path: "/faq",
    text: "FAQ",
    icon: LuMessageCircleQuestion,
    type: "link",
  },
  {
    id: uuid4(),
    text: "User Survey",
    icon: RiSurveyFill,
    type: "survey",
  },
  {
    id: uuid4(),
    path: "/requests",
    text: "Dataset Request",
    icon: PiDownloadSimpleBold,
    type: "link",
  },
  {
    id: uuid4(),
    text: "Contact Us",
    icon: BiMessageRoundedEdit,
    type: "form",
  },
];

export const heroStatistics: HeroStatisticsTypes[] = [
  {
    id: uuid4(),
    text: "Datasets",
    statNum: "9720",
    color: "red",
  },
  {
    id: uuid4(),
    text: "Organizations",
    statNum: "156",
    color: "blue",
  },
  {
    id: uuid4(),
    text: "Downloads",
    statNum: "503854",
    color: "red",
  },
  {
    id: uuid4(),
    text: "Web service",
    statNum: "36175",
    color: "blue",
  },
];

export const heroCards: HeroCardsTypes[] = [
  {
    id: uuid4(),
    text: "Territory",
    count: "560",
    icon: territorySVG,
  },
  {
    id: uuid4(),
    text: "Economy",
    count: "2980",
    icon: economySVG,
  },
  {
    id: uuid4(),
    text: "Healthcare",
    count: "691",
    icon: heartSVG,
  },
  {
    id: uuid4(),
    text: "Education",
    count: "757",
    icon: educationSVG,
  },
  {
    id: uuid4(),
    text: "Culture",
    count: "67",
    icon: cultureSVG,
  },
  {
    id: uuid4(),
    text: "Business",
    count: "147",
    icon: caseSVG,
  },
  {
    id: uuid4(),
    text: "Real estate",
    count: "212",
    icon: buildSVG,
  },
  {
    id: uuid4(),
    text: "SDG",
    count: "127",
    icon: brmSVG,
  },
  {
    id: uuid4(),
    text: "Tourism and sport",
    count: "49",
    icon: turismSVG,
  },
  {
    id: uuid4(),
    text: "Insurance",
    count: "4",
    icon: insuranceSVG,
  },
  {
    id: uuid4(),
    text: "Transportation",
    count: "86",
    icon: transportSVG,
  },
  {
    id: uuid4(),
    text: "Ecology",
    count: "154",
    icon: leafSVG,
  },
  {
    id: uuid4(),
    text: "Population",
    count: "1520",
    icon: peopleSVG,
  },
  {
    id: uuid4(),
    text: "Finance",
    count: "1021",
    icon: coinsSVG,
  },
  {
    id: uuid4(),
    text: "Trade",
    count: "158",
    icon: tradeSVG,
  },
  {
    id: uuid4(),
    text: "Offense",
    count: "40",
    icon: lawSVG,
  },
  {
    id: uuid4(),
    text: "Agriculture",
    count: "1027",
    icon: agricultureSVG,
  },
  {
    id: uuid4(),
    text: "ICT",
    count: "96",
    icon: compSVG,
  },
  {
    id: uuid4(),
    text: "Justice and judge",
    count: "24",
    icon: adliyaSVG,
  },
  {
    id: uuid4(),
    text: "Aral Sea region",
    count: "4173",
    icon: boatSVG,
  },
];
