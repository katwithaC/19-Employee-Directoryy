import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=200";

export default {
    search: function(query) {
        return axios.get(BASEURL + query);
    }
};



// import axios from "axios"

// export default {
//     getRandomEmployees: function() {
//         return axios.get("https://randomuser.me/api/?results=200");
//     }
// };