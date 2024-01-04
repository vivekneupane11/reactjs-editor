export default function extractNumber(txt){
    var num = txt?.replace(/[^0-9]/g, '');
return num
}