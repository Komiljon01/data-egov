import { SVGProps } from "react";
import { IconType } from "react-icons";

export enum Language {
  Uzbek = "uz",
  UzbekKiril = "uzKr",
  English = "eng",
  Russian = "rus",
}

export interface SidebarElementsTypes {
  id: string;
  path?: string;
  text: string;
  icon: IconType;
  type: "link" | "form" | "survey";
}

export interface HeroStatisticsTypes {
  id: string;
  text: string;
  statNum: string;
  color: "red" | "blue";
}

export interface HeroCardsTypes {
  id: string;
  text: string;
  count: string;
  icon: SVGProps<SVGSVGElement>;
}

export interface HomeTrendingDatasetTypes {
  id: string;
  text: string;
  company: string;
  date: string;
  color?: "light";
}

export interface HomeDatasetStatsTypes {
  id: string;
  text: string;
  width: string;
  statNum: string;
  color: "blue" | "red";
}

export interface HomeNewsTypes {
  id: string;
  title: string;
  text: string;
  date: string;
  img: string;
}

export interface HomeRequestTypes {
  id: string;
  text: string;
  reqNum: string;
}

export interface FooterSiteNavigation {
  id: string;
  text: string;
  path: string;
}
