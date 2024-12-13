const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AZoR6y4qLZDVmD0tHH8xce-gBWD3UyQTgCogFZu_WoFYyAmxiDcum0upD_pkK6nJjVL-aM8Cyr37Ppw6",
  client_secret: "ENmBADtc9KwAqaeRmoS6xg37U5zTPU7eRbX4AlTo3AIRQjPGMYRF7yOreqsGPHCaBMcJgWIGxZT5XvXb",
});

module.exports = paypal;