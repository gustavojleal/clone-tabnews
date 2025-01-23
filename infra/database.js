import { Client } from "pg";
async function query(queryObject) {
    let client;
    try {
        client = await getNewClient();
        const result = await client.query(queryObject);
        return result;
    } catch (error) {
        console.error("Error connecting to the database");
        console.error(error);
        throw error;
    }finally{
        await client.end();
    }

}


async function getNewClient() {
   
    const client = new Client({
        user: process.env.POSTGRES_USER,
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_DB,
        password: process.env.POSTGRES_PASSWORD,
        port: process.env.POSTGRES_PORT,
        ssl: getSSLValues(),
        
    });
    await client.connect();
    return client;
}
export default {
    query,
    getNewClient,
};

function getSSLValues() {
    if (process.env.POSTGRES_CA_CERT && process.env.POSTGRES_CLIENT_CERT && process.env.POSTGRES_CLIENT_KEY) {
      
        return ({        
            ca: "process.env.POSTGRES_CA_CERT",
            cert: "process.env.POSTGRES_CLIENT_CERT",
            key: "process.env.POSTGRES_CLIENT_KEY",
        })
    }
    return process.env.NODE_ENV === "production" ? true : false;
}

