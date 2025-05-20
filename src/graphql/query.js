//File con tutte le query in GraphQL
//Si possono scrivere con GrapQL Playground e fare copia/incolla

export const GET_PROJECTS = `
query getProjects {
    allPortfolios {
        slug
    }
}
`

export const GET_PREVIEW_PROJECTS = `
query getProjects {
    allPortfolios {
        slug
        slug
        projectName
        excerpt
        cover {
            url
            alt
        }
    }
}
`

export const GET_SINGLE_PROJECT= `
query getSingleProject ($slug: String) {
    allPortfolios(filter: {slug: {eq: $slug}}) {
        _firstPublishedAt
        slug
        projectName
        excerpt
        projectLink
        cover {
            url
            alt
        }
        body {
            value
        }
    }
}
`