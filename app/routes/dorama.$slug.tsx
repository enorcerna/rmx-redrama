import {LoaderFunctionArgs} from "@remix-run/node";
import {Link, MetaFunction, useLoaderData} from "@remix-run/react";
import {Play} from "lucide-react";
import HeroDorama from "~/components/pages/dorama/HeroDorama";
import Slider from "~/components/pages/Slider";
import Trailer from "~/components/pages/Trailer";
import {Badge} from "~/components/ui/badge";
import {Button} from "~/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "~/components/ui/carousel";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "~/components/ui/tabs";
import {CONFIG} from "~/constants/main";
import {Client} from "~/services/api";

export const loader = async ({params}: LoaderFunctionArgs) => {
  const drama = await Client.getDramaBySlug(params.slug as string);
  const episodes = await Client.getDramaEpisodesById(drama._id);
  const similar = await Client.getDramasSimilarById(drama._id);
  return {drama, episodes, similar};
};
export const meta: MetaFunction<typeof loader> = ({data}) => {
  return [{title: `${data?.drama.name_es} | ${CONFIG.Name}`}];
};
function DoramaSlug() {
  const {drama, episodes, similar} = useLoaderData<typeof clientLoader>();
  return (
    <article className="w-full p-3">
      <HeroDorama
        drama={drama}
        episodes={episodes}
      />
      <section className=" mb-4">
        <Tabs
          defaultValue="desc"
          className=""
        >
          <TabsList>
            <TabsTrigger value="desc">Descripcion</TabsTrigger>
            <TabsTrigger value="cast">Reparto</TabsTrigger>
          </TabsList>
          <TabsContent value="desc">
            <p className="font-thin text-wrap mb-3">{drama.overview}</p>
          </TabsContent>
          <TabsContent value="cast">
            <Carousel>
              <CarouselContent>
                {drama.cast.map(({profile_path, name, character}, i) => (
                  <CarouselItem
                    className=" basis-1/4 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 text-center object-cover"
                    key={i}
                  >
                    <div>
                      <img
                        src={`${CONFIG.imgPath}${profile_path}`}
                        className="aspect-square object-cover rounded-full shadow-lg h-full"
                      />
                      <span className="font-thin text-sm">{character}</span>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </TabsContent>
        </Tabs>
      </section>
      <section>
        <h3 className="text-2xl mb-3">Lista de episodios</h3>
        <ul className="grid grid-cols-2 w-full sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
          {episodes?.map(
            ({name, still_path, season_number, episode_number, slug}, i) => (
              <li key={i}>
                <Link
                  to={`/capitulo/${slug}`}
                  className="relative flex items-center justify-center group"
                >
                  <img
                    src={`${CONFIG.imgPath}${still_path}`}
                    alt=""
                    className="aspect-video object-cover w-auto rounded-lg opacity-30 group-hover:opacity-50"
                  />
                  <Button
                    variant="link"
                    className="absolute flex flex-wrap  gap-1 items-center"
                  >
                    <h3 className="text-center bottom-0">
                      <span className="">
                        {season_number} x {episode_number}
                      </span>
                    </h3>
                    <Play />
                  </Button>
                </Link>
              </li>
            )
          )}
        </ul>
      </section>
      <section className=" mb-4">
        <h2 className="mb-3 text-2xl">Series Similares</h2>
        <Slider data={similar} />
      </section>
    </article>
  );
}

export default DoramaSlug;
