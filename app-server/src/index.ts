import express, {Request, Response} from 'express';
import cors from 'cors';
import "dotenv/config";

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get("/api/test", async (req: Request, res: Response) => {
    res.json({ message: "new app endpont!!!"});
});

app.listen(7000, () => {
    console.log("server rinning on localhost:7000");
    
})