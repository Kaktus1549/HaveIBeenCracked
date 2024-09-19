"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DropdownMenuCheckboxes({
  setLogin,
  login,
}: {
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  login: boolean;
}) {
  return (
    <DropdownMenu
      open={login}
      onOpenChange={(open) => setLogin(open)} // This handles the state
    >
      <DropdownMenuTrigger
        asChild
        className="bg-transparent hover:bg-transparent border-0 border-transparent focus-visible:ring-transparent"
      >
        <Button
          variant="outline"
          className="text-white hover:text-white text-center md:text-2xl md:font-medium sm:text-xl 2xsm:text-lg"
        >
          Login
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mr-5 bg-login border-0 text-white">
        <DropdownMenuLabel>Work in progress</DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}