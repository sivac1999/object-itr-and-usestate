function Arrayofarr(props){
   const {data}=props;
 const storevalue=data.map((e,i)=>{
    return(
        <ul key={i}>
            <li>Name:{e.name}</li>
            <li>Skill-Name:{e.skills[0].name},skills-type:{e.skills[0].name}</li>
            <li>Skill-Name:{e.skills[1].name},skills-type:{e.skills[1].name}</li>
        </ul>
    )
 })
    return(
        <div>
          {storevalue}
        </div>
)

    
}
export default Arrayofarr