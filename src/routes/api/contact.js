import mailjet from "node-mailjet";

export const post = (requestl) => {
  const formBody = JSON.parse(requestl.body);
  const name = formBody.name;
  const fromEmail = formBody.fromEmail;
  const message = formBody.message;
  const toEmail = formBody.toEmail;
  let res;
  const mailj = mailjet.connect(
    "842a46714bc2ed5f84f4650bf33177af",
    "989cb307da9b9e851557be2278623a1e"
  );
  const request = mailj.post("send").request({
    FromEmail: 'donotreply@mikegoral.com',
    FromName: name,
    Subject: `${name} from the website would like to connect`,
    "Text-part": `From:${name},${fromEmail} and the message is:${message}`,
    "Html-part": `<p><strong>From: </strong>${name}</p> <p><strong>Email: </strong>${fromEmail}</p> <p><strong>Message: </strong>${message}</p>`,
    Recipients: [{ Email: toEmail }],
  });
  request
    .then((result) => {
      res = result.body;
      console.log(res);
    })
    .catch((err) => {
      console.log(err.statusCode);
    });

  return {
    body: {
      name,
      fromEmail,
      message,
      res,
    },
  };
};
