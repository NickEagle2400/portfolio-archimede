import { ButtonOutline } from "../ui/button"
import { Wrapper } from "./wrapper"

import { emailUrl } from "@/constants"

const BannerCta = () =>{
    return(
        <section className="py-16 px-4 md:px-0" id="contatti">
            <Wrapper className={"bg-main-black py-16 px-6 rounded-2xl"}>
                <div className="flex flex-col items-center gap-8">
                    <h2 className="text-3xl leading-tight font-semibold tracking-tight text-white text-center">Vuoi entrare in contatto con me?</h2>
                    <ButtonOutline href={emailUrl}>
                        Scrivimi una mail
                    </ButtonOutline>
                </div>
            </Wrapper>
        </section>
    )
}

export {
    BannerCta
}