import {SearchIcon} from "lucide-react";
import {Input} from "../ui/input";
import {ChangeEvent} from "react";
import {useNavigate} from "@remix-run/react";

function Search() {
  const navigate = useNavigate();
  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.value.length >= 3) {
      navigate(`/search?q=${target.value}`);
    }
  };
  return (
    <div className="flex items-center">
      <SearchIcon className=" absolute ml-2 text-muted-foreground" />
      <Input
        className="pl-10 focus-visible:ring-1"
        placeholder="Buscar"
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
