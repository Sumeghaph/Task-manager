// // // Middleware
// // app.use(cors({
// //   origin: [
// //     "http://localhost:5173",
// //     "https://task-manager-rho-rust.vercel.app"
// //   ],
// //   credentials:true
// // }))

// // app.use(express.json())
// // app.use(cookieParser())

// // // Routes
// // app.use("/api/auth", authRoutes)
// // app.use("/api/users", userRoutes)
// // app.use("/api/tasks", taskRoutes)
// // app.use("/api/reports", reportRoutes)

// // app.use("/uploads", express.static(path.join(__dirname, "uploads")))


// // // Start server
// // app.listen(process.env.PORT || 3000, () => {
// //   console.log(`Server is running on port ${process.env.PORT || 3000}`)
// // })

// const app = express();

// app.use(cors({
//   origin: function (origin, callback) {
//     const allowedOrigins = [
//       "http://localhost:5173",
//       "https://task-manager-rho-rust.vercel.app"
//     ];

//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   credentials: true
// }));

// app.options("*", cors());

// app.use(express.json());
// app.use(cookieParser());

// app.use("/api/auth", authRoutes);
// app.listen(process.env.PORT || 3000, () => {
//   console.log("Server running");
// });
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"

import authRoutes from "./routes/auth.route.js"
import userRoutes from "./routes/user.route.js"
import taskRoutes from "./routes/task.route.js"
import reportRoutes from "./routes/report.route.js"

dotenv.config()

const app = express()

// CORS FIRST
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://task-manager-rho-rust.vercel.app"
  ],
  credentials: true,
  methods: ["GET","POST","PUT","DELETE","OPTIONS"],
  allowedHeaders: ["Content-Type","Authorization"]
}))

app.options("*", cors())

// other middleware
app.use(express.json())
app.use(cookieParser())

// routes AFTER middleware
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/tasks", taskRoutes)
app.use("/api/reports", reportRoutes)


app.listen(process.env.PORT || 3000, () => {
  console.log("Server running")
})