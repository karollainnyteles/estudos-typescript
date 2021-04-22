type AccountInfo={
  id:number;
  name:string;
  email?:string;
}

const account:AccountInfo={
  id:74,
  name:"karollainny",
  email:"karol@mail.com"
}

type CharInfo={
  nickname:string;
  level:number;
}

const char : CharInfo={
  nickname:"karol",
  level:150
} 

type PlayerInfo= AccountInfo & CharInfo;
const player: PlayerInfo={
  name:"Karollainny",
  nickname:"karoll",
  level:150,
  id:5
}