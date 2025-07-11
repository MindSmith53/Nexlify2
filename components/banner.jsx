"use client"

import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
import { useEffect, useRef } from "react"

const BannerSection = () => {

    const imageRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;

            if (scrollPosition > scrollThreshold) {
                imageRef.current.classList.add("scrolled")
            } else {
                imageRef.current.classList.remove("scrolled")
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])


    return <section className='w-full pt-36 md:pt-40 pb-10'>
        <div className="space-y-6 text-center">
            <div className="space-y-6 mx-auto">
                <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title">AI-Powered Solutions for <br />Job Seekers</h1>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">Our AI-powered solutions help you to automate your processes and make data-driven decisions.</p>
            </div>

            <div className="flex justify-center space-x-4">
                <Link href='/dashboard'>
                    <Button size="lg" className="px-8">Get Started</Button>
                </Link>
                <Link href='/'>
                    <Button size="lg" className="px-8" variant="outline">Watch a demo</Button>
                </Link>
            </div>

            <div className="image-wrapper mt-5 md:mt-0">
                <div ref={imageRef} className="image-container">
                    <Image src={"/banner.jpeg"} width={1280} height={720} alt="Dasboard Preview" className="rounded-lg shadow-2xl border mx-auto" priority />
                </div>
            </div>
        </div>
    </section>
}

export default BannerSection