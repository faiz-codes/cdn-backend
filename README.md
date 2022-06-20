# Complete Developer Network Backend

## Project Information

This project was developed using:
- [TypeScript](https://www.typescriptlang.org/) version 4.3.5.
- [NestJS](https://nestjs.com/) version 8.0.0.
- [TypeORM](https://typeorm.io/) version 0.3.6.
- [MySQL](https://www.mysql.com/) version 8.0.29.

## Step to Run Development Server

1. Run MySQL client in your machine.
2. Navigate to /src/app.module.ts and change the database name, user, and password according to your machine's MySQL client configuration.
```bash
    TypeOrmModule.forRoot({
      type: 'mysql',
      # change start here
      database: 'YOUR_DB_NAME',
      username: 'YOUR_DB_USERNAME',
      password: 'YOUR_DB_PASSWORD',
      # change end here
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
```
2. Navigate to project root directory in the terminal.
3. Run `npm install` to install project dependency.
4. Run `npm run start` to run the development server.
5. The table will be automatically generated in the database. Check the terminal output in case any issue persist.
6. By default, the server will run on `http://localhost:3000/`.

## Further inquiry

For further inquiry or assistance, contact me via [email](mailto:faiz.codes@gmail.com) or [LinkedIn](https://www.linkedin.com/in/muhammadfaizabdullah/).