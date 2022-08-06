import Axios from  "axios"

export class BackEndCommunicatorHelper {
    static GET = "get"
    static POST = "post"
    constructor(baseurl) {
        this.baseurl = baseurl
    }
    openRequest({useBase = true, url, method, body = {}, params = {}, headers = {}}){
        return new Request((this.baseurl && useBase ? this.baseurl + "/": "" )+  url, method, body, params, headers)
    }
 

}

class Request {
    constructor(url, method, body = {}, params = {}, headers = {}){
        this.url = url
        this.method = method
        this.body = body
        this.params = params
        this.headers = headers
    }
    async send(){
        const config = {}
        if(this.params) config.params = this.params
        if(this.headers) config.headers= this.headers
        switch(this.method) {
            case BackEndCommunicatorHelper.GET:
                return await Axios.get(this.url, config)
            case BackEndCommunicatorHelper.POST:
                return await Axios.post(this.url, this.body, config)
            default:
                return 
        }
    }
}
