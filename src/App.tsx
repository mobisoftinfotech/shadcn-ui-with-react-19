import "./App.css";
import { ButtonDemo } from "./components/demo/ButtonDemo";
import { CalendarDemo } from "./components/demo/CalendarDemo";
import { CheckboxDemo } from "./components/demo/CheckboxDemo";
import { DialogDemo } from "./components/demo/DialogDemo";
import { InputDemo } from "./components/demo/InputDemo";
import { PopoverDemo } from "./components/demo/PopoverDemo";
import { SelectDemo } from "./components/demo/SelectDemo";
import { SwitchDemo } from "./components/demo/SwitchDemo";
import { TabDemo } from "./components/demo/TabDemo";
import { TableDemo } from "./components/demo/TableDemo";

function App() {
  return (
    <div className="flex flex-col gap-2">
      <ButtonDemo />
      <InputDemo />
      <CheckboxDemo />
      <SwitchDemo />
      <SelectDemo />
      <PopoverDemo />
      <CalendarDemo/>
      <DialogDemo />
      <TabDemo />
      <TableDemo/>
    </div>
  );
}

export default App;
