module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["indunilIdentifier"] = {
        host: process.env.EndPoint_rdsIndunilIdentifier,
        port: process.env.Port_rdsIndunilIdentifier,
        user: process.env.User_rdsIndunilIdentifier,
        password: process.env.Password_rdsIndunilIdentifier,
        database: "indunilDB"
    };
};