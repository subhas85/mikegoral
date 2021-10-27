import mailject from "node-mailjet";

// const mailjet = mailject.connect(
//   "842a46714bc2ed5f84f4650bf33177af",
//   "d536c59939cf1b5326d334cd3f32e0ed"
// );
// const request = mailjet.post("send").request({
//   FromEmail: "pilot@mailjet.com",
//   FromName: "Mailjet Pilot",
//   Subject: "Your email flight plan!",
//   "Text-part":
//     "Dear passenger, welcome to Mailjet! May the delivery force be with you!",
//   "Html-part":
//     '<h3>Dear passenger, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!<br />May the delivery force be with you!',
//   Recipients: [{ Email: "prakashd88@gmail.com" }],
// });
// request
//   .then((result) => {
//     res = result.body;
//     console.log(result.body);
//   })
//   .catch((err) => {
//     console.log(err.statusCode);
//   });

//  -----------------------

/*
const mailjet = mailject.connect(
    "842a46714bc2ed5f84f4650bf33177af",
    "d536c59939cf1b5326d334cd3f32e0ed"
  );
const request = mailjet.post("send", { version: "v3.1" }).request({
  Messages: [
    {
      From: {
        Email: "pilot@mailjet.com",
        Name: "Mailjet Pilot",
      },
      To: [
        {
          Email: "prakashd88@gmail.com",
          Name: "passenger 1",
        },
      ],
      Subject: "Your email flight plan!",
      TextPart:
        "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
      HTMLPart:
        '<h3>Dear passenger 1, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!</h3><br />May the delivery force be with you!',
    },
  ],
});
request
  .then((result) => {
    console.log(result.body);
  })
  .catch((err) => {
    console.log(err.statusCode);
  });
*/
