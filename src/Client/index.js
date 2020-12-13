import { performAction } from './j/appGeoNames'
import { postData } from './j/PostData'
import { getWeather } from './j/getWeather'
import { getPic } from './j/getPicture'
import { checkValid } from './j/checkValid'
import './style/style.scss'
import './style/stylemini.scss'
import vaipl from './view/img/vairpl.png';
let homeImg=document.getElementById('picon');
homeImg.src=vaipl;
export { performAction, postData, getWeather, getPic, checkValid }