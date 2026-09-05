const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Node.js Docker Application</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                        margin-top: 100px;
                    }
                    h1 {
                        color: #333;
                    }
                    p {
                        font-size: 20px;
                    }
                </style>
            </head>
            <body>
                <h1>Welcome to My Node.js Application</h1>
                <p>Successfully deployed using Docker!</p>
                <p>TechCrush Cloud Computing Assignment</p>
            </body>
        </html>
    `);
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Application running on port ${PORT}`);
});
