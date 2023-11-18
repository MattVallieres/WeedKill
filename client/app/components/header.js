"use client"
import Link from "next/link"

export const Header = () => {
    return (
        <>
            <nav className="bg-black text-slate-100 p-[15px]">
                <div className="flex justify-between">
                    <Link href="/" className="uppercase text-2xl text-bold">Weed Kill</Link>
                    <div className="flex">
                        <Link href="/services" className="text-lg mr-4">Services</Link>
                        <Link href="/prices" className=" text-lg mr-4">Prices</Link>
                        <Link href="/book" className="text-lg mr-4">Book</Link>
                        <Link href="/login" className="text-lg">Login</Link>
                    </div>
                </div>
            </nav>
        </>
    )
}