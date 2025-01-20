import { Mail } from "lucide-react";
import { Button } from "../ui/Button";
import { Label } from "../ui/label";

export const ButtonDemo = () => {
  return (
    <div className="flex flex-col">
      <Label className="text-lg font-bold">Button</Label>
      <div className="flex gap-4 m-4">
        <Button>Primary</Button>
        <Button variant={"secondary"}>Secondary</Button>
        <Button variant={"outline"}>Outline</Button>
        <Button className="items-center gap-2">
          <Mail className="w-5 h-5" />
          Submit
        </Button>
      </div>
    </div>
  );
};
