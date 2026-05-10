const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

const TOKEN = process.env.BOT_TOKEN;

app.post("/", async (req,res)=>{

  const msg = req.body.message;

  if(!msg) return res.sendStatus(200);

  const chatId = msg.chat.id;
  const text = msg.text || "";

  if(text.startsWith("/start")){

    await axios.post(
      `https://api.telegram.org/bot${TOKEN}/sendMessage`,
      {
        chat_id: chatId,
        text: "Bot aktif"
      }
    );
  }

  res.sendStatus(200);
});

app.listen(process.env.PORT || 3000);
