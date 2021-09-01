require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
  },
  plugins: [
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME_ONE,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN_ONE,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN_ONE,
        schemas: {
          landing: require("./src/types/landing.json"),
        },
        typePrefix: "firstRepo",
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.GATSBY_PRISMIC_REPO_NAME_TWO,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN_TWO,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN_TWO,
        schemas: {
          team: require("./src/types/team.json"),
        },
        typePrefix: "secondRepo",
      },
    },
  ],
};
