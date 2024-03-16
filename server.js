import express from "express";

const server = express();

server.use(express.json());

const port = 5000;

server.post("/calculator", (req, res) => {
  try {
    const data = req.body;

    if (data.operation === "+") {
      return res.json({
        result: data.x + data.y,
      });
    } else if (data.operation === "-") {
      return res.json({
        result: data.x - data.y,
      });
    } else if (data.operation === "x") {
      return res.json({
        result: data.x * data.y,
      });
    } else {
      return res.json({
        message: `wrong operation`,
      });
    }
  } catch (error) {
    console.log(`${JSON.stringify(error)}`);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
