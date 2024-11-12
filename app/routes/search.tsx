import {LoaderFunctionArgs} from "@remix-run/node";
import {MetaFunction, useLoaderData} from "@remix-run/react";
import PosterCard from "~/components/pages/PosterCard";
import {CONFIG} from "~/constants/main";
import {Client} from "~/services/api";
export const meta: MetaFunction = ({location}) => {
  const searchQuery = new URLSearchParams(location.search).get("q");
  return [{title: `Resultados para "${searchQuery}" | ${CONFIG.Name}`}];
};

export const clientLoader = async ({request}: LoaderFunctionArgs) => {
  const {searchParams} = new URL(request.url);
  const q = searchParams.get("q") as string;
  return await Client.getSearch(q);
};
function Search() {
  const {searchDorama, searchMovie} = useLoaderData<typeof clientLoader>();
  return (
    <div className="p-3 flex flex-col gap-3">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-4">
        {searchDorama &&
          searchDorama.map((item) => (
            <PosterCard
              item={item}
              type="Serie"
            />
          ))}
      </ul>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-4">
        {searchMovie &&
          searchMovie.map((item) => (
            <PosterCard
              item={item}
              type="Pelicula"
            />
          ))}
      </ul>
    </div>
  );
}

export default Search;
