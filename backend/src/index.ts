import express from 'express';
import diaryRouter from "./routes/diaries";

const app = express();
app.use(express.json());


const PORT = 3002;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/diaries', diaryRouter);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// https://fullstackopen.com/en/part9/typing_an_express_app
// https://fullstackopen.com/en/part9/typing_an_express_app#implementing-the-functionality 