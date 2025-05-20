import Link from "next/link"
import Image from "next/image"

import { Wrapper } from "./wrapper"

import { LucideCalendar, LucideLink } from "lucide-react"

import { formatDate } from "@/lib/utils"

const PortfolioHeader = ({projectName, excerpt, publishedDate, projectLink, cover}) => {
    return (
        <section className="pt-24 pb-6">
            <Wrapper>
                <div className="space-y-12">
                    <div className="space-y-6">
                        <h1 className="text-4xl leading-tight font-semibold tracking-tight">{projectName}</h1>
                        <p>{excerpt}</p>
                        <div className="flex gap-x-6">
                            <div className="flex items-center gap-x-2">
                                <LucideCalendar className="w-5 h-5" />
                                <span className="text-sm">{formatDate(publishedDate)}</span>
                            </div>
                            {
                                projectLink?.url &&
                                <Link href={projectLink.url} className="flex items-center gap-x-2">
                                    <LucideLink className="w-5 h-5" />
                                    <span className="text-sm">{projectLink?.text || "Vai al progetto"}</span>
                                </Link>
                            }
                        </div>
                    </div>
                    <div className="mt-8">
                        <Image src={cover.url} width={1000} height={1000} alt={cover?.alt || "Portfolo"} className="rounded-lg" />
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export {
    PortfolioHeader
}