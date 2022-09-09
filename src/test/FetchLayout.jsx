import React, { useState, useEffect } from "react"

export default function FetchLayout({actividad}) {
  return (
    <div>
          {actividad.key ? (
              <div>
                  <p>Actividad: {actividad.activity}</p>
                  <p>Tipo: {actividad.type}</p>
              </div>
          ) : (
              <p>Loading...</p>
          )}
    </div>
  )
}
