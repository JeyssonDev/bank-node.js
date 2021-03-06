const { app } = require('./app');

// Models

// Utils
const { db } = require('./utils/database');

// Authenticate database credentials
db.authenticate()
  .then(() => console.log('Database authenticated'))
  .catch(err => console.log(err));

// Sync sequelize models
db.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log(err));

// Spin up server
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});
