import AppBtn from "./AppBtn"
import AppCard from "./AppCard"
import { useState } from "react";


const btn = [
  {
    title: "HTML",
    description: "HTML è il linguaggio di markup usato per strutturare le pagine web.\nFornisce la base su cui si costruiscono tutti gli altri elementi del sito."
  },
  {
    title: "CSS",
    description: "CSS permette di stilizzare la struttura HTML con colori, layout e font.\nÈ essenziale per creare interfacce moderne e responsive."
  },
  {
    title: "JavaScript",
    description: "JavaScript aggiunge interattività e logica alle pagine web.\nPermette di manipolare il DOM e creare applicazioni dinamiche."
  },
  {
    title: "Node.js",
    description: "Node.js permette di eseguire JavaScript lato server.\nÈ ideale per creare applicazioni scalabili e veloci."
  },
  {
    title: "Express",
    description: "Express è un framework minimalista per Node.js.\nFacilita la creazione di API e server web in modo semplice e veloce."
  },
  {
    title: "ReactJs",
    description: "ReactJs è una libreria per costruire interfacce utente basate su componenti.\nÈ ottima per creare applicazioni web dinamiche e performanti."
  }
];


export default function AppMain() {

  const [selectedIndex, setSelectedIndex] = useState(null);
  return (

    <div>
      <div className='flex container'>
        {btn.map((curBtn, index) =>
          <AppBtn
            key={index}
            title={curBtn.title}
            index={index}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
             />

        )}
      </div>
  
       <AppCard />
    
      

    </div>
  )
}



