const app = require('./server');

app.listen(3000, () => console.log('ouvindo porta 3000!'));

const routes = require('./routes');

app.use('/', routes);

app.use('/', require('./handlers/handleError'));