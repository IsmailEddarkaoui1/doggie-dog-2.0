import * as React from 'react'
import {Link, graphql} from 'gatsby'
import Layout from '../../components/layout'

const DogsPage = ({
    data: {
        allWpDog: {
            edges
        }
    }
}) => {
    return (
        <Layout pageTitle="Dogs of Doggie-dog Agency">
            {
            edges.map((item) => {
                const dog = item.node.dogFields;
                const slug = item.node.slug;
                return <Link to={
                    `/dogs/${slug}`
                }>
                    <p key={
                        item.node.id
                    }>
                        {
                        dog.name
                    } </p>
                </Link>
        })
        } </Layout>
    )
}

export const query = graphql `
query{
    allWpDog {
      edges {
        node {
          id
          slug
          dogFields {
            name
            age
            sex
            price
            wormed
            sterilized
            chieldFriendly
            description
          }
        }
      }
    }
  }

`

export default DogsPage
