import { create } from "apisauce";
const apiClient = create({ baseURL: "http:///172.20.10.1:9000/api/" });

// import settings from "../config/settings";

// After setting the deployment in settings.js, remove the https and import setting and change the https. 
// const apiClient = create({ baseURL: settings.apiUrl });

export default apiClient;
