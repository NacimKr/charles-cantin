import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";
import PhotosGaleries from '../PhotosGaleries/PhotosGaleries';

const Galerie = () => {

  const [info, setInfo] = useState(null)
  const [load, setLoad] = useState(true)

  useEffect(() => {
    const getAPI = async () => {
      let appel = await fetch('http://localhost:1337/api/galeries')
      let resp = await appel.json();
      setInfo(resp.data)
      setLoad(false)
    }
    getAPI()
  }, [])

  const handleMouseEnter = e => {
    e.target.style.background = "#888"
  }
  const handleMouseLeave = e => {
    e.target.style.background = "#dcdcdc"
  }
  
  console.log(info);
  return (
    <div className="d-flex flex-wrap justify-content-center gap-3">
    {!load && info.map(item => {
      return (

              <Link to={`/${item.attributes.GalleryThemes.toLowerCase()}`} className="link-dark text-decoration-none" element={<PhotosGaleries/>}>          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
              class="card border-dark text-center fs-1 mb-3 mx-auto p-5 fw-bold mt-4" style={{width: "20rem", background:"#dcdcdc", height:"15rem", lineHeight:"120px"}}>{item.attributes.GalleryThemes}</div></Link>
          
      )
      
    })}
    </div>
  )
}

export default Galerie