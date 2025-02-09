# Country Info App

This is a full-stack web application that displays information about countries. The application consists of two services: a backend service that provides country data and a frontend service that displays the data.

## Table of Contents
- [Country Info App](#country-info-app)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [Prerequisites](#prerequisites)
    - [Steps to Install](#steps-to-install)
  - [Running the Project](#running-the-project)
    - [Development Mode](#development-mode)
    - [Building the Project](#building-the-project)
    - [Production Mode](#production-mode)
    - [Cleaning build artifacts](#cleaning-build-artifacts)
  - [Running Tests](#running-tests)
  - [Makefile](#makefile)

## Installation

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 20.11.0 or higher)
- [pnpm](https://pnpm.io/) (preferred package manager)
- [Make](https://www.gnu.org/software/make/) (for running the Makefile)

### Steps to Install
1. **Clone the repository**
   ```bash
   git clone https://github.com/Perazzojoao/country_info_app.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd country_info_app
   ```

3. **Install the dependencies**
   ```bash
   make install
   ```
   This command installs the dependencies for both the backend and frontend services.

4. **Set up environment variables**
- Create a .env file by copying the sample file:

  ```bash
  cp .env.sample .env
  ```

- Update the environment variables in the .env file as needed.

## Running the Project

### Development Mode
You can run the backend and frontend services in development mode using the following commands:

1. **Backend (development mode):**

   ```bash
   make dev-backend
   ```

2. **Frontend (development mode):**

   ```bash
    make dev-frontend
   ```

### Building the Project
To build the project for production, run the following command:

```bash
make build
```
This command runs the build process for both the backend and frontend.

Or you can build each service separately:
- **Backend:**
  ```bash
  make build-backend
  ```
- **Frontend:**
  ```bash
  make build-frontend
  ```

### Production Mode
After building the project, you can start the services in production mode:

- Backend (production mode):
  ```bash
  make start-backend
  ```

- Frontend (production mode):
  ```bash
  make start-frontend
  ```

### Cleaning build artifacts
To remove build artifacts (such as the backend dist directory and the frontend .next directory), run:

```bash
make clean
```

## Running Tests
If tests are configured, you can run them with the following commands:

- Backend tests:
  ```bash
  cd country_backend && pnpm test
  ```
- Frontend tests:
  ```bash
  cd country_frontend && pnpm test
  ```

## Makefile
Below is the Makefile used to manage the project tasks:

```makefile
.PHONY: install dev backend frontend build build-backend build-frontend start start-backend start-frontend clean

# Paths
BACKEND_DIR=./country_backend
FRONTEND_DIR=./country_frontend

install:
	cd $(BACKEND_DIR) && pnpm install
	cd $(FRONTEND_DIR) && pnpm install


# Commands to run the services in development mode
dev-backend:
	cd $(BACKEND_DIR) && pnpm run start:dev

dev-frontend:
	cd $(FRONTEND_DIR) && pnpm run dev


# Commands to build the services
build: build-backend build-frontend

build-backend:
	cd $(BACKEND_DIR) && pnpm run build

build-frontend:
	cd $(FRONTEND_DIR) && pnpm run build


# Commands to run the services in production mode
start-backend:
	cd $(BACKEND_DIR) && pnpm run start:prod

start-frontend:
	cd $(FRONTEND_DIR) && pnpm run start


# Clean output directories
clean:
	rm -rf $(BACKEND_DIR)/dist $(FRONTEND_DIR)/.next
```