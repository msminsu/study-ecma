
const isMobile = (agent = navigator.userAgent.toLowerCase())=>{
    return /(android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini)/i.test(agent);
}

export default isMobile;