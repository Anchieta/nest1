//import Image from "next/image";
//import { Geist, Geist_Mono } from "next/font/google";

const nome = 'Anchieta'
let canal = "- Curso -"

function Topo() {
  return(
    <div className="flex justify-between items-center bg-zinc-300 h-[50px]">
        <div>Logo</div>
        <div className="flex flex-col justify-center items-center">
          <div className="text-xl">{canal}</div> 
          <div className="subtitulo">Nest</div>
        </div>
        <div>{nome}</div>
    </div>
  )
}


export default function Home() {

  return (
    <main>
      <Topo />
      <div></div>
      <div></div>
    </main>
  );
}
