module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["indunilidentifier"] = {
        host: "indunilidentifier.czndmdv7dw6d.us-east-1.rds.amazonaws.com",
        port: "3306",
        user: "indunil",
        password: process.env.Password_rdsIndunilidentifier,
        database: "indunilDB"
    };
};