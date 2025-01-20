import { CheckIcon } from "lucide-react";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

interface ISwitchItemProps {
  label: string;
}

const SwitchItem = ({ label }: ISwitchItemProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Switch id={label}/>
      <label
        htmlFor={label}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};

export const SwitchDemo = () => {
  return (
    <div className="flex flex-col">
      <Label className="text-lg font-bold">Switch</Label>
      <div className="flex gap-4 m-4">
        <SwitchItem label="Enable Email"/>
        <SwitchItem label="Enable SMS" />
      </div>
    </div>
  );
};
