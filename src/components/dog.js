import React from "react"
import {Link} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import {wrapper, image, dogInfo, dogName} from "./dog.module.css"


export const Dog = ({dog, slug}) => {
    const profile = getImage(dog.dogFields.images.picture1.localFile)
    return (
        <Link className={wrapper}
            to={slug}>
            <GatsbyImage className={image}
                image={profile}
                alt={
                    dog.dogFields.images.picture1.altText
                }/>
            <div className={dogInfo}>
                {
                dog.dogFields.name && <p className={dogName}>
                    {
                    dog.dogFields.name
                }</p>
            } </div>
        </Link>
    )
}

export default Dog;
