import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const icons = data.allFontAwesome.nodes.map(
    /**
     * @function
     * @param {object} obj
     * @param {object} obj.node
     * @returns {object}
     */
    node => node
  )

  const [filterTerm, setFilterTerm] = useState("")
  const [filteredIcons, setFilteredIcons] = useState([])

  /**
   * @description Callback that filters the icons by the searched filterTerm.
   */
  const filterIcons = () => {
    setFilteredIcons(
      icons.filter(
        icon => filterTerm.length > 2 && icon.id.indexOf(filterTerm) > -1
      )
    )
  }

  /**
   * @description sets the filterTerm state.
   * @param {InputEvent} event
   */
  const handleChange = event => {
    setFilterTerm(event.target.value)
    filterIcons()
  }

  /**
   * @description If use presses Enter, filter the icons.
   * @param {InputEvent} event
   */
  const handleSubmit = event => {
    event.preventDefault()
    if (filterTerm.length > 2) {
      filterIcons()
    }
  }

  let iconsMarkup

  if (filteredIcons.length > 0) {
    iconsMarkup = filteredIcons.map(icon => {
      return (
        <i
          role="button"
          tabIndex={0}
          key={icon.id}
          onKeyDown={() => {}}
          className={`fa fa-${icon.id} fa-2x iconclass`}
        />
      )
    })
  }
  console.log("iconsMarkup", iconsMarkup)
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>
        Gatsby source plugin to convert font-awesome json data as graphql schema
        and use for search icons locally.
      </p>
      <div style={{ width: "100%", height: 100 }}>
        <form noValidate onSubmit={handleSubmit}>
          <input type="text" value={filterTerm} onChange={handleChange} />
          <button type="submit">Search</button>
        </form>
        <div>{iconsMarkup}</div>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query {
    allFontAwesome {
      nodes {
        id
        label
        styles
      }
    }
  }
`
export default IndexPage
