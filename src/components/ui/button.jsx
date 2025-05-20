import Link from "next/link"

const Button = ({href, children}) =>{
    return(
        <Link href={href||"#"} className="h-10 rounded-lg inline-flex items-center justify-center px-8 bg-[#232323] text-white">
            {children}
        </Link>
    )
}

const ButtonOutline = ({href, children}) =>{
    return(
        <Link href={href||"#"} className="h-10 rounded-lg inline-flex items-center justify-center px-8 border border-white text-white transition-colors duration-200 ease-in-out hover:bg-white hover:text-main-black">
            {children}
        </Link>
    )
}

export {
    Button,
    ButtonOutline
}