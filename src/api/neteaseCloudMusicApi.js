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


/**
 * @description 歌单分类
 * 
 */
export function playList() {
  return serviceHP({
    url: NeteaseCloudMusicApi + "/playlist/catlist",
    method: "post",
  });
}


/**
 * 
 * @description 热门歌单分类
 *
 */
export function playListHot() {
  return serviceHP({
    url: NeteaseCloudMusicApi + "/playlist/hot",
    method: "post",
  });
}


/**
 * @description 搜索
 * @param {keywords}  
 * 
 */
export function keySearch(words) {
  return serviceHP({
    url: NeteaseCloudMusicApi + "/search",
    method: "post",
    params: words
  });
}


/**
 * @description 默认搜索关键词
 * 
 */
export function keyDefault() {
  return serviceHP({
    url: NeteaseCloudMusicApi + "/search/default",
    method: "post",
  });
}


/**
 * @description 热搜列表(简略)
 * 
 */
export function hotList() {
  return serviceHP({
    url: NeteaseCloudMusicApi + "/search/hot",
    method: "post",
  });
}


/**
 * @description 热搜列表(详细)
 * 
 */
export function hotListDetail() {
  return serviceHP({
    url: NeteaseCloudMusicApi + "/search/hot/detail",
    method: "post",
  });
}



/**
 * @description 搜索建议
 * @param {keywords}  
 */
export function keySearchSuggest(words) {
  return serviceHP({
    url: NeteaseCloudMusicApi + "/search/suggest",
    method: "post",
    params: words
  });
}


/**
 * @description 搜索多重匹配
 * @param {keywords}  
 */
export function searchMultimatch(words) {
  return serviceHP({
    url: NeteaseCloudMusicApi + "/cloudsearch/multimatch",
    method: "post",
    params: words
  });
}