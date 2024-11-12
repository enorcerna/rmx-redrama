import {Button} from "../ui/button";
import {PlayCircle} from "lucide-react";
import {Dialog, DialogContent, DialogTrigger} from "../ui/dialog";

interface Props {
  code: string;
}
function Trailer({code}: Props) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="flex items-center gap-2 "
          >
            <PlayCircle /> Trailer
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <div className="flex items-center space-x-2">
            <iframe
              src={`https://www.youtube.com/embed/${code}?autoplay=0&autohide=0&enablejsapi=1&wmode=opaque`}
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default Trailer;
