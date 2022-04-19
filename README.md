# [Dao Directory](https://dao-onboard.netlify.app/)

<img width="1315" alt="Screen Shot 2022-04-19 at 5 27 08 AM" src="https://user-images.githubusercontent.com/38474161/163993514-03dfd803-b707-427f-a289-0707896c72ad.png">

A central directory of contributors for a DAO.

## Tech/framework used

Frontend tech stack:

- React JS
- CSS
- React Router v6
- [React Icons](https://react-icons.github.io/react-icons/)

Backend tech stack:

- Node
- Express
- MongoDB

Frontend is hosted on Netlify. Backend is hosted on AWS EC2 instance.

Production site is deployed [HERE](https://dao-onboard.netlify.app/)

## Installation

To run the client side code use the following commands:

```
$ cd client
$ npm install
$ npm run start
```

Before running the server side code be sure that you have added your mongoDbURI to the .env in the server folder

```
$ cd server
$ touch .env
$ cp .env.example .env
$ npm install
$ nodemon server.js
```

## Contribute

Feel free to use code however you would like.

If you have any questions feel free to email me at toshvelaga@gmail.com

## License

MIT © Tosh Velaga
