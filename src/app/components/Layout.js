import React, { Children } from 'react'
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({title, children}) {
  return (
    <>
    <Head>
        <title> {title? title + ' - Color My Space' : 'Color My Space'} </title>
        <meta name="description" conten="ecommerce website" />
        <link rel="icon" href='/favicon.ico' /> 
    </Head>
    <div className="flex min-h-screen flex-col justify-between ">
        <header>
        <nav className="flex h-12 items-center px-4 justify-between shadow-md">
        <Link href="/" className="text-lg font-bold">
            Colour My Space
            </Link>
        </nav>
        </header>

        <main>
            {children}
        </main>
        
        <footer className="flex h-10 justify-center items-center shadow-inner">
        <p>Copyright © 2023 Colour My Space</p>

        </footer>
    </div>
    </>
    
  )
}
