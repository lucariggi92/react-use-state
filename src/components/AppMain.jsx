import AppBtn from "./AppBtn"
import AppCard from "./AppCard"



const btn = ["HTML", "CSS", "JavaScript", "Node.js", "Express", "ReactJs"]

export default function AppMain() {
  return (

    <div>
      <div className='flex container'>
        {btn.map((curBtn, index) =>
          <AppBtn
            key={index}
            title={curBtn} />
        )}


      </div>
      <AppCard />
    </div>
  )
}