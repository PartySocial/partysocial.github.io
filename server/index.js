const express = require('express');

const PORT = process.env.PORT || 80;

const app = express();

app.use(express.static('.'))

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});