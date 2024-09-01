"use client"

import * as React from "react"
import { FaGlobe } from "react-icons/fa";


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./Dropdown"

export function LanguageDropdown() {
  const [position, setPosition] = React.useState("English")

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
      <div className="flex cursor-pointer items-center space-x-2">
            <FaGlobe />
            <span className="font-bold">EN</span>
          </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-8 bg-black bg-opacity-50">
        <DropdownMenuLabel>Languages</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="English">English</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Hindi">Hindi</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Marathi">Marathi</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}




