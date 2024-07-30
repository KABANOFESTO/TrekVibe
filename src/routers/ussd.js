const express = require("express");
const Africastalking = require("africastalking");
const dotenv = require("dotenv");
const Message = require("../models/message");
dotenv.config();

const router = express.Router();
const username = process.env.USERNAME;
const apiKey = process.env.API_KEY;

const africasTalking = Africastalking({
  apiKey: apiKey,
  username: username
});

const sms = africasTalking.SMS;

router.post("/ussd", async (req, res) => {
  const { sessionId, serviceCode, phoneNumber, text } = req.body;

  console.log('information:', req.body);
  let response = "";

  if (text === "") {
    response = `CON Welcome to TemberaNawe! Choose language:
        1. Kinyarwanda
        2. English `;
  } else if (text === "1") {
    response = `CON Gusura Iyihe ntara?
    1. Amajyepfo
    2. Amajyaruguru
    3. Iburengerazuba
    4. Iburasirazuba
    5. Umujyi wa Kigali`;
  } else if (text === "2") {
    response = `CON Province to Visit?
    1. Southern Province
    2. Northern Province
    3. Western Province
    4. Eastern Province
    5. Kigali City`;
  } else if (text === "1*1") {
    response = `CON Akahe Karere?
    1. Huye
    2. Kamonyi
    3. Nyamagabe
    4. Gisagara
    5. Nyanza`;
  } else if (text === "2*1") {
    response = `CON Choose the district?
    1. Huye
    2. Kamonyi
    3. Nyamagabe
    4. Gisagara
    5. Nyanza`;
  } else if (text === "1*1*1") {
    response = `CON Aho gusura muri HUYE
    1. National Ethnographic of Rwanda
    2. King's Palace Museum`;
  } else if (text === "1*1*1*1") {
    try {
      const messageData = await Message.findOne({ sequence: "1*1*1*1" });
      if (messageData) {
        sms.send({
          to: phoneNumber,
          message: messageData.response
        }).then((response) => {
          console.log(response);
        }).catch((error) => {
          console.error(error);
        });
        response = "END Uraza kubona ubutumwa buguha amakuru arambuye muri SMS.";
      } else {
        response = "END Message not found.";
      }
    } catch (error) {
      console.error(error);
      response = "END An error occurred.";
    }
  } else if (text === "2*1*1") {
    response = `CON Where to visit in HUYE
    1. National Ethnographic of Rwanda
    2. King's Palace Museum`;
  } else if (text === "2*1*1*1") {
    try {
      const messageData = await Message.findOne({ sequence: "2*1*1*1" });
      if (messageData) {
        sms.send({
          to: phoneNumber,
          message: messageData.response
        }).then((response) => {
          console.log(response);
        }).catch((error) => {
          console.error(error);
        });
        response = "END You will receive details about National Ethnographic of Rwanda via SMS.";
      } else {
        response = "END Message not found.";
      }
    } catch (error) {
      console.error(error);
      response = "END An error occurred.";
    }
  } else if (text === "1*2") {
    response = `CON Akahe Karere?
    1. Musanze`;
  } else if (text === "2*2") {
    response = `CON Choose the district?
    1. Musanze`;
  } else if (text === "1*2*1") {
    response = `CON Aho gusura muri MUSANZE?
    1. Volcanoes National Park
    2. Musanze Caves`;
  } else if (text === "1*2*1*1") {
    try {
      const messageData = await Message.findOne({ sequence: "1*2*1*1" });
      if (messageData) {
        sms.send({
          to: phoneNumber,
          message: messageData.response
        }).then((response) => {
          console.log(response);
        }).catch((error) => {
          console.error(error);
        });
        response = "END Uraza kubona ubutumwa buguha amakuru arambuye muri SMS.";
      } else {
        response = "END Message not found.";
      }
    } catch (error) {
      console.error(error);
      response = "END An error occurred.";
    }
  } else if (text === "2*2*1") {
    response = `CON Where to Visit in MUSANZE?
    1. Volcanoes National Park
    2. Musanze Caves`;
  } else if (text === "2*2*1*1") {
    try {
      const messageData = await Message.findOne({ sequence: "2*2*1*1" });
      if (messageData) {
        sms.send({
          to: phoneNumber,
          message: messageData.response
        }).then((response) => {
          console.log(response);
        }).catch((error) => {
          console.error(error);
        });
        response = "END You will receive details about National Volcanoes Park of Rwanda via SMS.";
      } else {
        response = "END Message not found.";
      }
    } catch (error) {
      console.error(error);
      response = "END An error occurred.";
    }
  } else if (text === "1*3") {
    response = `CON Hitamo Akarere?
    1. Karongi
    2. Nyamasheke
    3. Nyamagabe`;
  } else if (text === "2*3") {
    response = `CON Choose the District?
    1. Karongi
    2. Nyamasheke
    3. Nyamagabe`;
  } else if (text === "1*3*1") {
    response = `CON Aho gusura muri Karongi?
    1. Amashyuza ya Karongi
    2. Kivu Belt
    3. Bises`;
  } else if (text === "1*3*1*1") {
    try {
      const messageData = await Message.findOne({ sequence: "1*3*1*1" });
      if (messageData) {
        sms.send({
          to: phoneNumber,
          message: messageData.response
        }).then((response) => {
          console.log(response);
        }).catch((error) => {
          console.error(error);
        });
        response = "END Uraza kubona ubutumwa buguha amakuru arambuye muri SMS.";
      } else {
        response = "END Message not found.";
      }
    } catch (error) {
      console.error(error);
      response = "END An error occurred.";
    }
  } else if (text === "2*3*1") {
    response = `CON Where to Visit in Karongi?
    1. Karongi Hot Springs
    2. Kivu Belt
    3. Bises`;
  } else if (text === "2*3*1*1") {
    try {
      const messageData = await Message.findOne({ sequence: "2*3*1*1" });
      if (messageData) {
        sms.send({
          to: phoneNumber,
          message: messageData.response
        }).then((response) => {
          console.log(response);
        }).catch((error) => {
          console.error(error);
        });
        response = "END You will receive details about Karongi Hot Springs of Rwanda via SMS.";
      } else {
        response = "END Message not found.";
      }
    } catch (error) {
      console.error(error);
      response = "END An error occurred.";
    }
  } else if (text === "1*4") {
    response = `CON Hitamo Akarere?
    1. Kayonza
    2. Kirehe`;
  } else if (text === "1*4*1") {
    response = `CON Aho gusura muri kayonza?
    1. Akagera National Park`;
  } else if (text === "1*4*1*1") {
    try {
      const messageData = await Message.findOne({ sequence: "1*4*1*1" });
      if (messageData) {
        sms.send({
          to: phoneNumber,
          message: messageData.response
        }).then((response) => {
          console.log(response);
        }).catch((error) => {
          console.error(error);
        });
        response = "END Uraza kubona ubutumwa buguha amakuru arambuye muri SMS.";
      } else {
        response = "END Message not found.";
      }
    } catch (error) {
      console.error(error);
      response = "END An error occurred.";
    }
  } else if (text === "2*4") {
    response = `CON Choose the District?
    1. Kayonza
    2. Kirehe`;
  } else if (text === "2*4*1") {
    response = `CON Where to Visit in Kayonza?
    1. Akagera National Park`;
  } else if (text === "2*4*1*1") {
    try {
      const messageData = await Message.findOne({ sequence: "2*4*1*1" });
      if (messageData) {
        sms.send({
          to: phoneNumber,
          message: messageData.response
        }).then((response) => {
          console.log(response);
        }).catch((error) => {
          console.error(error);
        });
        response = "END You will receive details about Akagera National Park via SMS.";
      } else {
        response = "END Message not found.";
      }
    } catch (error) {
      console.error(error);
      response = "END An error occurred.";
    }
  } else if (text === "1*5") {
    response = `CON Hitamo Akarere?
    1. Nyarugenge
    2. Kicukiro
    3. Gasabo`;
  } else if (text === "1*5*1") {
    response = `CON Aho gusura muri Nyarugenge?
    1. Nyamirambo Neighborhood
    2. Kandt House Museum`;
  } else if (text === "1*5*1*1") {
    try {
      const messageData = await Message.findOne({ sequence: "1*5*1*1" });
      if (messageData) {
        sms.send({
          to: phoneNumber,
          message: messageData.response
        }).then((response) => {
          console.log(response);
        }).catch((error) => {
          console.error(error);
        });
        response = "END Uraza kubona ubutumwa buguha amakuru arambuye muri SMS.";
      } else {
        response = "END Message not found.";
      }
    } catch (error) {
      console.error(error);
      response = "END An error occurred.";
    }
  } else if (text === "2*5") {
    response = `CON Choose The District?
    1. Nyarugenge
    2. Kicukiro
    3. Gasabo`;
  } else if (text === "2*5*1") {
    response = `CON Where to Visit in Nyarugenge?
    1. Nyamirambo Neighborhood
    2. Kandt House Museum`;
  } else if (text === "2*5*1*1") {
    try {
      const messageData = await Message.findOne({ sequence: "2*5*1*1" });
      if (messageData) {
        sms.send({
          to: phoneNumber,
          message: messageData.response
        }).then((response) => {
          console.log(response);
        }).catch((error) => {
          console.error(error);
        });
        response = "END You will receive details about Nyamirambo Neighborhood of Rwanda via SMS.";
      } else {
        response = "END Message not found.";
      }
    } catch (error) {
      console.error(error);
      response = "END An error occurred.";
    }
  }

  res.set("Content-Type", "text/plain");
  res.send(response);
});

module.exports = router;
