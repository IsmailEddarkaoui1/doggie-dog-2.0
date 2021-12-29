import * as React from 'react'
import Layout from '../../components/layout'
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import {graphql} from 'gatsby'
import {
    header,
    headerInfo,
    headerPicture,
    artistName,
    artistRoles,
    artistDescription,
    artistInfo,
    artistPictures,
    artistPicture
} from "../../page.module.css"

const DogPage = ({
    data: {
        wpDog: {
            dogFields: dog,
            terms: {
                nodes: terms
            }
        }
    }
}) => {
    const image = getImage(dog.dogpicture.localFile)
    const picture1 = getImage(dog.images.picture1.localFile)
    const picture2 = getImage(dog.images.picture2.localFile)
    const picture3 = getImage(dog.images.picture3.localFile)


    return (
        <Layout pageTitle="Dog Template">
            <div className={header}>
                <div className={headerInfo}>
                    {
                    dog.name && <h3 className={artistName}>
                        {
                        dog.name
                    }</h3>
                }
                    <div className={artistRoles}>
                        {
                        terms.map((term, i) => (
                            <span key={i}>
                                {
                                term.name
                            }
                                {
                                i + 1 < terms.length && "- "
                            } </span>
                        ))
                    } </div>

                    <div className={artistDescription}
                        dangerouslySetInnerHTML={
                            {__html: dog.description}
                        }/>
                    <p className={artistInfo}>
                        <span>Name:
                        </span>
                        {
                        dog.name
                    }</p>
                    <p className={artistInfo}>
                        <span>Age:
                        </span>
                        {
                        dog.age
                    }</p>
                    <p className={artistInfo}>
                        <span>Sex:
                        </span>
                        {
                        dog.sex
                    }</p>
                    <p className={artistInfo}>
                        <span>Price:
                        </span>
                        {
                        dog.price
                    }</p>
                    <p className={artistInfo}>
                        <span>Wormed:
                        </span>
                        {
                        dog.wormed
                    }</p>
                    <p className={artistInfo}>
                        <span>Sterilized:
                        </span>
                        {
                        dog.sterilized
                    }</p>
                    <p className={artistInfo}>
                        <span>ChieldFriendly:
                        </span>
                        {
                        dog.chieldFriendly
                    }</p>

                </div>
                <GatsbyImage className={headerPicture}
                    image={image}
                    alt={
                        dog.dogpicture.altText
                    }/>

            </div>
            <div className={artistPictures}>
                <GatsbyImage className={artistPicture}
                    image={picture1}
                    alt={
                        dog.images.picture1.altText
                    }/>
                <GatsbyImage className={artistPicture}
                    image={picture2}
                    alt={
                        dog.images.picture2.altText
                    }/>
                <GatsbyImage className={artistPicture}
                    image={picture3}
                    alt={
                        dog.images.picture3.altText
                    }/>
            </div>
        </Layout>
    )
}

export const query = graphql `
query ($id: String) {
    wpDog(id: {eq: $id}) {
      dogFields {
        name
        age
        sex
        price
        wormed
        sterilized
        chieldFriendly
        description
        dogpicture {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          altText
        }
        images {
          picture1 {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          picture2 {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          picture3 {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
      terms {
        nodes {
          name
        }
      }
    }
  }`

export default DogPage
