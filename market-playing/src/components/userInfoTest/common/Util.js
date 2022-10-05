/**
 * @FileName    : Util.js
 * @Description : 
 * @History     : 2022.10.05.  리코더   임시페이지 생성
 * 
 */

const padNumber = (num, length) => {
    // console.log("padNumber ", num, length);
    return String(num).padStart(length, '0');
};

export default padNumber;