const axios = require('axios');
const chai = require('chai');
const expectedBreedCount = require('./expectedBreedCount.json');


// Count all sub breeds for a breed. If no subbreeds, should read 0
async function getBreedCount() {
    const response = await axios.get('https://dog.ceo/api/breeds/list/all');
    // COMPLETE MISSING CODE HERE:
    const dogsObject = response.data.message;

    console.log("response.data.message: ", dogsObject);

    for (let key in dogsObject) {
        let newObject = {
        [key]: dogsObject[key].length
      }
      console.log(newObject);
      let string
    }

// ...Data returned is an object with key:value (breeds: [array of all subbreeds])
// -Loop through each array

// -if length of array in value is 0, return 0
// -if length of array is not 0, return length of array in each value pair

//     const dogsObject = response.data.message;
//     for (var key in dogsObject) {
//     console.log(key, dogsObject[key].length);
// }



}//end of getBreedCount

// Get a picture of sub-breed. Ex: 'basset'
async function getRandomImageOfSubBreed(subBreed) {
    // COMPLETE MISSING CODE HERE:

}

// NO NEED TO MODIFY ANY LINES BELOW THIS POINT
// --------------------------------------------------------------------------
async function execute() {
    let breedCount = await getBreedCount();
    let image = await getRandomImageOfSubBreed('basset');
    console.log(breedCount);
    console.log(image);

    try {
        chai.expect(breedCount).to.deep.eq(expectedBreedCount);
        chai.expect(image).to.contain('https://images.dog.ceo/breeds/hound-basset/');
        console.log('PASSED: 👍');
    } catch (e) {
        console.log('FIX ME: 👎');
    }
}
execute();
