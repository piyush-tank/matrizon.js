'use client';

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function OnboardingPage() {
  const { user } = useUser();
  const router = useRouter();
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    userContact: "",
    organizationName: "",
    organizationEmail: "",
    organizationSize: "",
    organizationContact: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/onboarding", {
      method: "POST",
      body: JSON.stringify({
        userId: user?.id,
        email: user?.primaryEmailAddress?.emailAddress,
        imageUrl: user?.imageUrl,
        ...form,
      }),
    });

    if (res.ok) {
      router.push("/dashboard");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-8 space-y-6 border rounded-lg shadow-sm">
      <h1 className="text-3xl font-bold text-center">Complete Onboarding</h1>

      <div className="grid grid-cols-1 gap-4">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" name="firstName" placeholder="First Name" onChange={handleChange} />
        </div>

        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" name="lastName" placeholder="Last Name" onChange={handleChange} />
        </div>

        <div>
          <Label htmlFor="userContact">Your Contact Number</Label>
          <Input id="userContact" name="userContact" placeholder="Your Contact Number" onChange={handleChange} />
        </div>

        <div>
          <Label htmlFor="organizationName">Organization Name</Label>
          <Input id="organizationName" name="organizationName" placeholder="Organization Name" onChange={handleChange} />
        </div>

        <div>
          <Label htmlFor="organizationEmail">Organization Email</Label>
          <Input
            id="organizationEmail"
            name="organizationEmail"
            type="email"
            placeholder="Organization Email"
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="organizationContact">Organization Contact Number</Label>
          <Input
            id="organizationContact"
            name="organizationContact"
            placeholder="Organization Contact Number"
            onChange={handleChange}
          />
        </div>

        <div>
          <Label htmlFor="organizationSize">Organization Size</Label>
          <Select onValueChange={(value) => setForm((prev) => ({ ...prev, organizationSize: value }))}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Organization Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-10">1-10</SelectItem>
              <SelectItem value="11-50">11-50</SelectItem>
              <SelectItem value="51-200">51-200</SelectItem>
              <SelectItem value="201+">201+</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button type="submit" className="w-full">
        Submit
      </Button>
    </form>
  );
}
