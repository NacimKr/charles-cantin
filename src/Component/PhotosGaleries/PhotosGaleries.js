import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";

const PhotosGalerie = (props) => {

    const handleMouseEnter = e => {
        e.target.style.background = "#888";
      }
      const handleMouseLeave = e => {
        e.target.style.background = "#dcdcdc";
      }

      const [info, setInfo] = useState(null);
      const [load, setLoad] = useState(true);
    
      useEffect(() => {
        const getAPI = async () => {
          let appel = await fetch('http://localhost:1337/api/galeries');
          let resp = await appel.json();
          setInfo(resp.data);
          setLoad(false);
        }
        getAPI();
      }, []);

  return (
      <div className="d-flex flex-wrap justify-content-center gap-3">
      { !load && info.map(item =>{
          return(
            <>
                  <div 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}
                    className="card border-dark text-center fs-1 mb-3 mx-auto p-5 fw-bold mt-4"
                    style={{width: "20rem", background:"#dcdcdc", height:"15rem", lineHeight:"120px"}}>
                      <Link class="nav-link" to={`/${item.attributes.GalleryThemes.toLowerCase()}`}>{item.attributes.GalleryThemes}</Link>
                  </div>
            </>
          )
      })}
      </div>
  )
}

export default PhotosGalerie;