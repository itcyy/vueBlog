import axios from "./request"
//请求示例
//get

export const markPost = (data) => {
    return axios({
        url: "/markdown",
        method: "post",
        data,
        config: {
            headers: {
                'Request-Type': 'wechat'
            },
            timeout: 3000
        }
    })
}
