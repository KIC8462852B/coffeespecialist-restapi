# CoffeeSpecialist REST API

A small REST API for managing coffees and coffee specialists. 

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech stack](#tech-stack)
- [Getting started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running locally](#running-locally)
- [API Overview](#api-overview)
  - [Authentication](#authentication)
  - [Endpoints](#endpoints)
- [Testing](#testing)
- [Docker](#docker)
- [Contributing](#contributing)


---

## About

This project implements a RESTful API to manage coffees, specialists, and user authentication. The README intentionally contains examples — please adapt them to match the actual framework, DB, and scripts used in the repository.

## Features

- CRUD for coffees
- CRUD for specialists
- Authentication (JWT token example)
- Environment-based configuration
- Docker support

## Tech stack

(Replace with actual stack)
- Node.js + Express (example)
- PostgreSQL (example)
- JWT for authentication
- Docker & Docker Compose

## Getting started

### Prerequisites

- Node.js (>= 16) and npm/yarn (if Node.js used)
- Docker & Docker Compose (optional)
- A running database (or use Docker)

### Installation

1. Clone the repo
   git clone https://github.com/KIC8462852B/coffeespecialist-restapi.git
   cd coffeespecialist-restapi

2. Install dependencies
   npm install
   # or
   yarn install

### Configuration

Create a `.env` file at the project root (example):

PORT=3000  
NODE_ENV=development  
DATABASE_URL=postgres://user:password@localhost:5432/coffeespecialist  
JWT_SECRET=replace_with_a_secure_random_secret

Adjust values to your environment or set them in Docker Compose.

### Running locally

- Development (example): npm run dev  
- Production (example): npm start

## API Overview

### Authentication

This README uses JWT as an example. Obtain a token (POST /auth/login) and include it in requests:

Authorization: Bearer <token>

### Endpoints (example)

- Auth
  - POST /auth/register — register
  - POST /auth/login — obtain JWT

- Coffees
  - GET /coffees — list coffees (pagination & filters)
  - GET /coffees/:id — get coffee
  - POST /coffees — create (auth required)
  - PUT /coffees/:id — update (auth required)
  - DELETE /coffees/:id — delete (auth required)

- Specialists
  - GET /specialists
  - GET /specialists/:id
  - POST /specialists (auth required)
  - PUT /specialists/:id (auth required)
  - DELETE /specialists/:id (auth required)

Replace above routes with the repository's actual routes if they differ.

## Testing

Run tests (example):  
npm test

## Docker

Start with Docker Compose (example):  
docker-compose up --build

## Contributing

- Open issues to discuss major changes before implementing them.
- Keep pull requests small and focused.
- Add tests and ensure CI passes.

