import {Avatar, AvatarFallback, AvatarImage} from "../ui/avatar";

function User() {
  return (
    <section className="flex gap-2 items-center p-2">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col py-2">
        <p>Oppa</p>
        <span className="text-xs text-muted-foreground">kdramer</span>
      </div>
    </section>
  );
}

export default User;
