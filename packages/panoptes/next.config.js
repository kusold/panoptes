require('dotenv').config();
const withImages = require('next-images')

const config = {
	serverRuntimeConfig: { // Will only be available on the server side
    mySecret: 'secret'
  },
  publicRuntimeConfig: { // Will be available on both server and client
		host: `${process.env.HOST}`,
  },
};

module.exports = withImages(config)

