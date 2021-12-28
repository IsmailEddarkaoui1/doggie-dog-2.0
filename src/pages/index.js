import * as React from 'react'
import Layout from '../components/layout'
import {StaticImage} from 'gatsby-plugin-image'

const IndexPage = () => {
    return (
        <main>
            <Layout pageTitle="Welcome to the Dog asylum!">
                <p>Buy your dog here. For only 20.99 euros.</p>
                <StaticImage alt="My new dogs" src="../images/dogs.png"/>
            </Layout>
        </main>
    )
}

export default IndexPage
