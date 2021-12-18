import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input." });
      return;
    }

    const newMessage = {
      email,
      name,
      message,
    };

    let client;
    try {
      client = await MongoClient.connect(
        "mongodb+srv://blogpost:UE9XFmUFYDIwd8a5@cluster0.ophfd.mongodb.net/blogposts?retryWrites=true&w=majority"
      );
    } catch (error) {
      res.status(500).json({ message: error.message });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res
        .status(500)
        .json({ message: "something is wrong when add data into database ." });
    }

    console.log(newMessage);

    res.status(201).json({ message: "added the feedback", data: newMessage });
    client.close();
  }
}

export default handler;
