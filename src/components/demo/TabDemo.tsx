import { Label } from "../ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export const TabDemo = () => {
  return (
    <div className="flex flex-col gap-4 mt-3">
      <Label className="text-lg font-bold">Tabs</Label>
      <Tabs defaultValue="account" className="w-[400px]  ml-4">
        <TabsList>
          <TabsTrigger value="account">Account Info</TabsTrigger>
          <TabsTrigger value="password">Billing Info</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          Account Info
        </TabsContent>
        <TabsContent value="password">Billing Info</TabsContent>
      </Tabs>
    </div>
  );
};
