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
