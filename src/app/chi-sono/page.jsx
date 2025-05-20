import Image from "next/image";

import { Wrapper } from "@/components/layout/wrapper";
import { DefaultPageTemplate } from "@/components/template/default-page-template";
import { PageHeader } from "@/components/layout/page-header";

export const metadata = {
    title: "Nicolas Ricardi - Portofolio",
    description: "Sono Nicolas Ricardi ....",
};

export default function Home() {
    return (
        <DefaultPageTemplate>
            
            <PageHeader 
                title={"Chi sono"}
            />

            <section className="py-24">
                <Wrapper>
                    <div className="">
                        <div className="lg:-mx-16">
                            <Image src="/assets/avatar.png"  width={1000} height={1000} alt="Avatar" className="h-full w-full object-cover block rounded aspect-video" />
                        </div>
                        <div className="space-y-4 mt-12">
                            <h2 className="text-3xl leading-tight font-semibold tracking-tight">Freelance Front-End Developer</h2>
                            <p className="text-zinc-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dignissimos aperiam atque ipsam voluptate quia, beatae, suscipit nam amet est, sequi iste corporis commodi.</p>
                        </div>
                    </div>
                </Wrapper>
            </section>

        </DefaultPageTemplate>
    );
}
