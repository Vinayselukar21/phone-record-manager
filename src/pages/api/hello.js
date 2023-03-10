// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const phoneDiary = [
];
export default function handler(req, res) {
  //console.log(req.body);

  if (req.method === "PUT") {
    var id = req.body.id;

    phoneDiary.forEach((myobject) => {
      if (myobject["id"] == id) {
        var myId = phoneDiary.indexOf(myobject);
        phoneDiary[myId].firstName = req.body.firstName;
        phoneDiary[myId].lastName = req.body.lastName;
        phoneDiary[myId].phone = req.body.phone;
      }
    });

    res.status(200).json(phoneDiary);
  }

  if (req.method === "GET") {
    res.status(200).json(phoneDiary);
  }

  if (req.method === "POST") {
    var body = req.body;

    phoneDiary.push(body);

    res.status(200).json(phoneDiary);
  }

  // if (req.method === 'POST') {
  //   res.status(200).json({ message: 'Hello from Next.js! with POST Reequest' })
  // } else {
  //   res.status(200).json({ message: 'Hello from Next.js! with GET Reequest' })
  // }
}
