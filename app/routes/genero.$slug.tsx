import {LoaderFunctionArgs} from "@remix-run/node";
import {MetaFunction, useLoaderData} from "@remix-run/react";
import PaginateDorama from "~/components/pages/dorama/PaginateDorama";
import ListPosters from "~/components/pages/ListPosters";
import {CONFIG} from "~/constants/main";
import {Client} from "~/services/api";

export const loader = async ({params, request}: LoaderFunctionArgs) => {
  const gre = await Client.getGenreBySlug(params.slug as string);
  const url = new URL(request.url);
  const page = url.searchParams.get("page");
  const pagination = await Client.getPaginationDramasByGenreId(
    gre._id,
    page as string
  );
  return {gre, pagination};
};
export const meta: MetaFunction<typeof loader> = ({data}) => {
  return [{title: `${data?.gre.name} | ${CONFIG.Name}`}];
};
function GenreSlug() {
  const {gre, pagination} = useLoaderData<typeof clientLoader>();
  return (
    <article className="p-3 flex-col flex mb-2 gap-3">
      <h1 className="text-center text-3xl mb-4">{gre.name}</h1>
      <ListPosters items={pagination.items} />
      <PaginateDorama
        count={pagination.count}
        pageInfo={pagination.pageInfo}
      />
    </article>
  );
}

export default GenreSlug;
