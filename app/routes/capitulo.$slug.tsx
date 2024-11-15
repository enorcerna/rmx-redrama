import {LoaderFunctionArgs} from "@remix-run/deno";
import {MetaFunction, useLoaderData} from "@remix-run/react";
import ControlEpisode from "~/components/pages/ControlEpisode";
import Video from "~/components/pages/Video";
import {CONFIG} from "~/constants/main";
import {Client} from "~/services/api";

export const loader = async ({params}: LoaderFunctionArgs) => {
  const cap = await Client.getEpisodeBySlug(params.slug as string);
  const next = await Client.getEpisodeNextById(cap._id);
  const prev = await Client.getEpisodePrevById(cap._id);
  return {cap, next, prev};
};
export const meta: MetaFunction<typeof loader> = ({data}) => {
  return [{title: `${data?.cap.name_es} | ${CONFIG.Name}`}];
};
function CapituloSlug() {
  const {cap, next, prev} = useLoaderData<typeof clientLoader>();
  return (
    <article className="flex flex-col gap-6 p-3">
      <h1>{cap.name_es}</h1>
      <section className="flex flex-col gap-2">
        <Video links={cap.links_online} />
        <ControlEpisode
          next={next}
          prev={prev}
          slugDrama={cap.serie_slug}
        />
      </section>
    </article>
  );
}

export default CapituloSlug;
