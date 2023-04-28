import axios from "axios";
import { Platform } from "react-native";
import { ProblemEntity } from "./problemEntity";

export class ProblemsAPI {
    static myIp: string = '10.50.130.15'

    static async create(problem: ProblemEntity) {
        try {
            console.log("sending data", problem);
            
            const result = await axios.post("http://" + this.myIp + ':3003/problems', {data: problem, headers: { "Content-Type": "multipart/form-data" }});
            return result.data;
        }
        catch(error) {
        }
    }

    static async fetchAllProblems() {
        try {
            const result = await axios.get("http://" + this.myIp + ':3003/problems')
            console.log(result);
            
            return result.data
        }
        catch(error) {
            console.log("error", error);
        }
    }
}