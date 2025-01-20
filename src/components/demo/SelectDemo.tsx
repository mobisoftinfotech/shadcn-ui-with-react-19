import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const SelectDemo = () => {
  return (
    <div className="flex flex-col gap-4">
      <Label className="text-lg font-bold">Select</Label>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">Default</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
