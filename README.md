
# GASHUGI YVES EVANGELICAL CENTRE PROJECT

##Table of Content
1. [Project description](#Project-description)
2. [Usage](#usage)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
3. [Contributing](#contributing)
4. [License](#license)


## Project description

In this project we .........

###Tech Stack
- Node.js
- Express
- Postgres DB
- Sequelize ORM

## Usage

To interact with  our project locally, you will need the following:
### Prerequisites

Ensure you have the following tools installed:

- Node.js and npm
- PostgreSQL

### Installation 
1. Clone the repository:
2. Navigate to the project directory:
3. Run npm install to install all package dependencies
3. Create .env file and get the contents of .env.example file and edit them
4. To run the migrations into Postgres use the following command :
npx sequelize-cli db:migrate

5. To run seeders into Postgres use the following command: npx sequelize-cli db:seed:all
6. Run the project using this command: npm start

## Contributing 
To conrtibute to this project:

1. Clone the repository:
2. Create a new branch:
- feature: git checkout -b ft-name-of-the-feature
- bug: git checkout -b bg-name-of-the-bug-PivatalCardNumber 
- chore: git checkout -b ft-name-of-the-chore-PivatalCardNumber 
3. Commit your changes using this git command git commit -m "commit message"
4. Push your changes to the branch you created 
5. Open a pull request