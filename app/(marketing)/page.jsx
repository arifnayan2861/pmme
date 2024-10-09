import { Medal } from "lucide-react";
import Link from "next/link";
import { Nunito_Sans } from "next/font/google";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nunito = Nunito_Sans({
  weight: ["200", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const MarketingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className={cn(
          "flex justify-center items-center flex-col",
          nunito.className
        )}
      >
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
          <Medal className="w-6 h-6 mr-2" />
          The best project management
        </div>
        <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
          PMME helps teams move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 p-2 rounded-md w-fit">
          <h1 className="font-bold">work forward</h1>
        </div>
      </div>
      <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto">
        Collaborate, manage projects and reach new productivity feats. From high
        rises to the home office, the way your team is unique - accomplish it
        all with PMME
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get PMME for free</Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
