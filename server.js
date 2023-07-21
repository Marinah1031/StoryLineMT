const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3002;


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main', helpers: require('./helpers') }));
app.set('view engine', 'handlebars');

// Session
app.use(
  session({
    secret: 'your-secret-session-key',
    resave: false,
    saveUninitialized: true
  })
);

// Routes
const controllers = require('./controllers');
const sequelize = require('./config/connection');
app.use(controllers);

sequelize.sync({ force: false }).then(() => {
  // Start the server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

})
