const PropertiesReader = require("properties-reader", {
	writer: { saveSections: true },
});
const configPath = "./public/versions.txt";

const config = PropertiesReader(configPath);
const count = config.get("VUE_APP_VERSION") + 1;

config.set("VUE_APP_VERSION", count);

config.save(configPath);