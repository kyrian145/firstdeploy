
interface TypeProps{
    title:string
    img: string
    title2:string
    description?:string
}


const TrialProps =({title , img , title2 ,description}:TypeProps)=>{
    return(
        <div>
            <h1 className=" text-black font-bold ">{title}</h1>
            <div>
                <img src={img}/>
                <h1>{title2}</h1>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default TrialProps;