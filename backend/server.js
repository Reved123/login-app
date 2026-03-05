const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());           
app.use(express.json());  


app.post('/login', (req, res) => {
  const { username, password } = req.body;

  
  console.log("Login attempt:", username, password);

  if (username === 'admin' && password === 'admin') {
    return res.status(200).json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
});


app.get('/', (req, res) => res.send('Backend running'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));