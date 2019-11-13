import axios from "axios";

export default {
    getQRs: function () {
        return axios.get("/api/toqr");
    },
    getQR: function (id) {
        return axios.get("/api/toqr/" + id);
    },
    deleteQR: function (id) {
        return axios.delete("/api/toqr/" + id);
    },
    saveQR: function (toqrData) {
        return axios.post("/api/toqr", toqrData);
    }
};
