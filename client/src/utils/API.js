import axios from "axios";

export default {
	getQRs: function () {
		return axios.get("/api/toqr");
	},
	getQR: function (id) {
		console.log("getQR function in utils/API.js", id);
		return axios.get("/api/toqr/" + id);
	},
	deleteQR: function (id) {
		return axios.delete("/api/toqr/" + id);
	},
	saveQR: function (toqrData) {
		console.log("saveQR function in utils/API.js", toqrData);
		return axios.post("/api/toqr", toqrData);
	}
};
