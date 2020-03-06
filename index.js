// server
const express = require('express')
const {init} = require('rajaongkir-node-js')
const request = init('0df6d5bf733214af6c6644eb8717c92c', 'starter')

const app = express()

app.get('/provinces', async (req, res) => {
  let url = null
    if (req.query.searchKey) {
        const key = req.query.searchKey
        url = '/province?id='+ key
    }else{
       url = '/province'
    }  
  
  try {
		const regionType = request.get(url)
		regionType.then(x => {
				res.write(x)
				res.end()
		})
    } catch (error) {
        console.log(error);
    }
  });

app.get('/cities', async (req, res) => {
    let url = null
    if (req.query.searchKey) {
        const key = req.query.searchKey
        url = '/city?id='+ key
    }else{
       url = '/city'
    }
    
    try {
		const regionType = request.get(url)
		regionType.then(x => {
				res.write(x)
				res.end()
		})
    } catch (error) {
        console.log(error);
    }
  });


app.listen(8000, () => {
console.log('Server is up on port 8000');
});