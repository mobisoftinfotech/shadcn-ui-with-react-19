import { Label } from "../ui/label";
import { Input } from "../ui/input";

export const InputDemo = () => {
  return (
    <div className="flex flex-col">
      <Label className="text-lg font-bold">Input</Label>
      <div className="flex gap-4 m-4">
        <Input type="email" placeholder="Email" />     
        <Input type="password" placeholder="Password" />    
        <Input type="file" placeholder="Select Picture" />      
      </div>
    </div>
  );
};
