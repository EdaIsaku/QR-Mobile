import express from "express";

import path from "path";

const app = express();

const PORT = process.env.PORT || 3000;
let publicPath = path.join(__dirname, "public");

app.use(express.static(publicPath));

app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
});
