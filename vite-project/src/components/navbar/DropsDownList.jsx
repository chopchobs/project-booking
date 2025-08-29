import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { TextAlignCenter } from 'lucide-react';
import UserIcon from "./UserIcon";
import { Button } from "../ui/button";

const DropsDownList = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger >
        Open
{/* 
        <Button>
          <TextAlignCenter />
          <UserIcon />
        </Button> */}

      </DropdownMenuTrigger>
      <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
export default DropsDownList;