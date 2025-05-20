import { Wrapper } from "./wrapper"

const Footer = () => {
    return (
        <footer className="">
            <Wrapper>
                <div className="flex justify-between items-center py-12 border-t border-zinc-200">
                    <p className="text-xs">&copy; {new Date().getFullYear()} Nicolas Ricardi</p>
                </div>
            </Wrapper>
        </footer>
    )
}

export {
    Footer
}