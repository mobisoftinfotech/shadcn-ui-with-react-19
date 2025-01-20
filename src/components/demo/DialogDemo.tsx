import { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const DialogDemo = () => {
  const [isDialogVisible, setDialogVisible] = useState(false);
  return (
    <div className="flex flex-col gap-4 mt-3">
      <Label className="text-lg font-bold">Dialog</Label>
      <Dialog  open={isDialogVisible} onOpenChange={setDialogVisible}>
        <DialogTrigger asChild>
          <Button className="w-36 ml-4" variant="outline">
            Change Password
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[475px]">
          <DialogHeader>
            <DialogTitle>Change Password</DialogTitle>
            <DialogDescription>
              Change your password here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="password" className="text-right">
                Password
              </Label>
              <Input id="password" type="password" className="col-span-2" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="confirmPassword" className="text-right">
                Confirm Password
              </Label>
              <Input id="confirmPassword" className="col-span-2" />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              onClick={() => {
                setDialogVisible(false);
              }}
            >
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
