FROM NODE:10
# Create app directory
WORKDIR usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json
# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# or whatever port you’re using for your db
EXPOSE 3003

# run npm start. command scripts are an array
CMD ["npm", "start"]