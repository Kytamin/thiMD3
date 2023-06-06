const BaseModel = require('./base.models');

class DeleteModels extends BaseModel{
    async deleteHomeStay(id){
        let sql = `DELETE
                     FROM Homestay
                     WHERE id = '${id}'`
        return this.querySql(sql)
    }
}
module.exports = new DeleteModels();