# Use an official Node.js runtime as a parent image
FROM node:19

# Set the working directory to /app
WORKDIR /app


COPY package*.json ./

RUN npm install
# Copy the current directory contents into the container at /app
COPY . /app

# Install any dependencies
RUN npm install

# Make port 3000 available to the world outside this container
EXPOSE 4000

# Define the command to run your app
CMD ["npm", "start"]


ENV PORT=4000
ENV DB_URI="mongodb+srv://vlady98ish:wLCVzlqGAtznctXz@cluster0.8xd7x0r.mongodb.net/factsdb?retryWrites=true&w=majority"
