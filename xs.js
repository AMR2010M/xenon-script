function type (word){
    console.log(word);
}
function error (word){
    console.error(word);
}
function warn (word){
    console.warn(word);
}




function cut(text,from,to){
const letters=[...text];

const cutted = text.slice(from*1, to*1);
return cutted;
}

function define(VariableName,value){
 window[VariableName] = value;

}

function define(VariableName,value){
 window[VariableName] = value;

}
function get(url,VariableName,ErrorMessage,EndPoint){
    fetch(url)
  .then(response => response.json())
  .then(data =>eval(` window[${VariableName}] = data.${EndPoint} `))
  .catch(error => console.error(ErrorMessage));
}









