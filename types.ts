//bollean
let s: boolean
s=true
//string("example",'example',`example`)
let message:string
message=`oii ${s}`
console.log(message)
//number(int,float,hexadecimal,binario)
let total:number
total=5.4

//array (type[] | Array<number>)
let x:number[]
x=[1,2,5]

let values: Array<number>
values=[1,2,3]

//tuple
let tup: [number,number,boolean]
tup=[4.2,5,true]

//enum (chave valor)
enum colors{
  branco='#fff',
  preto='#000'

}

//any (pode receber valor de qualquer tipo)
let b: any
b=1
b=true
b="dddd"

//object

let n:object
n={
  key:"cc"
}

//type inference
let message2="mmmmm"

window.addEventListener("click",(e)=>{
  console.log(e.target);
})