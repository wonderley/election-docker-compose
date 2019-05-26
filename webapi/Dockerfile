FROM node:8

# Install postgres
# https://www.postgresql.org/download/linux/debian/
RUN echo "deb http://apt.postgresql.org/pub/repos/apt/ squeeze-pgdg main" >> /etc/apt/sources.list.d/pgdg.list
RUN wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | apt-key add -
RUN apt-get update
RUN apt-get -y install postgresql-client

# Bundle app source
COPY . .

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

EXPOSE 8080
ENTRYPOINT [ "npm", "start" ]