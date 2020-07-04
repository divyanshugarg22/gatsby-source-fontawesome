# gatsby-source-fontawesome

it's a beautiful plugin provide you the functionality to use fonts from local graphql schema. This plugin converts fontawesome json data to graphql schema.

## Why

Go to this Gatsby [example site](https://gatsby-source-fontawesome.netlify.app/)with Font Awesome icons. On Initial website load all fontawesome icons json data and load to your graphql schema. So, you can use from local graphql schema for search and other operations.

### Installation

gatsby-source-fontawesome requires [Node.js](https://nodejs.org/) v4+ to run.

```sh
$ yarn add gatsby-source-fontawesome

or

$ npm install --save gatsby-source-fontawesome
```

### How To Use

```sh
//In your gatsby-config.js
module.exports = {
  plugins: [`gatsby-source-fontawesome`],
}

```
