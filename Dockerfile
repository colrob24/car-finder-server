from node:14.15.3

WORKDIR /usr/app
COPY package.json .
RUN yarn install --quiet
COPY . .