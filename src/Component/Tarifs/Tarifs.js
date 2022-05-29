import React,{useEffect, useState} from 'react'

const Tarifs = () => {

    const [info, setInfo] = useState(null);
    const [load, setLoad] = useState(true);

    useEffect(()=>{
      fetch('http://localhost:1337/api/tarifs-prestations?populate=*')
      .then(appel => appel.json())
      .then(data => {
        setLoad(false);
        setInfo(data.data)
      })
    },[])

    //console.log(info);
    load ? console.log("attend") :console.log(info);
  return (
    <div className=" w-100 d-flex gap-3 justify-content-center flex-wrap m-auto">
    {!load && info.map((item,key) => {
      return(
      <div key={key} index={key} className="mt-5 w-25" >
        <div className="card border-secondary" style={{width: "25rem"}}>
          <img src={`http://localhost:1337${item.attributes.Images.data[0].attributes.formats.thumbnail.url}`} alt="" style={{backgroundSize: "cover"}}/>
          <div className="card-body" style={{height: "15rem"}}>
            <h5 className="card-title">{item.attributes.Titre}</h5>
            <p className="card-text">{item.attributes.Description}</p>
            <a href="#" className="btn btn-secondary">{item.attributes.Price}</a>
          </div>
        </div>
      </div>
      )
    })}
    </div>
  )
}

export default Tarifs