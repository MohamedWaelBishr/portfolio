"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <div id="contact" className="border-[1px] p-4 rounded-lg space-y-8 mb-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Please fill the below form and we will get back to you as soon as
          possible.
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-gray-600 dark:text-gray-400">
            Name
          </Label>
          <Input
            id="name"
            placeholder="Enter your name"
            className="border  dark:bg-black"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-gray-600 dark:text-gray-400">
            Phone Number
          </Label>
          <Input
            id="phone"
            placeholder="Enter your phone number"
            className="border  dark:bg-black"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-gray-600 dark:text-gray-400">
            Message
          </Label>
          <Input
            id="message"
            defaultValue="I would like to receive more information"
            className="border  dark:bg-black"
          />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="agreement"
            className="text-gray-600 dark:text-gray-400"
          />
          <Label
            htmlFor="agreement"
            className="text-sm font-normal text-gray-600 dark:text-gray-400"
          >
            I agree to the{" "}
            <Link
              href="#"
              className="underline underline-offset-2 text-gray-600 dark:text-gray-400"
              prefetch={false}
            >
              Terms &amp; Conditions
            </Link>
          </Label>
        </div>
        <Button type="submit" className="w-full bg-white  text-black ">
          Submit
        </Button>
      </div>
    </div>
  );
}
