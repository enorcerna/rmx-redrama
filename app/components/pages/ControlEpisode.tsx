import {List, SkipBack, SkipForward} from "lucide-react";
import {Button} from "../ui/button";

interface Props {
  next: any;
  prev: any;
  slugDrama: String;
}
function ControlEpisode({prev, next, slugDrama}: Props) {
  return (
    <div className="w-full flex justify-between">
      {prev ? (
        <a
          href={`/capitulo/${prev?.slug}`}
          title={prev.name}
        >
          <Button
            variant="outline"
            className="flex gap-1"
          >
            <SkipBack />
            <span>Anterior</span>
          </Button>
        </a>
      ) : (
        <Button
          variant="outline"
          disabled
          className="flex  gap-2 "
        >
          <SkipBack />
          <span>Anterior</span>
        </Button>
      )}
      <a href={`/dorama/${slugDrama}`}>
        <Button
          variant="outline"
          className="flex  gap-2 "
        >
          <List />
          <span>Lista</span>
        </Button>
      </a>
      {next && (
        <a
          href={`/capitulo/${next?.slug}`}
          title={next.name}
        >
          <Button
            variant="outline"
            className="flex gap-1"
          >
            <SkipForward />
            <span>Siquiente</span>
          </Button>
        </a>
      )}
    </div>
  );
}

export default ControlEpisode;
