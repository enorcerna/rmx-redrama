import {Link} from "@remix-run/react";
import {Play} from "lucide-react";
import {Badge} from "~/components/ui/badge";
import {CONFIG} from "~/constants/main";
import {DoramaType} from "~/types/dorama";
import Trailer from "../Trailer";
import {Item} from "~/types/doram";

export interface Props {
  drama: DoramaType;
  episodes: Item[];
}
function HeroDorama({drama, episodes}: Props) {
  return (
    <>
      <section
        className="flex gap-2 flex-col md:flex-row  lg:p-9 mt-6 items-center  backdrop-blur-lg  rounded-lg mb-4 relative"
        style={{background: `url(${CONFIG.imgPath}${drama.backdrop_path})`}}
      >
        <span className="absolute left-0 right-0  backdrop-blur-sm bg-background/80 h-full -z-10" />
        <img
          src={`${CONFIG.imgPath}${drama.poster_path}`}
          className="rounded-lg object-cover hidden lg:block"
        />
        <img
          src={`${CONFIG.imgPath}${drama.backdrop_path}`}
          className="lg:hidden rounded-lg mt-10 sm:mt-0"
        />
        <section className="flex  z-10 p-8 relative ">
          <div>
            <div className="flex gap-1 flex-col mb-3">
              <h1 className="text-4xl">{drama.name_es}</h1>
              <span className="font-light  opacity-80">{drama.name}</span>
            </div>

            <ul className="flex gap-2 flex-wrap">
              {drama.labels.map((val, i) => (
                <li key={i}>
                  <Badge variant="secondary">{val.name}</Badge>
                </li>
              ))}
            </ul>
            <ul className="flex gap-2 flex-wrap mb-3">
              {drama?.genres?.map(({name, slug}, i) => (
                <li key={i}>
                  <Link to={`/genero/${slug}`}>{name}</Link>
                </li>
              ))}
            </ul>
            <div className="flex gap-2 items-center">
              <Link
                to={`/capitulo/${episodes[0].slug ?? "#"}`}
                className="flex gap-2 items-center bg-brand-600 hover:bg-brand-700 p-3 rounded-lg"
              >
                <Play />
                Ver ahora
              </Link>
              <Trailer code={drama.trailer} />
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default HeroDorama;
