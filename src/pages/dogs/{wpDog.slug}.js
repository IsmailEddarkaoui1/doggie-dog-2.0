import * as React from 'react'
import Layout from '../../components/layout'
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import {graphql} from 'gatsby'


const DogPage = ({
    data: {
        wpDog: {
            dogFields: dog
        }
    }
}) => {
    const image = getImage(dog.images.picture1.localFile)

    return (
        <Layout pageTitle="Dogs Template">
            <div>
                <GatsbyImage image={image}
                    alt={
                        dog.images.picture1.altText
                    }/>

                <p>Name: {
                    dog.name
                }</p>
                <p>Age: {
                    dog.age
                }</p>
                <p>Sex: {
                    dog.sex
                }</p>
                <p>Price: € {
                    dog.price
                }</p>
                <p>Wormed: {
                    dog.wormed
                }</p>
                <p>Sterilized: {
                    dog.sterilized
                }</p>
                <p>ChieldFriendly: {
                    dog.chieldFriendly
                }</p>
                <div dangerouslySetInnerHTML={
                    {__html: dog.description}
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
            images {
                picture1 {
                  localFile {
                    childImageSharp {
                      gatsbyImageData(placeholder: BLURRED, width: 800, height: 500)
                    }
                  }
                  altText
                }
            }
        }
    }

}`

export default DogPage
