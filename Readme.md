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

  - For the backend service:
    ```bash
    cp country_backend/.env.example country_backend/.env
    ```
    Then update the environment variables in the `country_backend/.env` file.

  - For the frontend service:
    ```bash
    cp country_frontend/.env.example country_frontend/.env
    ```
    Then update the environment variables in the `country_frontend/.env` file.

  **Note:** Ensure that the environment variable `BASE_URL`, in the frontend service, has the same port value as `PORT` in the backend service. By default, the backend service runs on port 8000.

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
