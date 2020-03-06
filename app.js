const fs = require('fs')
const yaml = require('js-yaml')

try {
    let fileRead = fs.readFileSync('./service.yml', 'utf8')
    let data = yaml.safeLoad(fileRead)
    let hasil = JSON.parse(data) 
    console.log(hasil);
    
} catch (error) {
    console.log(error);
    
}
// function loadConfig(){
//     return new Promise(function(resolve, reject) {
//       fs.readFile('./service.yml', 'utf8', function (err, data){
//         if (err) reject(err);
//         let datas = yaml.safeLoad(data)
  
//         var config = JSON.parse(datas);
//         resolve(config); 
//       });
//     })
//   };

//   loadConfig().then(function(config) {
//     // do something with the config
//     console.log(config);
    
//   }).catch(function(err){
//       console.log(err);
      
//     // do something with the error
//   });