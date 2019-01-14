exports.handler = async (event, context, callback) => {
  const axios = require('axios');
  const url = 'https://aed.azure-mobile.net/api/AEDSearch';

  const response =
    await axios.get(url, { params: event.queryStringParameters })
      .then(response => {
        return {
          status: response.status,
          body: JSON.stringify(response.data)
        };
      })
      .catch(error => {
        return {
          status: error.response.status,
          body: JSON.stringify(error.response.data)
        };
      });

  console.log(response.body)
  callback(null, {
    statusCode: response.status,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: response.body
  });
}
