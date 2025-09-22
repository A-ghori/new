const ImageKit = require ("imagekit");

require('dotenv').config();
const imagekit = new ImageKit ({
    publicKey:process.env.IMAGEKIT_PUBLIC_KEY,

    privateKey:process.env.IMAGEKIT_PRIVATE_KEY,

    urlEndpoint:process.env.IMAGEKIT_URL_ENDPOINT
})

async function uploadFile(file, fileName){
    try{

        const result = await imagekit.upload({
            file: file,//required
            fileName: fileName// required
        })
        return result 
    } catch(err){
        console.log("Error from ImageKit", err.message);
        throw err
    }
    }

module.exports = {
    uploadFile
}