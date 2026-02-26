const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

let maintenanceMode = true;

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    if (maintenanceMode) {
        return res
            .status(503)
            .sendFile(path.join(__dirname, "public", "503.html"));
    }
    next();
});

app.get("/", (req, res) => {
    res.send("Website is running normally.");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});