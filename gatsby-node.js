const crypto = require('crypto');
const axios = require('axios');

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;
  const fetchFontsData = () =>
    axios.post('https://api.fontawesome.com/all', {
      query: `{
  release(version: "5.13.0") {
    icons {
      id
      label
      styles
    }
  }
}`,
    });

  const fonts = await fetchFontsData();
  fonts.data.data.release.icons.forEach((icon) => {
    const { id, label, styles } = icon;
    const userNode = {
      parent: `__SOURCE__`,
      internal: {
        type: `FontAwesome`,
      },
      children: [],
      id,
      label,
      styles,
    };
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(userNode))
      .digest(`hex`);
    userNode.internal.contentDigest = contentDigest;
    createNode(userNode);
  });
  return;
};
