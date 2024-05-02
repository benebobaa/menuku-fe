import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "../ui/button"
import { toast } from "sonner"

export function CarouselVoucher() {
  return (
    <Carousel className="w-full max-w-sm py-2">
      <CarouselContent className="-ml-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
              <div className="flex items-center space-x-4 rounded-md border p-4">
                <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                    50% OFF
                    </p>
                    <p className="text-sm text-muted-foreground">
                    Berlaku hingga 1 Juni 2024
                    </p>
                </div>
                <Button className="bg-slate-500" onClick={()=> {
                    toast("Congratulations!", {
                        description: "Kamu berhasil claim voucher 50% OFF!",
                        action: {
                          label: "Okay",
                          onClick: () => console.log("Undo"),
                        },
                      })
                }}>Claim</Button>
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
