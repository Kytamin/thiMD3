const qs=require('qs');
const BaseModel = require('../models/base.models');
const handle = require("../../handlers/handlers");
class HomeStayAdd extends BaseModel{
    constructor() {
        super();
    }
    querySql(sql) {
        return super.querySql(sql);
    }

    async showFormAdd(req, res) {
        let data = await handle.getTemplate('./view/add.html')
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    }

    addHomestay(req, res) {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })
        req.on('end', async () => {
            const homeStay = qs.parse(data);
            const sql = `INSERT INTO Homestay (name, city,numRestRoom, numWCroom, price, description)
                         values ("${homeStay.name}",
                                 "${homeStay.city}",
                                 +${homeStay.bedroom},
                                 +${homeStay.price},
                                 "${homeStay.wc}",
                                 "${homeStay.description}")`;

            await this.querySql(sql);
            res.writeHead(301, {'Location': '/'});
            return res.end();
        });

    }
}
module.exports = new HomeStayAdd();
