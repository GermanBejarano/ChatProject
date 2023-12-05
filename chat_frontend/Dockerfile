# # --------------------------------------
# # ---------Etapa de dependencias--------
# # --------------------------------------
FROM node:16.19-alpine as dev_deps

# cd app
WORKDIR /app

# Dest /app
COPY package.json ./

# Instalar dependencias
RUN npm install

# # --------------------------------------
# # -------Etapa de contruccion----------
# # --------------------------------------
FROM node:16.19-alpine as builder
WORKDIR /app
COPY --from=dev_deps /app/node_modules ./node_modules
COPY . .

# --------------------------------------
# -----Etapa Dependencias-Produccion----
# --------------------------------------
FROM node:16.19-alpine as prod_deps
WORKDIR /app
COPY package.json ./
RUN npm install --prod


# --------------------------------------
# ----------Etapa de ejecucion----------
# --------------------------------------
FROM node:16.19-alpine as runner
WORKDIR /app
COPY --from=prod_deps /app/node_modules ./node_modules
COPY . .
EXPOSE 3000
CMD ["npm", "run", "start"]


# --------------------------------------
# ----------Etapa de ejecucion----------
# --------------------------------------

# FROM node:16.19-alpine as runner
# WORKDIR /app
# COPY build/ .
# RUN npm install -g serve
# EXPOSE 3000
# CMD ["serve", "-s", ".", "-p", "3000"]


# # Using node:16-alpine base image
# FROM node:16-alpine

# # Set /app as the default work directory
# WORKDIR /app

# # copy package.json to the working directory for packages installation
# COPY package.json /app

# # Install npm dependencies
# RUN yarn install

# # Copy all the project files to the working directory
# COPY . .

# # Expose the port of your application to bind with the host port
# EXPOSE 3000

# # run your app
# CMD ['yarn', 'run', 'start']