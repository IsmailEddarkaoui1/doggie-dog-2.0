import * as React from 'react'
import {graphql} from 'gatsby'
import Layout from '../../components/layout'
import {GatsbyImage, getImage} from 'gatsby-plugin-image'
import Dog from "../../components/dog"
import {
    hero,
    section,
    subtitle,
    artists,
    description
} from "../../page.module.css"


const DogsPage = ({
    data: {
        allWpDog: {
            edges: dogsInfo
        },
        wpPage: {
            dogsPageFields
        }
    }
}) => {
    const image = getImage(dogsPageFields.headerDogs.picture.localFile)

    return (
        <Layout pageTitle="Dogs of doggie-dog Agency">
            <GatsbyImage className={hero}
                image={image}
                alt={
                    dogsPageFields.headerDogs.picture.altText
                }/>
            <div className={section}>
                <h2 className={subtitle}>
                    {
                    dogsPageFields.headerDogs.title
                }</h2>
                <div className={description}
                    dangerouslySetInnerHTML={
                        {__html: dogsPageFields.headerDogs.description}
                    }/>
                <div className={artists}>
                    {
                    dogsInfo.map(({node: dog}) => (
                        <Dog key={
                                dog.id
                            }
                            slug={
                                dog.slug
                            }
                            dog={dog}/>
                    ))
                } </div>
            </div>
        </Layout>
    )
}

export const query = graphql `
query {
  wpPage(slug: {eq: "dogs"}) {
    dogsPageFields {
      headerDogs {
        description
        title
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
          altText
        }
      }
    }
  }
  allWpDog {
    edges {
      node {
        dogFields {
          name
          age
          sex
          price
          wormed
          sterilized
          chieldFriendly
          description
          images {
            picture1 {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: false})
                }
              }
              altText
            }
          }
        }
        slug
        id
      }
    }
  }
}

`
export default DogsPage
