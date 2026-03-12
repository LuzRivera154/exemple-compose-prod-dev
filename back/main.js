import express from "express"
import cors from "cors"

const FRONT_ORIGIN = process.env.FRONT_ORIGIN;
const PORT = process.env.PORT;
if(!FRONT_ORIGIN){
    throw new Error("Missing env variable named FRONT_ORIGIN from backend")
}
if(!PORT){
    throw new Error("Missing env variable named PORT from backend")
}

const app = express()

app.use(cors([
    FRONT_ORIGIN
]))

app.get("/", (req, res) => {


    res.json({ msg: "API OK" })
})

app.listen(PORT, () => console.log("SERVER LISTEN"))