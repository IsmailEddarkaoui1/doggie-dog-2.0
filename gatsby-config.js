module.exports = {
    siteMetadata: {
        title: "Doggie-dog",
        description: "Doggie-dogs is founded since 1998. That is when I was born. My dawgs are the strongest.",
        author: "@gatsbyjs",
        siteUrl: "https://gatsbystarterdefaultsource.gatsbyjs.io/"
    },
    plugins: [
        "gatsby-plugin-image", "gatsby-plugin-sharp", {
            resolve: "gatsby-source-wordpress",
            options: {
                url: "http://doggiedog.local/graphql"
            }
        },
    ]
};
