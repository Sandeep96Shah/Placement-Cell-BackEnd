// const fetch = require('cross-fetch');

// //https://jobs.github.com/positions.json?description=reactjs&location=india"

// // async function safeParseJSON(response) {
// //     const body = await response.text();
// //     console.log("body", body);
// //     try {
// //         return await JSON.parse(body);
// //     } catch (err) {
// //         console.error("Error:", err);
// //         console.error("Response body:", body);
// //         // throw err;
// //         return ReE(response, err.message, 500)
// //     }
// // }

// module.exports.externalJobs = async (req, res) => {
//     fetch("http://www.sapficojobs.com")
//   .then(Response => {
//       console.log("response", Response);
//     return Response.json();
//   })
//   .then(user => {
//     console.log(user);
//     return res.status(200).json({
//         message:"successful",
//         user,
//     })
//   })
//   .catch(err => {
//     console.error(err);
//   });
// }