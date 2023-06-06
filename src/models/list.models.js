const BaseModel = require('./base.models');
class ListModels extends BaseModel {
        async getList(){
            let sql = `SELECT id,name,City,price FROM Homestay limit 5;`
            return await this.querySql(sql)
        }
}
module.exports = new ListModels();