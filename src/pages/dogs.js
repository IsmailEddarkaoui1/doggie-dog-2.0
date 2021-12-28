import * as React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'

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
                return <p key={
                    item.node.id
                }>
                    {
                    dog.name
                }
                    {
                    dog.age
                }
                    {
                    dog.sex
                }
                    {
                    dog.price
                }
                    {
                    dog.wormed
                }
                    {
                    dog.sterilized
                }
                    {
                    dog.chieldFriendly
                }
                    {
                    dog.description
                } </p>
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
