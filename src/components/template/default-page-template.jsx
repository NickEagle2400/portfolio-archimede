import { BannerCta } from "../layout/banner-cta"
import { Footer } from "../layout/footer"
import { Navigation } from "../layout/navigation"

const DefaultPageTemplate = ({children}) =>{
    return(
        <main>

            <Navigation />

            {children}

            <BannerCta />
            <Footer />
        </main>
    )
}

export {
    DefaultPageTemplate
}