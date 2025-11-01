const mode = "prod";

function config() {
    let cfg = []

    cfg["dev"] = {
        MONGO_URI: "mongodb://127.0.0.1:27017/ecom",
        PORT: 3001,
        API_URL: `http://127.0.0.1:${this.PORT}`,
    }

    cfg["prod"] = {
        PORT: 3001,
        API_URL: "https://mern-ecom-9jpw.onrender.com",
        MONGO_URI: "mongodb+srv://rahamatj:162002025@ecom.m8h6nnq.mongodb.net/?appName=ecom"
    }

    return cfg[mode];
}

export default config