import { IconType } from "react-icons";

export interface SidebarElementsTypes {
  id: string;
  path?: string;
  text: string;
  icon: IconType;
  type: "link" | "form" | "survey";
}
