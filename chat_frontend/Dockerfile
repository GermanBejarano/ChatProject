# # --------------------------------------
# # ---------Etapa de dependencias--------
# # --------------------------------------
# FROM node:16.19-alpine as dev_deps

# # cd app
# WORKDIR /app

# # Dest /app
# COPY package.json ./

# # Instalar dependencias
# RUN npm install

# # --------------------------------------
# # -------Etapa de contruccion----------
# # --------------------------------------
# FROM node:16.19-alpine as builder
# WORKDIR /app
# COPY --from=dev_deps /app/node_modules ./node_modules
# COPY . .


# --------------------------------------
# ----------Etapa de ejecucion----------
# --------------------------------------

FROM node:16.19-alpine as runner
WORKDIR /app
COPY build/ .
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", ".", "-p", "3000"]