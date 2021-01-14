# MERN-Example-App
Real world example of MERN (Mongo + Express + React + Nodejs). It contains complete code of running
 - api on node server
 - ui in react
 - db in mongo

## Dependencies
 - Node js 14 or above
 - Mongo DB community edition
 
## Mongo DB intilization
 - Install Mongo DB community edition
 - Create DB named test
 - Create collection named User
 - Insert some data in this form [{ firstName: 'User1', lastName: 'L1', email: 'E1' }, { firstName: 'User2', lastName: 'L2', email: 'E2' }]
 
## Notes
 - Node server is hosted at 3080. You can change the port
 - React is hosted at 3000. You can change the port
 - For development api and ui are hosted on different ports
 - For production build the ui project. It will create the final code in build folder. api project then uses files form this folder
