# VRAD
Contributor: [Trond Makonese](https://github.com/Trond240) & [Tanisha L Davey](https://github.com/tanishalatoya)


## Abstract
**Technologies used:** _React, React Testing Library, Jest-DOM Library, Webpack_

VRAD is an application built with `create-react-app` that allows a user to book rentals around the Denver, CO area. The fetch API runs upon user login, gathering data related to listings within 4 Denver areas. Some of the focus points for this project included:

* Keeping state based components to a minimum, thus leveraging more functional components
* Becoming familiar with promises, nested fetch requests, and handling the UI based on acceptance of data
* Becoming familiar with routing and how to handle dynamic routes
* Writing tests for React components and some asynchronous functionality


## Demo
![image](https://media.giphy.com/media/d555ZiVfetDS2OPh9Q/giphy.gif)


## To Install
1. Fork this repo
1. clone down this repo
1. change into the directory
1. `npm install`
1. `npm start` to use the server (navigate to http://localhost:3000)

#### API Endpoints
| url | verb | options | sample response |
| ----|------|---------|---------------- |
| `http://localhost:3001/api/v1/areas` | GET | not needed | Array of all areas available to rent |
| `http://localhost:3001/api/v1/areas/:id` | GET | not needed | Object with detailed information for a specific area, including listings for that area |
| `http://localhost:3001/api/v1/listings/:id` | GET | not needed | Object with detailed information for a specific listing |



## Future Iterations
* Break out the fetch API into a separate file to reduce the side of the componentDidMount method on the App component

