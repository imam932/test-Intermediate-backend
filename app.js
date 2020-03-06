const fs = require('fs')
const yaml = require('js-yaml')
require('dotenv').config()

function resolveConfig(file){
  const sql_client = process.env.SQL_CLIENT
  const sql_host = process.env.SQL_HOST
  const sql_port = process.env.SQL_PORT
  const sql_user = process.env.SQL_USER
  const sql_password = process.env.SQL_PASSWORD
  const sql_database = process.env.SQL_DATABASE

    return new Promise(function(resolve, reject) {
      fs.readFile('./'+file+'.yml', 'utf8', function (err, data){
        if (err) reject(err);
        let datas = yaml.safeLoad(data)

        var config = JSON.stringify(datas, null, 4);
        resolve(config); 
        // console.log(config);
        
        let format_data = {
          storages: {
            database: {
              client: sql_client,
              connection: {
                host: sql_host,
                port: sql_port,
                user: sql_user,
                password: sql_password,
                database: sql_database,
              }
            }
          }
        }
      
        fs.writeFileSync(file+'.yml', yaml.safeDump(format_data), 'utf8', err => {
          if (err) console.log(err)
        })
        
      });
    })
  };

 resolveConfig('service')
 .then(function(result) {
  console.log(result); // "initResolve"
  return result;
})
.then(function(result) {
  console.log(result); // "normalReturn"
});