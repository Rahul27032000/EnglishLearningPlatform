"use client";

import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PostSection from "@/components/PostSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <PostSection />
    </div>
  );
}
