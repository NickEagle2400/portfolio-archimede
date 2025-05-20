import { performRequest } from "@/lib/datocms";

import { DefaultPageTemplate } from "@/components/template/default-page-template";
import { PortfolioHeader } from "@/components/layout/portfolio-header";
import { Wrapper } from "@/components/layout/wrapper";

import { StructuredText } from "react-datocms/structured-text";
import { GET_PROJECTS, GET_SINGLE_PROJECT } from "@/graphql/query";


export async function generateStaticParams() {
    const data = await performRequest(GET_PROJECTS);

    return data.allPortfolios.map(project => ({
        slug: project.slug,
    }));
}

export const metadata = async (params) => {

    const { slug } = await params
    const data = await performRequest(GET_SINGLE_PROJECT, { variables: { slug: slug } })

    const project = data.allPortfolios[0]

    return({
        title: project.projectName,
        description: project.excerpt,
    })
};

const PortfolioSinglePage = async ( {params} ) => {

    const { slug } = await params
    const data = await performRequest(GET_SINGLE_PROJECT, { variables: { slug: slug } })

    const project = data.allPortfolios[0]

    return (
        <DefaultPageTemplate>

            <PortfolioHeader
                projectName={project.projectName}
                publishedDate={project._firstPublishedAt}
                excerpt={project.excerpt}
                cover={project.cover}
                projectLink={{
                    url: project.projectLink,
                }}
            />

            <article className="pt-12 pb-24">
                <Wrapper>
                    <StructuredText data={project.body} />
                </Wrapper>
            </article>

        </DefaultPageTemplate>
    )
}

export default PortfolioSinglePage