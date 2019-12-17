let SL_AWS = require('slappforge-sdk-aws');
let connectionManager = require('./ConnectionManager');
const rds = new SL_AWS.RDS(connectionManager);

exports.handler = async (event) => {

    // You must always end/destroy the DB connection after it's used
    rds.beginTransaction({
        instanceIdentifier: 'indunilIdentifier'
    }, function (error, connection) {
        if (error) {
            console.log(error);
            throw error;
        }
                    console.log(connection);
    connection.destroy();

    });

   // connection.destroy();
    return { "message": "Successfully executed with RDS" };
};