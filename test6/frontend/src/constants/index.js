// API_BASE_URL : AWS 올리기 전에 변경
// export const API_BASE_URL = 'http://172.16.101.94:5000';
export const API_BASE_URL = 'http://localhost:5000';

export const ACCESS_TOKEN = 'accessToken';

export const POLL_LIST_SIZE = 30;
export const MAX_CHOICES = 6;
export const POLL_QUESTION_MAX_LENGTH = 140;
export const POLL_CHOICE_MAX_LENGTH = 40;

export const NAME_MIN_LENGTH = 4;
export const NAME_MAX_LENGTH = 40;

export const USERNAME_MIN_LENGTH = 3;
export const USERNAME_MAX_LENGTH = 15;

export const EMAIL_MAX_LENGTH = 40;

export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 20;

// Warning 삭제
// eslint-disable-next-line
function getWindowDimensions(){
    return {
        width, 
        height
    }
}

const {innerWidth: width, innerHeight: height} = window;


export const WIDTH =  window.innerWidth / 1920; 
export const HEIGHT = window.innerHeight / 990;