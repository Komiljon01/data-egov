import { ListItem } from "@mui/material";
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
  const data: NavbarListsType[] = [
    {
      path: "organizations",
      text: "Organizations",
      isLink: false,
    },
    {
      path: "news",
      text: "News",
      isLink: false,
    },
    {
      path: "monitoring",
      text: "Monitoring",
      isLink: false,
    },
    {
      path: "statistics",
      text: "Statistics",
      isLink: false,
    },
    {
      path: "ai-data",
      text: "AI Data",
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
