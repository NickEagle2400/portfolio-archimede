import Link from "next/link"

import { Button } from "../ui/button"
import { Wrapper } from "./wrapper"

import { getCvPath, getHomepagePath } from "@/paths"

const Navigation = () => {
    return (
        <nav className="">
            <Wrapper className={"!max-w-4xl"}>
                <div className="flex justify-between items-center pt-6">
                    <p className="font-bold"><Link href={getHomepagePath()}>Nicolas Ricardi</Link></p>
                    <div>
                        <Button href={getCvPath()}>
                            Scarica CV
                        </Button>
                    </div>
                </div>
            </Wrapper>
        </nav>
    )
}

export {
    Navigation
}