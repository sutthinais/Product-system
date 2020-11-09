const pool = require("../../config/database");
const {
    json
} = require("body-parser");


module.exports = {
    getoderuser: (data, callBack) => {
        pool.query(sql, [], (error, results, fields) => {
            if (error) {
                return;
            }
            if (!results) {
                res.json({
                    success: 0,
                    messages: "dont get oder"
                });
            }
            return callBack(null, results);
        })
    }
}