

export default function AppBtn(btn) {
      const { index, title, selectedIndex, setSelectedIndex } = btn;

    return (
        <div className="p-top-100 container">

       

            <button
                onClick={() => setSelectedIndex(index)} className={index=== selectedIndex ?"btn-active" :"button"}>

                    {title}</button>
        </div>




    )
}