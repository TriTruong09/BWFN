const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AS4Lhei5zo5ZRoXLJ39RRTunjavzjqokYcVSi12XMfTxCl1NQvw9ptPsuIQdRrv7j54N1_O1noSXOrHc",
  client_secret: "EAAePVSHFUN2Bg4YHHVkCxeAecmIqug3ablAY2cu07DGHNoko7JiQMlTAmJO66tFQ7D-LO6UBVSBnGu3",
});

module.exports = paypal;