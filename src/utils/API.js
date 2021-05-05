import axios from "axios";

const BASEURL = "https://developer.nps.gov/api/v1/parks?q=";
const APIKEY = "&api_key=TDDqbGBzrBbUeIcGjpGeZw2mfbjxjyMifb40snAQ";


export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};

