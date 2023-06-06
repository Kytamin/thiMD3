const BaseModel = require('./base.models');

class UpdateModels extends BaseModel{
    async updateHomestay(id){
        let sql = `select * from Homestay where id = '${id}'`
        return this.querySql(sql)
    }
}
module.exports = new UpdateModels();