'use client'

import { Calendar } from "@/components/ui/calendar"
import { useState } from "react";

export default function Page() {

  const [date, setDate] = useState<Date | undefined>(new Date())
  const [multipleDate, setMultipleDate] = useState<Date[] | undefined>([])

  const smallDate = date?.toLocaleDateString("es-ES", { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }).replace(",", ""
  )

  return (
    <div className="flex-col sm:flex-wrap sm:flex sm:flex-row gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={ (date) => date.getDay() === 0 || date.getDay() === 6 }
      />
       <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
        disabled={ (date) => date < new Date()}
      />
       <Calendar
        mode="multiple"
        selected={multipleDate}
        onSelect={setMultipleDate}
        className="rounded-md border"
      />

      <div>
        <h1 className="text-3xl">Información</h1>
        <div className="border-b"></div>
        <p>{ smallDate }</p>
        <p>{ multipleDate?.map((date) => date.toLocaleDateString("es-ES")).join(", ") }</p>
      </div>
    </div>
  );
}