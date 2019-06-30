const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'name': '홍길동',
            'image': 'https://placeimg.com/64/64/1',
            'birth':'961222',
            'gender': '남자',
            'job': '대학생'
          },
          {
            'id': 2,
            'name': '김보',
            'image': 'https://placeimg.com/64/64/2',
            'birth':'121212',
            'gender': '여자',
            'job': '고졸'
          },
          {
            'id': 3,
            'name': '석보',
            'image': 'https://placeimg.com/64/64/3',
            'birth':'454544',
            'gender': '남자',
            'job': '대머리'
          }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));