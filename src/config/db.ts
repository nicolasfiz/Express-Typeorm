import { DataSource } from "typeorm";
import { User } from "../entity/user.entity";


export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    username: 'root',
    password: 'root',
    port: 5432,
    database: 'root',
    entities: [User],
    logging: false,
    synchronize: true
})