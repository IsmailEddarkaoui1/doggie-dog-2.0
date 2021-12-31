import * as React from "react"
import Layout from "../components/layout"
import {graphql} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import Dog from "../components/dog"
import {
    header,
    headerInfo,
    headerPicture,
    headerTitle,
    headerDescription,
    CTA,
    subtitle,
    section,
    dogs
} from "../page.module.css"

const IndexPage = ({
    data: {
        wpPage: {
            homePageFields
        }
    }
}) => {
    const image = getImage(homePageFields.headerHome.picture.localFile)

    return (
        <Layout>
            <div className={header}>
                <div className={headerInfo}>
                    <h1 className={headerTitle}>
                        {
                        homePageFields.headerHome.title
                    }</h1>
                    <div className={headerDescription}
                        dangerouslySetInnerHTML={
                            {__html: homePageFields.headerHome.description}
                        }/>
                    <a className={CTA}
                        target="__blank"
                        href={
                            homePageFields.callToAction.link
                    }>
                        {
                        homePageFields.callToAction.linkText
                    } </a>
                </div>
                <div>
                    <GatsbyImage image={image}
                        className={headerPicture}
                        alt={
                            homePageFields.headerHome.picture.altText
                        }/>
                </div>
            </div>
            <div className={section}>
                <h2 className={subtitle}>
                    {
                    homePageFields.featuredDogs.title
                }</h2>
                <p>{
                    homePageFields.featuredDogs.description
                }</p>
                <div className={dogs}>
                    {
                    homePageFields.featuredDogs.dogs.map(dog => (
                        <Dog slug={
                                `dogs/${
                                    dog.slug
                                }`
                            }
                            key={
                                dog.id
                            }
                            dog={dog}/>
                    ))
                } </div>
            </div>
        </Layout>
    )
}

export const query = graphql `
query  {
    wpPage(slug: {eq: "home"}) {
      homePageFields {
        headerHome {
          description
          title
          picture {
            altText
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, width: 500, height: 500)
              }
            }
          }
        }
        callToAction {
          link
          linkText
        }
        featuredDogs {
          dogs {
            ... on WpDog {
              id
              slug
              dogFields {
                name
                images {
                  picture1 {
                    altText
                    localFile {
                      childImageSharp {
                        gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: false})
                      }
                    }
                  }
                }
              }
            }
          }
          title
          description
        }
      }
    }
  }
  
`

export default IndexPage
