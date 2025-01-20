import { Ellipsis } from "lucide-react";
import { Label } from "../ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export const PopoverDemo = () => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      <Label className="text-lg font-bold">Popover</Label>
      <Popover>
        <PopoverTrigger className="flex w-8 justify-center  ml-4">
          <Ellipsis />
        </PopoverTrigger>
        <PopoverContent className="flex flex-col w-36">
            <Label className="mb-4">Send Email</Label>
            <Label>Send SMS</Label>
        </PopoverContent>
      </Popover>
    </div>
  );
};
