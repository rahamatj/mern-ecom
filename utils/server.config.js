const mode = "dev";

function config() {
    let cfg = []

    cfg["dev"] = {
        API_URL: "http://127.0.0.1:3001",
        MONGO_URI: "mongodb://127.0.0.1:27017/ecom",
        PORT: 3001
    }

    cfg["prod"] = {
        API_URL: "https://mern-ecom-9jpw.onrender.com",
        MONGO_URI: "mongodb+srv://rahamatj:162002025@ecom.m8h6nnq.mongodb.net/?appName=ecom"
    }

    return cfg[mode];
}

export default config