const express = require("express")
// const { sendEmail } = require("../controllers/formController");
const { sendFormEmail } = require("../controllers/formController");

const router = express.Router();

router.post("/send-email", sendFormEmail);



module.exports = router;

