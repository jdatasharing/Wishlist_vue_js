import Cookies from 'js-cookie';
import axios from 'axios';

const token = Cookies.get('id_token');
const baseDomain = 'http://45.76.97.89:1337';
const demolink = 'http://192.168.0.2:4002';
const authorization_prefix = 'Beaer ';

export const customHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json'
    //Authorization: authorization_prefix + token || undefined
};

export const baseUrl = `${baseDomain}`;
export const demolinkimage = '${demolink}';

export default axios.create({
    baseUrl,
    headers: customHeaders
});

export const serializeQuery = query => {
    return Object.keys(query)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
        .join('&');
};
