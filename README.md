# Dog Image Generator

This exercise should test basic knowledge of Node.js

To execute the exercise, type: `node dogImageGenerator.js`

## The correct solution should pass the following steps:

 1. Given a list of dog breeds from the dog.ceo API, what is the count of the sub breeds for each breed?
    - Expected Output: please look at `expectedBreedCount.json`

 2. Given a sub-breed, what is a random image of that dog using the random image generator API?
    - Expected Output: String of an image url

 3. Deploy a serverless function to view the image url found in step 2. 
    - https://medium.freecodecamp.org/i-just-deployed-a-serverless-app-and-i-cant-code-here-s-how-i-did-it-94983d7b43bd
    - Endpoint should follow the format: `https://{YOUR_SPECIFIC_URL}.execute-api.us-east-1.amazonaws.com/serverless-dog-image/{subBreed}`
    - Example endpoint would be: `https://0123456789.execute-api.us-east-1.amazonaws.com/serverless-dog-image/basset`
    - BONUS: Optimize performance by keeping the `https://dog.ceo/api/` responses in the warm area of the lambda (https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html)

We have supplied some starter code in `dogImageGenerator.js` to use as a starting point.
API Reference: https://dog.ceo/api/

## Things we'll be looking for:

- Minimize number of calls to the API
- Optimize performance
- Avoid callback hell
- When finished, we expect a URL to your aws lambda endpoint and a link to your github repository containing the code that is deployed to aws

## How to start

- Fork this repository :)
- Execute `node dogImageGenerator.js`
- Complete the code and follow the steps above