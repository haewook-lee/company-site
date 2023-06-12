"use client"
import * as React from "react"
import { Map, Marker } from "pigeon-maps"

export default function MapGrid() {
  return (
    <div className="my-64 mx-auto max-w-4xl">
      <Map height={400} defaultCenter={[43.6482, -79.3832]} defaultZoom={14}>
        <Marker width={50} anchor={[43.6482, -79.3832]} />
      </Map>
      <div className="table mx-auto">
        <div className="pt-6 block text-white align-text-top m-auto text-xl">
          <h3 className="px-2 md:px-12 lg:px-16">
            <span className="border-b border-gray-400 py-2">
              Toronto Office
            </span>
          </h3>
          <div className="py-6 px-2 md:px-12 lg:px-16">
            489 King St W<br />
            Toronto, ON, Canada
            <br />
            M5V 1K4
            <br />
            +1 (123) 456-7890
          </div>
        </div>
      </div>
    </div>
  )
}
