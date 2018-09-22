const withImages = require('next-images')
const fs = require('fs');

const dotenv = require('dotenv');
dotenv.config();
const privateEnv = dotenv.parse(fs.readFileSync('.env.private'))
for (var k in privateEnv) {
  process.env[k] = privateEnv[k]
}



const config = {
	serverRuntimeConfig: { // Will only be available on the server side
    mySecret: 'secret'
  },
  publicRuntimeConfig: { // Will be available on both server and client
    host: `${process.env.HOST}`,
  },
};

module.exports = withImages(config)

