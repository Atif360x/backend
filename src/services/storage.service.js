const ImageKit = require("@imagekit/nodejs")
const { fill } = require("three/src/extras/TextureUtils.js")

const imagekit = new ImageKit({ 
    privateKey: "private_Vgkykgqnf5IVZr1rrnqKdbAmwVQ="
 })

 async function uploadFile (buffer) {
    const result = await imagekit.files.upload({  
        file: buffer,
        fileName: "image.jpg"
     })

     return result;
 }

 module.exports = uploadFile;