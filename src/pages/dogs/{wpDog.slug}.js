import * as React from 'react'
import Layout from '../../components/layout'
import {graphql} from 'gatsby'


const DogPage = ({
    data: {
        wpDog: {
            dogFields: dog
        }
    }
}) => {
    return (
        <Layout pageTitle="Dogs Template">
            <div>
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
        }
    }
  }
`

export default DogPage
