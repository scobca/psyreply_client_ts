import apiConf from "@/api/api.conf";

export default class Client {
    origin = apiConf.endpoint

    execute(url: string, init: RequestInit | undefined) {
        console.log(url)
        return new Promise(resolve => {
            fetch(`${this.origin}${url}`, init)
                .then(res => resolve(res.json().then(res => res.body)))
                .catch(err => resolve(err))
        })
    }

    getBlock(token: any) {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
        return this.execute(`/block/user`, {
            method: 'GET',
            headers,
        })
    }

    passBlock(data: string, token: any) {
        data = JSON.stringify(data)

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        return this.execute(`/result/block/pass`, {
            method: 'POST',
            headers,
            body: data
        })
    }

    changeTokenToUserToken(blockToken: any) {
        const headers = {
            // 'Content-Type': 'application/json',
            'Authorization': `Bearer ${blockToken}`
        }

        return this.execute(`/user/assign`,{ headers })
    }

    getResults(token: any, userId: any) {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        return this.execute(`/result/user/all`, { headers })
    }

    getCurResults(token: any) {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

        return this.execute(`/result/all/last`, {
            method: 'POST',
            headers
        })
    }
}
