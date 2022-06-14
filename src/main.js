import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    // todo change this to locDb for using db inside src/database.db
    storage: 'src/database.sqlite',
    // ** db event logging true in dev and false in production
    // logging: (process.env.NODE_ENV !== 'production') ? true : false,
    // define: {
    //     timestamps: false,
    //     underscored: true,
    // },
});

sequelize.authenticate().then(() => console.log("connected")
).catch((err) => console.log(err))

createApp(App).use(router).mount('#app')
