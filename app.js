const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mysql = require('mysql2/promise');
const { Sequelize, DataTypes } = require('sequelize');
const Usuario = require('./models/Usuario');
const Establecimiento = require('./models/Establecimiento');
const Especialidad = require('./models/Especialidad');
const indexRouter = require('./routes/index');
const establecimientosRouter = require('./routes/establecimientos_router');
const especialidadesRouter = require('./routes/especialidades_router');
const usuariosRouter = require('./routes/usuarios_router');

require('dotenv').config()
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuarios', usuariosRouter);
app.use('/establecimientos', establecimientosRouter);
app.use('/especialidades', especialidadesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// create db if it doesn't already exist
const createDb = async () =>{
	const connection = await mysql.createConnection({ 
		host:process.env.DB_HOST,
		port:process.env.DB_PORT,
		user:process.env.DB_USER,
		password:process.env.DB_PASSWORD });
	await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);
}


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
	host: process.env.DB_HOST,
	dialect: "mysql",
	port: process.env.DB_PORT
});

const sequelizeTest = async () =>{
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
}

configurarConexionDb = async()=>{
	await createDb();
	await sequelizeTest();

	Usuario.init(
		{
			// Model attributes are defined here
			nombre: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			apellido: {
				type: DataTypes.STRING,
				allowNull: false,
				// allowNull defaults to true
			},
		},
		{
			// Other model options go here
			sequelize, // We need to pass the connection instance
			modelName: 'Usuario', // We need to choose the model name
		},
	);
	
	
	Establecimiento.init(
		{
			// Model attributes are defined here
			nombre: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			direccion: {
				type: DataTypes.STRING,
				allowNull: false,
				// allowNull defaults to true
			},
			telefono: {
				type: DataTypes.STRING,
				allowNull: false,
				// allowNull defaults to true
			},
			habilitado: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue : true,
				// allowNull defaults to true
			},
		},
		{
			// Other model options go here
			sequelize, // We need to pass the connection instance
			modelName: 'Establecimiento', // We need to choose the model name
		},
	);

	Especialidad.init(
		{
			// Model attributes are defined here
			nombre: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			habilitado: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue : true,
				// allowNull defaults to true
			},
		},
		{
			// Other model options go here
			sequelize, // We need to pass the connection instance
			modelName: 'Especialidad', // We need to choose the model name
			tableName: 'Especialidades'
		},
	);
	
	Usuario.sync();
	Establecimiento.sync();
	Especialidad.sync();
}

configurarConexionDb();

module.exports = app;
