import Image from "next/image"
import { Button } from "./ui/button"
import { getPortfolioSinglePath } from "@/paths"

const PortfolioCard = ({isReverse = false, projectName, excerpt, slug, cover}) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-y-8 gap-x-16">
            <div className={`col-span-1 space-y-4 ${isReverse ? `order-2 md:order-2` : `order-2 md:order-1`}`}>
                <h3 className="font-bold text-2xl">{projectName}</h3>
                <p className="text-zinc-700">{excerpt}</p>
                <Button href={getPortfolioSinglePath(slug)}>
                    Leggi il caso studio
                </Button>
            </div>
            <div className={`col-span-1 ${isReverse ? `order-1 md:order-1` : `order-1 md:order-2`}`}>
                <Image src={cover?.src || "/assets/cover.webp"} width={1000} height={1000} alt={cover?.alt || "Progetto"} className="h-full w-full object-cover block rounded shadow-sm" />
            </div>
        </div>
    )
}

export {
    PortfolioCard
}