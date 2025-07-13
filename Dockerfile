FROM node:lts
WORKDIR /quick-ticket-web
COPY .next/standalone/. .
EXPOSE 443
CMD ["node", "server.js"]