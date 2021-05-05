import axios from "axios";

const BASEURL = "http://www.omdbapi.com/?t=";
const APIKEY = "&apikey=2b15ef84";


export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};

