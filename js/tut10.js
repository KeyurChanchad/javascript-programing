console.log('this is tut 10');
i = 786;
if(1){
    // let has block scope
    let i = 234;
    console.log(i)
}
console.log(i);

function ui(name)
{
    let i = 9;
    console.log(i);
    return `This is a ${name} ui`;
}

console.log(ui("keyur"), i)

const mygreet = function(name, thank='Thank You'){
    let msg = `Happy Birthday ${name} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you. ${thank}!`;
    return msg;
}

let name = 'keyur';
let name2 ='vishal';

let val = mygreet(name);
// console.log(val);


const myobj = {
    name: "keyur",
    game: function(){
        return "GTA 5";
    }
}
// console.log(myobj.game())

arr = ['fruit', 'vegetable', 'furniture'];
arr.forEach(function(element, index) {
    console.log(index, element)
});         
