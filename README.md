# README

## SETUP

1. Install Docker.
2. Install [PostgreSQL](https://orm.drizzle.team/docs/guides/postgresql-local-setup) on docker
3. Run `docker exec -it drizzle-postgres psql -U postgres -c "CREATE DATABASE crew_db;"` to create the website database
4. Create a .env file at the root of your project directory (at the same level as the src directory)
5. Put `DATABASE_URL="postgres://postgres:mypassword@localhost:5432/crew_db"` into the .env file.
5. In your terminal, at the root of the project, run `npm isntall`.
6. In the same terminal, run `drizzle-kit migrate`.
6. In the same terminal, run `npm run dev`.
7. Ctrl-click the url in the terminal.
 