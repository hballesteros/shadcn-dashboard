import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export default function Page() {
  return (
    <div className="h-[500px] flex justify-center items-center">
      <Avatar>
        <AvatarImage src="https://avatars.githubusercontent.com/u/2608254" alt="@huguichu" />
        <AvatarFallback>HB</AvatarFallback>
      </Avatar>
      <p className="m-2">@huguichu</p>
    </div>
  );
}