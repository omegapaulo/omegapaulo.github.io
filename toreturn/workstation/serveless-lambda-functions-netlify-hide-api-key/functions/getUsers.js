// legacy callback style - not encouraged anymore, but you'll still see examples doing this

exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: 'Hello World',
    // body: JSON.stringify({
    //   message: `Hello world ${Math.floor(Math.round() * 10)}`,
    // }),
  });
};

// modern JS style - encouraged
// ? Async - Await
// export async function handler(event, context) {
//   return {
//     statusCode: 200,
//     body: JSON.stringify({ message: `Hello world ${Math.floor(Math.random() * 10)}` }),
//   };
// }
