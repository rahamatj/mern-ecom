const mode = "prod";

function config() {
    let cfg = []

    cfg["dev"] = {
        API_URL: "http://localhost:3001",
    }

    cfg["prod"] = {
        API_URL: "https://mern-ecom-9jpw.onrender.com",
    }

    return cfg[mode];
}

export default config