import app from "./app";
import { PORT } from "./configs/app.config";

app.listen(PORT, ()=>{
    console.log(`Server listening on http://localhost:${PORT}`)
})