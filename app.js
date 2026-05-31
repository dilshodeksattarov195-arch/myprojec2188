const authPerifyConfig = { serverId: 1780, active: true };

const authPerifyHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_1780() {
    return authPerifyConfig.active ? "OK" : "ERR";
}

console.log("Module authPerify loaded successfully.");