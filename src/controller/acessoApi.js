const axios = require('axios');

async function dadosDoBd(){
  var config = {
    method: 'get',
    url: 'http://localhost:8080/getdados',
    headers: { }
  };

  const res = await axios(config);
  return res.data;
}

async function postBd(fields){
  console.log(fields)
  let config = {
    method: 'post',
    url: 'http://localhost:8080/postdados',
    data : {fields}
  };

  axios(config)
  .then(function (response) {
    return(JSON.stringify(response.data));
  })
  .catch(function (error) {
    return(error);
  });

}

async function deleteBd(id){
  let data = '';

let config = {
  method: 'delete',
  url: 'http://localhost:8080/deletedados/' +  id,
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

}


module.exports = { dadosDoBd, postBd, deleteBd }