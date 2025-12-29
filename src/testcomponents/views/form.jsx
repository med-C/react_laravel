

// export default function Form(a){
//     return(
//         <>
//             <p>{a.lastname} : {a.children}</p>
//         </>
//     )
// }

export default function Form({fruit}){
    const f = () => {
    return fruit.map(frui => {
        return <li>{frui}</li>
    })
    }

    return(
        <>
            <ul>
                {f()}
            </ul>
        </>
    )

}