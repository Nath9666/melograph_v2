"use client";

import * as React from "react";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function BookingForm() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Card className="mx-auto max-w-lg bg-gray-900 border-blue-900/20">
      <CardHeader>
        <CardTitle className="text-blue-400">Book a Consultation</CardTitle>
        <CardDescription>
          Choose a date and time for our meeting.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
                disabled={(date) =>
                  date < new Date() || date > addDays(new Date(), 30)
                }
              />
            </PopoverContent>
          </Popover>
        </div>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="09:00">09:00 AM</SelectItem>
            <SelectItem value="10:00">10:00 AM</SelectItem>
            <SelectItem value="11:00">11:00 AM</SelectItem>
            <SelectItem value="12:00">12:00 PM</SelectItem>
            <SelectItem value="13:00">01:00 PM</SelectItem>
            <SelectItem value="14:00">02:00 PM</SelectItem>
            <SelectItem value="15:00">03:00 PM</SelectItem>
            <SelectItem value="16:00">04:00 PM</SelectItem>
            <SelectItem value="17:00">05:00 PM</SelectItem>
          </SelectContent>
        </Select>
        <Input
          placeholder="Your name"
          className="bg-gray-950 border-blue-900/20 text-gray-50"
        />
        <Input
          placeholder="Your email"
          type="email"
          className="bg-gray-950 border-blue-900/20 text-gray-50"
        />
        <Textarea
          placeholder="Brief description of your project"
          className="bg-gray-950 border-blue-900/20 text-gray-50"
        />
        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          Book Consultation
        </Button>
      </CardContent>
    </Card>
  );
}
