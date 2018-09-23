# TODO LIST WITH REACTJS AND REST API SLIM PHP

## INSTALLATION:

### 1- Download the project:

```bash
$ cd path-to-your-projects
$ git clone https://github.com/raquelcarvalho/TODO-Slim-PHP-ReactJs.git
```

### 1- INSTALLATION BACK-END:

```bash
$ cd backend
$ cp .env.example .env
$ composer install
```


### 2- Create new MySQL database. For example: "api_rest_slimphp".

From the command line run:

```bash
mysql -e 'CREATE DATABASE api_rest_slimphp;'
```


### 3- Create the structure and load test data into the database.

The database can be updated manually using the following file: [database.sql](app/data/database.sql).

It can also be run from the command line:

```
mysql api_rest_slimphp < app/data/database.sql
```


### 4- Configure the connection data with MySQL.

Edit and complete configuration file: `.env`. For example:

```
DB_HOSTNAME = '127.0.0.1'
DB_DATABASE = 'api_rest_slimphp'
DB_USERNAME = 'root'
DB_PASSWORD = ''
```


### 5- LOCAL SERVER:

You can start the PHP internal web server by running:

```bash
$ composer start
```


### NOTE:

The `composer start` command would be the equivalent to execute:

```bash
$ php -S 0.0.0.0:8080 -t public public/index.php
```


### 1- INSTALLATION FRONT-END:

```bash
$ cd frontend
$ npm i
$ npm run den
```


### 2- LOCAL SERVER:

You can start the APP by running in port 8000:

```bash
$ npm run dev
```