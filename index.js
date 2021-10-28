const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());
const port =5000;

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  const users = [
      { id: 0, name: 'Sha',email: 'fkdsk2@mail.com',phone: '0122333'},
      { id: 1, name: 'Sha',email: 'fkdsk2@mail.com',phone: '0122333'},
      { id: 2, name: 'Aha',email: 'fkdsk2@mail.com',phone: '0122333'},
      { id: 3, name: 'Kha',email: 'fkdsk2@mail.com',phone: '0122333'},
      { id: 4, name: 'Fha',email: 'fkdsk2@mail.com',phone: '0122333'},
      { id: 5, name: 'Kha',email: 'fkdsk2@mail.com',phone: '0122333'},
      { id: 6, name: 'Fha',email: 'fkdsk2@mail.com',phone: '0122333'},
      { id: 7, name: 'Kha',email: 'fkdsk2@mail.com',phone: '0122333'},
      { id: 8, name: 'Fha',email: 'fkdsk2@mail.com',phone: '0122333'}
  ]

  app.get('/users',(req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResults = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResults);
    }
    else {
        res.send(users)
    }
  });

  app.post('/users',(req, res) => {
      const newUser = req.body;
      newUser.id = users.length;
      users.push(newUser);
      console.log('hit',req.body);
    //   res.send('post the hit')
    res.json(newUser);
  })

  app.get('/users/:id', (req, res) => {
      const id = req.params.id;
      const user = users[id]
      res.send(user);
  })
app.listen(port, () => {
    console.log('listening on port',port);
});