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
    "d536c59939cf1b5326d334cd3f32e0ed"
  );
  const request = mailj.post("send").request({
    FromEmail: 'donotreply@mikegoral.com',
    FromName: name,
    Subject: `Email from ${fromEmail} from Mike Goral website`,
    "Text-part": `From:${name},${fromEmail} and the message is:${message}`,
    "Html-part":
      '<h3>You have a new message from mikegoral.com',
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
