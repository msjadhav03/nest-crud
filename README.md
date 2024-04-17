<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

[Nest Starter Repository](https://github.com/nestjs/nest)

### Language

Compatiable with both TypeScript and Pure JavaScript

### Setup

```js
$ npm i -g @nestjs/cli
$ nest new project-name
```

The project-name directory will ne created, node modules and few other boilerplate files will be installed and a src/ directory will ne created and populated with serveral core files.

```js
src
|--- app.controller.spec.ts
|--- app.controller.ts
|--- app.module.ts
|--- app.service.ts
|--- main.ts
```

`app.controller.ts`

- A basic controller with single route

`app.module.ts`

- A root module of the application

`app.service.ts`

- A basic service with single method

`main.ts`

- Entry point of the application

`NestFactory class exposes static methods that allow creating an application instance. NestFactory.create()`

By default if any error occurs while creating the application app will exit with code 1. If we want to make it throw an error instead disbable the option `{ abortOnError: false }`

### Platform

There are two HTTP platforms supported out-of-the-box

1. express
2. fastify

Platform exposes it own application interface

1. `NestExpressApplication`
2. `NestFastifyApplication`

Platform specific application creation

```js
const app = (await NestFactory.create) < NestExpressApplication > AppModule;
```

### Running the application

```js
$ npm run start
```

### Linting and Formatting

Generated nest project comes with both a code linter and formatter preinstalled.

Nest project comes with ready to use scripts

```js
$ npm run lint
$ npm run format
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Author - [Manisha Jadhav]()

## License

Nest is [MIT licensed](LICENSE).
