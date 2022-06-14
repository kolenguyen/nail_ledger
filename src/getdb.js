// import { remote } from "electron";
// import path from 'path';
import { Sequelize } from 'sequelize';
// import { Database } from "sqlite3";


// setup the connection to make sure it works
const sequelize = new Sequelize({
    dialect: 'sqlite',
    // todo change this to locDb for using db inside src/database.db
    storage: 'src/database.db',
    // ** db event logging true in dev and false in production
    logging: (process.env.NODE_ENV !== 'production') ? true : false,
    define: {
        timestamps: false,
        underscored: true,
    },
});

export {sequelize};