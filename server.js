
const express =require("express");
const cors =require("cors");
const dotenv=require("dotenv");
const formRoute =require( "./routes/formRoute.js");

const app=express();
dotenv.config();
app.use(express.json());
app.use(cors());


app.use(cors({ origin: "*" }));
app.get("/", (req, res) => {
  res.send("✅ I am backend! Server is running successfully.");
});

app.use("/api/form",formRoute)



// app.use((err, req, res, next) => {
//   console.error(" Server error:", err);
//   res.status(500).json({ success: false, message: "Internal Server Error" });
// });
// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    
  console.log(`🚀 Server running in ${process.env.NODE_ENV || "dev"} on port ${PORT}`)
);

