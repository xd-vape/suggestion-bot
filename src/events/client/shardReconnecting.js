//here the event starts
const Logger = require("../../handlers/logger");
module.exports = (client, id) => {
    Logger.info(`[${String(new Date).split(" ", 5).join(" ")}] Shard #${id} Reconnecting`);
}
