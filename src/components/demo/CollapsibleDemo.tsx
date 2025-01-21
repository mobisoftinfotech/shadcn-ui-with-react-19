import { useState } from "react";

import { Label } from "../ui/label";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

export const CollapsibleDemo = () => {

  return (
    <div className="flex flex-col gap-4 mt-3">
      <Label className="text-lg font-bold">Accordion / collapsible</Label>
      <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Personal Information</AccordionTrigger>
        <AccordionContent>
          John Doe is a 28-year-old male with the email
          john.doe@example.com and phone number +1-234-567-890.
        </AccordionContent>
      </AccordionItem>
      </Accordion>
    </div>
  );
};
