import uuid4 from "uuid4";
import { GoLaw } from "react-icons/go";
import { IoChatbubbleEllipsesOutline, IoSettingsSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa6";
import {
  HeroCardsTypes,
  HeroStatisticsTypes,
  HomeTrendingDatasetTypes,
  HomeDatasetStatsTypes,
  SidebarElementsTypes,
  HomeRequestTypes,
  FooterSiteNavigation,
  HomeNewsTypes,
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
  hackatonIMG,
  heartSVG,
  insuranceSVG,
  lawSVG,
  leafSVG,
  meetingStatIMG,
  nationalStatAgencyIMG,
  opendataIMG,
  osceIMG,
  peopleSVG,
  territorySVG,
  tradeSVG,
  transportSVG,
  turismSVG,
  webinarIMG,
} from "../assets";

export const leftSidebarElements: SidebarElementsTypes[] = [
  {
    id: uuid4(),
    path: "/legislation",
    text: "sidebarElements.left.text1",
    icon: GoLaw,
    type: "link",
  },
  {
    id: uuid4(),
    path: "/glossary",
    text: "sidebarElements.left.text2",
    icon: IoChatbubbleEllipsesOutline,
    type: "link",
  },
  {
    id: uuid4(),
    path: "/instructions",
    text: "sidebarElements.left.text3",
    icon: IoSettingsSharp,
    type: "link",
  },
  {
    id: uuid4(),
    path: "/copyrights",
    text: "sidebarElements.left.text4",
    icon: FaLock,
    type: "link",
  },
];

export const rightSidebarElements: SidebarElementsTypes[] = [
  {
    id: uuid4(),
    path: "/faq",
    text: "sidebarElements.right.text1",
    icon: LuMessageCircleQuestion,
    type: "link",
  },
  {
    id: uuid4(),
    text: "sidebarElements.right.text2",
    icon: RiSurveyFill,
    type: "survey",
  },
  {
    id: uuid4(),
    path: "/requests",
    text: "sidebarElements.right.text3",
    icon: PiDownloadSimpleBold,
    type: "link",
  },
  {
    id: uuid4(),
    text: "sidebarElements.right.text4",
    icon: BiMessageRoundedEdit,
    type: "form",
  },
];

export const heroStatistics: HeroStatisticsTypes[] = [
  {
    id: uuid4(),
    text: "hero.heroDatasetsText1",
    statNum: "9720",
    color: "red",
  },
  {
    id: uuid4(),
    text: "hero.heroDatasetsText2",
    statNum: "156",
    color: "blue",
  },
  {
    id: uuid4(),
    text: "hero.heroDatasetsText3",
    statNum: "503854",
    color: "red",
  },
  {
    id: uuid4(),
    text: "hero.heroDatasetsText4",
    statNum: "36175",
    color: "blue",
  },
];

export const heroCards: HeroCardsTypes[] = [
  {
    id: uuid4(),
    text: "hero.cards.text1",
    count: "560",
    icon: territorySVG,
  },
  {
    id: uuid4(),
    text: "hero.cards.text2",
    count: "2980",
    icon: economySVG,
  },
  {
    id: uuid4(),
    text: "hero.cards.text3",
    count: "691",
    icon: heartSVG,
  },
  {
    id: uuid4(),
    text: "hero.cards.text4",
    count: "757",
    icon: educationSVG,
  },
  {
    id: uuid4(),
    text: "hero.cards.text5",
    count: "67",
    icon: cultureSVG,
  },
  {
    id: uuid4(),
    text: "hero.cards.text6",
    count: "147",
    icon: caseSVG,
  },
  {
    id: uuid4(),
    text: "hero.cards.text7",
    count: "212",
    icon: buildSVG,
  },
  {
    id: uuid4(),
    text: "hero.cards.text8",
    count: "127",
    icon: brmSVG,
  },
  {
    id: uuid4(),
    text: "hero.cards.text9",
    count: "49",
    icon: turismSVG,
  },
  {
    id: uuid4(),
    text: "hero.cards.text10",
    count: "4",
    icon: insuranceSVG,
  },
  {
    id: uuid4(),
    text: "hero.cards.text11",
    count: "86",
    icon: transportSVG,
  },
  {
    id: uuid4(),
    text: "hero.cards.text12",
    count: "154",
    icon: leafSVG,
  },
  {
    id: uuid4(),
    text: "hero.cards.text13",
    count: "1520",
    icon: peopleSVG,
  },
  {
    id: uuid4(),
    text: "hero.cards.text14",
    count: "1021",
    icon: coinsSVG,
  },
  {
    id: uuid4(),
    text: "hero.cards.text15",
    count: "158",
    icon: tradeSVG,
  },
  {
    id: uuid4(),
    text: "hero.cards.text16",
    count: "40",
    icon: lawSVG,
  },
  {
    id: uuid4(),
    text: "hero.cards.text17",
    count: "1027",
    icon: agricultureSVG,
  },
  {
    id: uuid4(),
    text: "hero.cards.text18",
    count: "96",
    icon: compSVG,
  },
  {
    id: uuid4(),
    text: "hero.cards.text19",
    count: "24",
    icon: adliyaSVG,
  },
  {
    id: uuid4(),
    text: "hero.cards.text20",
    count: "4173",
    icon: boatSVG,
  },
];

export const HomeTopDatasets: HomeTrendingDatasetTypes[] = [
  {
    id: uuid4(),
    text: "homeDataset.topDatasets.text1",
    company: "homeDataset.topDatasets.company1",
    date: "01-01-0001",
    color: "light",
  },
  {
    id: uuid4(),
    text: "homeDataset.topDatasets.text2",
    company: "homeDataset.topDatasets.company2",
    date: "14-12-2022",
    color: "light",
  },
  {
    id: uuid4(),
    text: "homeDataset.topDatasets.text3",
    company: "homeDataset.topDatasets.company3",
    date: "11-10-2024",
    color: "light",
  },
  {
    id: uuid4(),
    text: "homeDataset.topDatasets.text4",
    company: "homeDataset.topDatasets.company4",
    date: "11-11-2024",
    color: "light",
  },
];

export const HomePopularDatasets: HomeTrendingDatasetTypes[] = [
  {
    id: uuid4(),
    text: "homeDataset.popularDatasets.text1",
    company: "homeDataset.popularDatasets.company1",
    date: "07-01-2025",
  },
  {
    id: uuid4(),
    text: "homeDataset.popularDatasets.text2",
    company: "homeDataset.popularDatasets.company2",
    date: "30-10-2024",
  },
  {
    id: uuid4(),
    text: "homeDataset.popularDatasets.text3",
    company: "homeDataset.popularDatasets.company3",
    date: "11-01-2025",
  },
  {
    id: uuid4(),
    text: "homeDataset.popularDatasets.text4",
    company: "homeDataset.popularDatasets.company4",
    date: "22-10-2024",
  },
];

export const HomeNewsData: HomeNewsTypes[] = [
  {
    id: uuid4(),
    title: "homeNews.datas.title1",
    text: "homeNews.datas.text1",
    date: "08-01-2025",
    img: hackatonIMG,
  },
  {
    id: uuid4(),
    title: "homeNews.datas.title2",
    text: "homeNews.datas.text2",
    date: "24-12-2024",
    img: osceIMG,
  },
  {
    id: uuid4(),
    title: "homeNews.datas.title3",
    text: "homeNews.datas.text3",
    date: "16-12-2024",
    img: opendataIMG,
  },
  {
    id: uuid4(),
    title: "homeNews.datas.title4",
    text: "homeNews.datas.text4",
    date: "16-10-2024",
    img: meetingStatIMG,
  },
  {
    id: uuid4(),
    title: "homeNews.datas.title5",
    text: "homeNews.datas.text5",
    date: "06-09-2024",
    img: nationalStatAgencyIMG,
  },
  {
    id: uuid4(),
    title: "homeNews.datas.title6",
    text: "homeNews.datas.text6",
    date: "01-08-2024",
    img: webinarIMG,
  },
];

export const HomeFreqDownloadStats: HomeDatasetStatsTypes[] = [
  {
    id: uuid4(),
    text: "homeDatasetStats.freqDownloads.text1",
    statNum: "9007",
    width: "100%",
    color: "blue",
  },
  {
    id: uuid4(),
    text: "homeDatasetStats.freqDownloads.text2",
    statNum: "8399",
    width: "93%",
    color: "blue",
  },
  {
    id: uuid4(),
    text: "homeDatasetStats.freqDownloads.text3",
    statNum: "5824",
    width: "65%",
    color: "blue",
  },
  {
    id: uuid4(),
    text: "homeDatasetStats.freqDownloads.text4",
    statNum: "5741",
    width: "64%",
    color: "blue",
  },
  {
    id: uuid4(),
    text: "homeDatasetStats.freqDownloads.text5",
    statNum: "4978",
    width: "55%",
    color: "blue",
  },
];

export const HomeScopOfApplications: HomeDatasetStatsTypes[] = [
  {
    id: uuid4(),
    text: "homeDatasetStats.scopOfAppl.text1",
    statNum: "10368",
    width: "19%",
    color: "red",
  },
  {
    id: uuid4(),
    text: "homeDatasetStats.scopOfAppl.text2",
    statNum: "47950",
    width: "86%",
    color: "red",
  },
  {
    id: uuid4(),
    text: "homeDatasetStats.scopOfAppl.text3",
    statNum: "10434",
    width: "19%",
    color: "red",
  },
  {
    id: uuid4(),
    text: "homeDatasetStats.scopOfAppl.text4",
    statNum: "55602",
    width: "100%",
    color: "red",
  },
  {
    id: uuid4(),
    text: "homeDatasetStats.scopOfAppl.text5",
    statNum: "37558",
    width: "68%",
    color: "red",
  },
];

export const HomeRequestData: HomeRequestTypes[] = [
  {
    id: uuid4(),
    text: "homeRequests.table.text1",
    reqNum: "629",
  },
  {
    id: uuid4(),
    text: "homeRequests.table.text2",
    reqNum: "10",
  },
  {
    id: uuid4(),
    text: "homeRequests.table.text3",
    reqNum: "9",
  },
];

export const FooterPageLists: FooterSiteNavigation[] = [
  {
    id: uuid4(),
    text: "footer.footerLists.link1",
    path: "/about-open-data",
  },
  {
    id: uuid4(),
    text: "footer.footerLists.link2",
    path: "/about",
  },
  {
    id: uuid4(),
    text: "footer.footerLists.link3",
    path: "/copyrights",
  },
  {
    id: uuid4(),
    text: "footer.footerLists.link4",
    path: "/legislation",
  },
  {
    id: uuid4(),
    text: "footer.footerLists.link5",
    path: "/organizations",
  },
  {
    id: uuid4(),
    text: "footer.footerLists.link6",
    path: "/monitoring",
  },
  {
    id: uuid4(),
    text: "footer.footerLists.link7",
    path: "/statistics",
  },
  {
    id: uuid4(),
    text: "footer.footerLists.link8",
    path: "/news",
  },
  {
    id: uuid4(),
    text: "footer.footerLists.link9",
    path: "/calendar",
  },
  {
    id: uuid4(),
    text: "footer.footerLists.link10",
    path: "/real-time",
  },
  {
    id: uuid4(),
    text: "footer.footerLists.link11",
    path: "/offers",
  },
  {
    id: uuid4(),
    text: "footer.footerLists.link12",
    path: "/instructions",
  },
  {
    id: uuid4(),
    text: "footer.footerLists.link13",
    path: "/contacts",
  },
  {
    id: uuid4(),
    text: "footer.footerLists.link14",
    path: "/faq",
  },
  {
    id: uuid4(),
    text: "footer.footerLists.link15",
    path: "/glossary",
  },
];
