import {Flag, LayoutList, NotebookText} from "lucide-react";
import {Client} from "~/services/api";
import {NavType} from "~/types/nav";
export const NAVS = async (): Promise<NavType[]> => {
  return [
    {
      title: "Generos",
      url: "#",
      Icon: LayoutList,
      items: await Client.getListGenre()
    }
    // {
    //   title: "Paises",
    //   url: "#",
    //   Icon: Flag,
    //   items: await Client.getCountries()
    // },
    // {
    //   title: "Temas",
    //   url: "#",
    //   Icon: NotebookText,
    //   items: await Client.getLabels()
    // }
  ];
};
export const CONFIG = {
  Name: "Redrama",
  imgPath: "https://image.tmdb.org/t/p/w342/"
};
