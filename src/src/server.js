import connectDb from "./config/db.js";
import app from "./index.js";

const PORT = 5454;
app.listen(PORT, async() => {
    await connectDb()
  console.log(`API listening on PORT: ${PORT}`);
});
