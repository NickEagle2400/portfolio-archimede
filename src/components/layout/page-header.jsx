import { Wrapper } from "./wrapper"

const PageHeader = ({title}) =>{
    return(
        <section className="pt-24 pb-8">
            <Wrapper>
                <h1 className="text-4xl leading-tight font-semibold tracking-tight">{title}</h1>
            </Wrapper>
        </section>
    )
}

export {
    PageHeader
}