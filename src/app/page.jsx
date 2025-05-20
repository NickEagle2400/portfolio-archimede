import Image from "next/image";
import Link from "next/link";

import { Wrapper } from "@/components/layout/wrapper";
import { Button } from "@/components/ui/button";
import { PortfolioCard } from "@/components/portfolio-card";
import { DefaultPageTemplate } from "@/components/template/default-page-template";

import { performRequest } from "@/lib/datocms";

import { GET_PREVIEW_PROJECTS } from "@/graphql/query";

import { getAboutPath } from "@/paths";

import { socialUrl } from "@/constants";

export const metadata = {
    title: "Nicolas Ricardi - Portofolio",
    description: "Sono Nicolas Ricardi ....",
};

export default async function Home() {

    const projects = await performRequest(GET_PREVIEW_PROJECTS)

    return (
        <DefaultPageTemplate>

            <section className="py-24">
                <Wrapper>
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <h1 className="text-4xl leading-tight font-semibold tracking-tight">Ciao, sono Nicolas Ricardi</h1>
                            <p className="text-zinc-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga accusantium in doloremque illum neque perspiciatis magnam distinctio, quae aliquid quos voluptatibus praesentium quis quaerat! Dolore dolor alias asperiores consequatur pariatur?</p>
                            <div className="flex gap-x-4">
                                <Link href={socialUrl.linkedin.url} target="_blank" className="underline text-zinc-500 inline-block text-sm">LinkedIn</Link>
                                <Link href={socialUrl.github.url} target="_blank" className="underline text-zinc-500 inline-block text-sm">GitHub</Link>
                            </div>
                        </div>
                        <div className="">
                            <Button href="#contatti">
                                Contatti
                            </Button>
                        </div>
                    </div>
                </Wrapper>
            </section>

            <section className="py-12">
                <Wrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-7 items-center gap-8">
                        <div className="col-span-1 lg:col-span-5 space-y-4">
                            <h2 className="text-3xl leading-tight font-semibold tracking-tight">La mia storia</h2>
                            <p className="text-zinc-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dignissimos aperiam atque ipsam voluptate quia, beatae, suscipit nam amet est, sequi iste corporis commodi.</p>
                            <Link href={getAboutPath()} className="text-zinc-500 underline text-sm">Scopri di più su di me</Link>
                        </div>
                        <div className="col-span-1 lg:col-span-2">
                            <Image src="/assets/avatar.png" width={1000} height={1000} alt="Me" className="h-full w-full object-cover block rounded-full" />
                        </div>
                    </div>
                </Wrapper>
            </section>

            <section className="py-24">
                <Wrapper>
                    <h2 className="text-3xl leading-tight font-semibold tracking-tight">I miei progetti</h2>
                </Wrapper>
                <Wrapper className={"!max-w-4xl"}>
                    <div className="space-y-24 mt-12">
                        {
                            projects.allPortfolios.map((item, i) => {
                                return(
                                    <PortfolioCard 
                                        key={i}
                                        {...item}
                                        isReverse={i%2===0 ? true : false}
                                    />
                                )
                            })
                        }
                    </div>
                </Wrapper>
            </section>

        </DefaultPageTemplate>
    );
}
