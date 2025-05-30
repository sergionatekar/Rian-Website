"use client";
import React, { useEffect } from "react";
import { Dialog, DialogContent, DialogOverlay, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Form, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../ui/button";
import { all } from "country-codes-list";

// Zod schema
const schema = z.object({
  fullName: z.string().min(2, "Full Name is required"),
  company: z.string().min(2, "Company Name is required"),
  email: z.string().email("Invalid email address"),
  phoneCode: z.string().min(1, "Country code required"),
  phone: z.string().min(5, "Phone number required"),
  goal: z.string().min(2, "Please specify your goal"),
});

type DemoForm = z.infer<typeof schema>;

// Get country codes and names
const countryOptions: { code: string; label: string }[] = all().map((country) => ({
  code: `+${country.countryCallingCode}`,
  label: country.countryNameEn,
}));

export default function DemoDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const form = useForm<DemoForm>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      company: "",
      email: "",
      phoneCode: countryOptions[0]?.code || "+1",
      phone: "",
      goal: "",
    },
  });

  // Ensure countryOptions[0] is set as default if available
  useEffect(() => {
    if (!form.getValues("phoneCode") && countryOptions[0]) {
      form.setValue("phoneCode", countryOptions[0].code);
    }
  }, [form]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogOverlay className="fixed inset-0 bg-white/5 z-50 backdrop-blur-sm" />
      <DialogContent
        className="fixed left-1/2 top-1/2 z-50 w-full border-none xl:max-w-[1120px] md:max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-md bg-[url('/images/dialog-mobile.png')] md:bg-[url('/images/dialog-web.png')] bg-cover bg-center bg-no-repeat shadow-xl p-0 overflow-hidden"
      >
        <div className="relative w-full h-full p-8 md:p-12 ">
          <DialogClose asChild>
          </DialogClose>
          <DialogTitle className="text-3xl md:text-4xl font-light text-white text-center my-20 mt-2">
            Book a personalized demo
          </DialogTitle>
          <Form {...form}>
            <form className="space-y-6 text-white" onSubmit={form.handleSubmit(() => { /* handle submit */ })}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <FormItem>
                  <FormLabel className="text-sm md:text-xl font-light">Full Name</FormLabel>
                  <FormControl>
                    <Input className="bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 py-6 px-3 focus:ring-0 focus:outline-0 lg:h-18" placeholder="Enter your full name" {...form.register("fullName")}/>
                  </FormControl>
                </FormItem>
                <FormItem>
                  <FormLabel className="text-sm md:text-xl font-light">Company Name</FormLabel>
                  <FormControl>
                    <Input className="bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 py-6 px-3 focus:ring-0 focus:outline-0 lg:h-18" placeholder="Enter your company name" {...form.register("company")}/>
                  </FormControl>
                </FormItem>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <FormItem>
                  <FormLabel className="text-sm md:text-xl font-light">Business Email</FormLabel>
                  <FormControl>
                    <Input className="bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 py-6 px-3 focus:ring-0 focus:outline-0 lg:h-18" type="email" placeholder="Enter your work email" {...form.register("email")}/>
                  </FormControl>
                </FormItem>
                <FormItem className="col-span-2 md:col-span-1">
                  <FormLabel className="text-sm md:text-xl font-light">Phone Number</FormLabel>
                  <div className="grid grid-cols-6 gap-2">
                    <select
                      className="rounded-md border col-span-2 border-[#FFFFFF]/10 bg-[#FFFFFF]/5 text-white/80 px-3 py-2 focus:outline-none focus:ring-0 focus:border-[#FFFFFF]/20 lg:h-18"
                      {...form.register("phoneCode")}
                    >
                      {countryOptions.map((c: { code: string; label: string }) => (
                        <option key={c.code} value={c.code} className="bg-[#222] text-white max-h-[300px]">
                          {c.code} {c.label}
                        </option>
                      ))}
                    </select>
                    <FormControl>
                      <Input
                        placeholder="Phone number"
                        type="tel"
                        className="bg-[#FFFFFF]/5 col-span-4 border border-[#FFFFFF]/10 py-6 px-3 focus:ring-0 focus:outline-0 lg:h-18"
                        {...form.register("phone")}
                      />
                    </FormControl>
                  </div>
                </FormItem>
              </div>
              <FormItem>
                <FormLabel className="text-sm md:text-xl font-light">What are you looking to achieve?</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Translate my company documents..."
                    {...form.register("goal")}
                    className="bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 py-6 px-3 focus:ring-0 focus:outline-0 lg:h-18"
                  />
                </FormControl>
              </FormItem>
              <div className="flex justify-center pt-2">
                <Button
                  type="submit"
                  className="text-lg px-8 py-3 text-[#2C2C2C]"
                >
                  Book a Demo
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
} 