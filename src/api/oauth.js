import axios from "axios";

const clientId = process.env.VUE_APP_CLIENT_ID;
const clientSecret = process.env.VUE_APP_CLIENT_SECRET;

const API_URL = "https://oauth.battle.net/token";

function getToken() {
  const body = new FormData();
  body.append("grant_type", "client_credentials");

  const config = {
    auth: { username: clientId, password: clientSecret },
  };

  return axios.post(API_URL, body, config);
}

export { getToken };
