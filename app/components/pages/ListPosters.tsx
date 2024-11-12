import {ComponentProps} from "react";
import PosterCard from "./PosterCard";
import {DoramaType} from "~/types/dorama";
interface Props extends ComponentProps<"ul"> {
  items: Partial<DoramaType[]>;
}
function ListPosters({items, ...rest}: Props) {
  return (
    <>
      <ul
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-4"
        {...rest}
      >
        {items &&
          items.map((item) => (
            <PosterCard
              item={item}
              type="Serie"
            />
          ))}
      </ul>
    </>
  );
}

export default ListPosters;
