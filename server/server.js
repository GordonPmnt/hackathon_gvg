const http = require("http");
const app = require('./app');
const { PORT } = require('./config')

const server = http.createServer(app);

server.listen(PORT, (err) => {
    if (err) {
      throw new Error("Server couldn't launch");
    }
    console.log(`Server is listening on ${PORT}`);
});