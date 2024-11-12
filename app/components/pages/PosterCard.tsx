import {CONFIG} from "~/constants/main";
import {DoramaType} from "~/types/dorama";
import {Badge} from "../ui/badge";
import {Link} from "@remix-run/react";
interface Props {
  item?: Partial<DoramaType>;
  type: "Serie" | "Pelicula";
}
function PosterCard({item, type = "Serie"}: Props) {
  return (
    <>
      <li
        key={item?._id}
        className=" text-center aspect-[9/14] relative group border rounded-lg list-none"
      >
        <img
          src={CONFIG.imgPath + item?.poster_path}
          alt={item?.name_es}
          className="h-full  w-full object-cover rounded-lg mb-2"
        />
        <Link
          to={`/dorama/${item?.slug}`}
          className="absolute bottom-0  w-full h-full rounded-lg bg-background/50 flex flex-col gap-1 justify-end group-hover:bg-background/5"
        >
          <div className="py-5 px-2 bg-gradient-to-b  from-background/5 via-background/50 to-background rounded-b-lg">
            <h2 className="text-accent-foreground text-xs font-thin text-center">
              {item?.name}
            </h2>
            <span className="">{item?.name_es}</span>
          </div>
        </Link>
        <Badge
          className="absolute left-2 top-2 "
          variant="secondary"
        >
          {type}
        </Badge>
      </li>
    </>
  );
}

export default PosterCard;
