import fs from 'fs';
import Jimp = require('jimp');
import { reject } from 'bluebird';

// filterImageFromURL
// helper function to download, filter, and save the filtered image locally
// returns the absolute path to the local image
// INPUTS
//    inputURL: string - a publicly accessible url to an image file
// RETURNS
//    an absolute path to a filtered image locally saved file
export async function filterImageFromURL(inputURL: string): Promise<string> {
     return new Promise( async (resolve, reject) =>   {
        const outpath = '/tmp/filtered.'+Math.floor(Math.random() * 2000)+'.jpg';
        return await Jimp.read(inputURL).then(image => {
        return image.resize(256, 256) // resize
        .quality(60) // set JPEG quality
        .greyscale() // set greyscale
        .write(__dirname+outpath, (img) => {
            resolve(__dirname+outpath);
        });
      }).catch(reject);
    });
}




// deleteLocalFiles
// helper function to delete files on the local disk
// useful to cleanup after tasks
// INPUTS
//    files: Array<string> an array of absolute paths to files
export async function deleteLocalFiles(files:Array<string>){
    for( let file of files) {
        fs.unlinkSync(file);
    }
}

// isValidUrl
// helper function to validate if input is a valid url
// returns boolean if the url is valid
// INPUTS
//    url: string - a publicly url
// RETURNS
//    boolean if its a valid url or not.
export function isValidUrl(url: string)  {
    try {
      new URL(url);
    } catch (_) {
      return false;  
    }
    return true;
}