import { SVGProps } from "react";
import { IconType } from "react-icons";

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
