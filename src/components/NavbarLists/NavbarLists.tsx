import { ListItem } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface NavbarListsType {
  path: NavbarListsPaths;
  text: string;
  isLink: boolean;
}

type NavbarListsPaths =
  | "organizations"
  | "news"
  | "monitoring"
  | "statistics"
  | "ai-data"
  | "https://old.data.gov.uz";

function NavbarLists() {
  const { t } = useTranslation();

  const data: NavbarListsType[] = [
    {
      path: "organizations",
      text: t("navbar.navLink1"),
      isLink: false,
    },
    {
      path: "news",
      text: t("navbar.navLink2"),
      isLink: false,
    },
    {
      path: "monitoring",
      text: t("navbar.navLink3"),
      isLink: false,
    },
    {
      path: "statistics",
      text: t("navbar.navLink4"),
      isLink: false,
    },
    {
      path: "ai-data",
      text: t("navbar.navLink5"),
      isLink: false,
    },
    {
      path: "https://old.data.gov.uz",
      text: "old.data.gov.uz",
      isLink: true,
    },
  ];

  return (
    <>
      {data.map((item, idx) => {
        if (!item.isLink) {
          return (
            <ListItem key={idx} disablePadding>
              <Link to={`${item.path}`}>{item.text}</Link>
            </ListItem>
          );
        } else {
          return (
            <ListItem key={idx} disablePadding>
              <a href={item.path} target="_blank" rel="noopener noreferrer">
                {item.text}
              </a>
            </ListItem>
          );
        }
      })}
    </>
  );
}

export default NavbarLists;
