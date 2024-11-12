import {DropdownMenuTrigger} from "@radix-ui/react-dropdown-menu";
import {useState} from "react";
import {addNameServers} from "~/utils/main";
import {DropdownMenu, DropdownMenuContent} from "../ui/dropdown-menu";
import {Button} from "../ui/button";
import {ListVideo, PlayCircle} from "lucide-react";
import {LinksOnline} from "~/types/episode";

interface Props {
  links: LinksOnline[];
}
function Video({links}: Props) {
  const server = addNameServers(links);
  const [url, setUrl] = useState(links[0]?.link ?? "");
  const handleSetter = (link: string) => {
    if (link.length > 0) {
      setUrl(link);
    }
  };
  return (
    <div className="relative flex gap-2 h-full flex-col lg:flex-row">
      <section className="w-full h-full">
        <iframe
          src={url}
          width="100%"
          height="100%"
          className="aspect-video h-[500px] rounded-lg"
          allow="accelerometer autoplay clipboard-write encrypted-media gyroscope picture-in-picture"
          allowFullScreen
        />
      </section>
      <section className="absolute top-1 right-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex gap-2 items-center backdrop-blur-lg p-2 rounded-full">
            <ListVideo className="h-8 w-8" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <ul className="flex gap-1 flex-wrap flex-col ">
              {server &&
                server?.map(({link, name, langs}, i) => (
                  <Button
                    key={i}
                    onClick={() => handleSetter(link ?? "")}
                    variant="secondary"
                    className="font-light flex gap-2 items-center"
                  >
                    <PlayCircle />
                    <span>{langs.name}</span>
                    <span className="text-xs opacity-50">{name} </span>
                  </Button>
                ))}
            </ul>
          </DropdownMenuContent>
        </DropdownMenu>
      </section>
    </div>
  );
}

export default Video;
