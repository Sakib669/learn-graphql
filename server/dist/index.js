import express from "express";
import "dotenv/config";
const app = express();
const PORT = process.env.PORT || 5001;
app.get("/", (req, res) => {
    return res.json({ status: 200, message: "app is running for graphql" });
});
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
