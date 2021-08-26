import mailjet from "node-mailjet";

export const post = (requestl) => {
  const formBody = JSON.parse(requestl.body);
  const name = formBody.name;
  const fromEmail = formBody.fromEmail;
  const message = formBody.message;
  let res;
  const mailj = mailjet.connect(
    "842a46714bc2ed5f84f4650bf33177af",
    "d536c59939cf1b5326d334cd3f32e0ed"
  );
  const request = mailj.post("send").request({
    FromEmail: fromEmail,
    FromName: name,
    Subject: "Email from Mike Goral website",
    "Text-part": message,
    "Html-part":
      '<h3>Dear passenger, welcome to <a href="https://www.mailjet.com/">Mailjet</a>!<br />May the delivery force be with you!',
    Recipients: [{ Email: "prakashd88@gmail.com" }],
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
