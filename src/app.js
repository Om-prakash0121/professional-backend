import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//configure cors
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//Express should read JSON data sent by the client, but don't allow the JSON request body to be larger than 50 KB.
app.use(
  express.json({
    limit: "50kb",
  })
);

//Express should parse data sent in URL-encoded form format, with a maximum body size of 50 KB.
app.use(express.urlencoded({ extended: true, limit: "50kb" }));

// Make the files inside the public folder directly accessible through the browser.
app.use(express.static("public"));

app.use(cookieParser());

export default app;
