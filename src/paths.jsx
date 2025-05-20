//Con queste funzioni definiamo in modo univoco le basi degli url da utilizzare all'interno del nostro portfolio
//In questo modo abbiamo un'unica fonte di verità

export const getHomepagePath = () => { return `/`}

export const getCvPath = () =>{ return `/docs/curriculum-vitae-nome-cognome.pdf`}

export const getAboutPath = () =>{ return `/chi-sono`}

export const getPortfolioSinglePath = (slug) =>{ return `/portfolio/${slug}`}