import uuid4 from "uuid4";
import { GoLaw } from "react-icons/go";
import { IoChatbubbleEllipsesOutline, IoSettingsSharp } from "react-icons/io5";
import { FaLock } from "react-icons/fa6";
import { SidebarElementsTypes } from "../types";
import { LuMessageCircleQuestion } from "react-icons/lu";
import { RiSurveyFill } from "react-icons/ri";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { BiMessageRoundedEdit } from "react-icons/bi";

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
