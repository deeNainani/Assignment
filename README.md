This project uses the create-react-app (https://github.com/facebookincubator/create-react-app) boilerplate project which is a new officially supported way to create single-page React applications. It offers a modern build setup with no configuration.

Steps to run the application:
1. git clone https://github.com/deeNainani/Invoice-app.git
2. cd Assignment
3. cd Invoice-app
4. npm install
5. npm run start-dev

Tech Stack that has been used is MERN (MongoDB/Express/React/Node.js) stack.

Frontend end part has been mainly built with React. The front end part of the application has been decomposed into the following components:
* App.jsx --> It is the main component of the application.
* Details.jsx --> Basically encapsulates the details of the customer ( Name, Email and DueDate)
* LineItems.jsx --> Internally renders the LineItem component and also renders the + button which helps in adding individual line items.
* LineItem.jsx --> Renders the individual line item with description and amount.
* Total.jsx --> Renders the readonly field total

The app has been decomposed multiple components, the reason behind that is Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.

The Backend part of the application uses Node.js and Express. Express provide a framework to set up our Node.js server. 