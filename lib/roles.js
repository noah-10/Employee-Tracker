const db = require("../config/config");

class Roles {
    constructor(roleName){
        this.roleName = roleName;
    }

    getRoles(){
        const sql =`SELECT role_id, role_title FROM roles`;

        return db
        .promise()
        .query(sql)
        .then(([rows]) => {
            return rows;
        })
    }

    // getRoleId(){
    //     const sql = `SELECT role_id FROM roles
    //     WHERE role_title = "${this.roleName}";`

    //     return db
    //     .promise()
    //     .query(sql)
    //     .then(([rows]) => {
    //         const roleId = rows[0].role_id;
    //         return roleId;
    //     })
    // }
}

module.exports = Roles;