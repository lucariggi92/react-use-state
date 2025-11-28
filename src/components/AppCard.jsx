export default function AppCard(btn) {
   const { title, description} = btn;
    return (
        <div className="container p-top-100">
            <div className="border p-20">

        
            <h2>{title}</h2>
            <p>{description}</p>
               </div>
        </div>
         )
        
}