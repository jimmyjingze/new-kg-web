import serviceHP from "./service";
const NeteaseCloudMusicApi = URL_DOMAIN.NeteaseCloudMusicApi;

/**
 * @description 手机登录
 * @param {phone}
 * @param {password}
 * */
export function getLoginCellPhone(options) {
  return serviceHP({
    url: NeteaseCloudMusicApi + "/login/cellphone",
    method: "get",
    params: options
  });
}

//
/**
 * @description 手机登录
 * @param {phone}
 * */
export function getCaptcha(options) {
  return serviceHP({
    url: NeteaseCloudMusicApi + "/captcha/sent",
    method: "get",
    params: options
  });
}
