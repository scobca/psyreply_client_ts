import axios from "axios";

import apiConf from "@/api/api.conf";

export class ApiError extends Error {
    data: null

    constructor(msg: string | undefined, data = null) {
        super(msg);
        this.data = data;
    }
}

export default class ApiResolver {
    endpoint = "";

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    request(url: string, method: any, data: any) {
        url = `${apiConf.endpoint}/${this.endpoint}/${url}`;
        return (new Promise((resolve, reject) => axios({
            url,
            method,
            data,
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res) => {
            if (res.status < 400) {
                if (res.status < 204)
                    resolve(res.data.body);
                else
                    resolve(null);
            } else {
                reject(res)
                console.log(res)
            }
        }).catch((err: any) => {
            reject(err);
        })));
    }
}
