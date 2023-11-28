# --------------------------------------
# ---------Etapa de dependencias--------
# --------------------------------------
FROM node:16.19-alpine as dev_deps

# cd app
WORKDIR /app

# Dest /app
COPY package.json ./

# Instalar dependencias
RUN npm install


# --------------------------------------
# -------Etapa de contruccion----------
# --------------------------------------
FROM node:16.19-alpine as builder
WORKDIR /app
COPY --from=dev_deps /app/node_modules ./node_modules
COPY . .

# Realizar testing
# RUN npm run test


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
# Exponer puerto
EXPOSE 8080
# Comando run de la imagen
CMD [ "node", "index.js" ]

