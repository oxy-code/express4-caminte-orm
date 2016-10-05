var path = require('path'),
	rootPath = path.normalize(__dirname + '/..'),
	env = process.env.NODE_ENV || 'development';

var config = {
	development: {
		root: rootPath,
		app: {
			name: 'Express4-Caminte-ORM'
		},
		port: 8080,
		db: {
			driver: 'mysql',
			database: 'sample',
			username: 'root',
			password: '',
			port: 3306,
			pool: true
		},
		env: env
	},

	production: {
		root: rootPath,
		app: {
			name: 'Express4-Caminte-ORM'
		},
		port: 80,
		db: {
			driver: '',
			database: '',
			username: '',
			password: '',
			port: 3306,
			pool: true
		},
		env: env
	},

	test: {
		root: rootPath,
		app: {
			name: 'Express4-Caminte-ORM'
		},
		port: 3000,
		db: {
			driver: '',
			database: '',
			username: '',
			password: '',
			port: 3306,
			pool: true
		},
		env: env
	}

};

module.exports = config[env];