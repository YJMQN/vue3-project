export interface SettingsType {
    /**
     * iconfont.cn 项目在线生成的 js 地址
     */
    iconfontUrl: string[];
    baseUrl: string;
}
  
const settings: SettingsType = {
    iconfontUrl: ['//at.alicdn.com/t/font_2450336_tqf0jgmbyic.js'],
    baseUrl : "http://8.140.132.99:3001",
};

export default settings;
  