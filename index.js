require('dotenv').config();
const server = require('./server.js');

PORT = process.env.PORT || 9001;

server.listen(PORT, () => {
    console.log(`Server has launched, listening on PORT ${PORT}`)
});