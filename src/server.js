import express from "express";
import morgan from "morgan";

const PORT = 4000;
const app = express();
const logger = morgan("dev");

const home = (req, res) => {
    console.log("I will respond.");
    return res.send("<h1>Hello!</h1>");
};

const login = (req, res) => {
    console.log("You logged in now");
    return res.send("LOGIN");
};

app.use(logger);
app.get("/", home);
app.get("/login", login);

const handleListening = () =>
    console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);