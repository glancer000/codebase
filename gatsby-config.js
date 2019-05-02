module.exports = {
    siteMetadata: {
        title: 'Codebase - Cross Platform Development Studio',
        author: 'Codebase'
    },
    plugins: [
        `gatsby-plugin-sass`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path: `${__dirname}/src/`
            }
        }
    ]
}
// in gatsby-config.js
