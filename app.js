require('dotenv').config();
const express = require("express");
const { Pool } = require("pg");

const app = express();

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
});

app.get("/", async (req, res) => {
	  try {
		      await pool.query(
			            "CREATE TABLE IF NOT EXISTS visits(id SERIAL PRIMARY KEY)"
			          );

		      await pool.query("INSERT INTO visits DEFAULT VALUES");

		      const result = await pool.query(
			            "SELECT COUNT(*) FROM visits"
			          );

		      res.send(`Total manthewise visitors: ${result.rows[0].count}`);
		    } catch (err) {
			        res.send(err.message);
			      }
});

app.get("/visits", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT COUNT(*) FROM visits"
    );

    res.status(200).json({
      totalVisitors: Number(result.rows[0].count),
    });

  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});


app.get("/health", async (req, res) => {
  try {
    await pool.query("SELECT 1");

    res.status(200).json({
      status: "healthy",
      database: "connected",
    });
  } catch (err) {
    res.status(500).json({
      status: "unhealthy",
      database: "disconnected",
    });
  }
});



app.listen(3000, () => {
	  console.log("Server running on port 3000");
});
