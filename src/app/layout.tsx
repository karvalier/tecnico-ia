"use client"
import Navbar from '@/components/Navbar'
import type { Metadata } from 'next'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import { Provider } from "react-redux"
import { store } from "../store/store";
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body >
      <Provider store={store}>
        <Navbar  />
        <div className="w-full flex items-stretch" >
        <Sidebar  />
        {children}
      
        </div>
      </Provider>
      </body>
    </html>
  )
}
