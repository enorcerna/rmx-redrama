import type {MetaFunction} from "@remix-run/deno";
import {useLoaderData} from "@remix-run/react";
import H2 from "~/components/pages/H2";
import ListPosters from "~/components/pages/ListPosters";
import {Client} from "~/services/api";

export const meta: MetaFunction = () => {
  return [
    {title: "Redrama - Tus series favoritas"},
    {name: "description", content: "Welcome to Remix!"}
  ];
};
export const clientLoader = async () => {
  return await Client.getlastDramas();
};
export default function Index() {
  return (
    <div className="flex  flex-col p-3">
      <H2>Ultimos Kramas</H2>
      <ListPosters items={useLoaderData()} />
    </div>
  );
}
