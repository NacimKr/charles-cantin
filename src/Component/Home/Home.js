import React, {useEffect,useState} from "react";
 
const Home = () => {

  const [info, setInfo] = useState(null);
  const [load, setLoad] = useState(true);

  useEffect(()=>{
    fetch('http://localhost:1337/api/page-accueils?populate=*')
    .then(appel => appel.json())
    .then(reponse => {
      console.log(reponse);
      setInfo(reponse.data)
      setLoad(false)
    })
  },[]);

  load ? console.log("attend") : console.log(info);
  return (
    <div>
      {!load && info.map(img => {
        return( 
        <>
        <img src={`http://localhost:1337${img.attributes.Background.data[0].attributes.formats.large.url}`}
        alt={img.attributes.Background.data[0].attributes.alternativeText} style={{width:"100%", height:"100vh", position:"absolute", zIndex:"-1"}}/>
        <img src={`http://localhost:1337${img.attributes.Logo.data[0].attributes.formats.thumbnail.url}`} alt="" style={{position:"absolute", zIndex:"1" ,left:"50%", top:"50%", transform:"translate(-50%,-50%) scale(1.5)", opacity:".5"}}
        />
        </>
        )
      })}
    </div>
  )
}

export default Home