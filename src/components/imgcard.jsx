
function Imgcards(data){
    return(
        <div className="Imgcard">
            <img src={`${data.Cimage}?auto=compress&cs=tinysrgb&w=400`} alt={data.Cname} title={data.Cname}/>
            <p>{data.Cname}</p>
            <p><strong>Brand: </strong>{data.Ccompany}</p>
            <p><strong>Year: </strong>{data.Cyear}</p>
        </div>
    )
}
export default Imgcards
