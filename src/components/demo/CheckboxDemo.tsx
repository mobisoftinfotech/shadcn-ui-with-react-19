import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";

interface ICheckboxItemProps {
  label: string;
}

const CheckboxItem = ({ label }: ICheckboxItemProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={label} />
      <label
        htmlFor={label}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
};

export const CheckboxDemo = () => {
  return (
    <div className="flex flex-col">
      <Label className="text-lg font-bold">Checkbox</Label>
      <div className="flex gap-4 m-4">
        <CheckboxItem label="English" />
        <CheckboxItem label="French" />
        <CheckboxItem label="Spanish" />
      </div>
    </div>
  );
};
