# Usa una imagen base oficial de Node.js 18
FROM node:18-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

COPY ../app .

# Instala las dependencias del proyecto
RUN yarn global add @vue/cli
RUN yarn install

EXPOSE 8080

# Comando por defecto para ejecutar la aplicación
CMD ["npm", "run", "serve"]
