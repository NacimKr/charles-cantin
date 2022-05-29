import React,{useState,useEffect} from 'react';
import {Link} from "react-router-dom";

const PhotosGalerie = (props) => {

    const handleMouseEnter = e => {
        e.target.style.background = "#999";
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
      <div className="d-flex flex-wrap justify-content-center gap-3 w-75 mx-auto bg-light">
      { !load && info.map(item =>{
          return(
            <>
              <Link 
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}
                class="nav-link text-dark card border-dark text-center fs-1 mb-3 mx-auto p-5 fw-bold mt-2 shadow w-25" 
                to={`/${item.attributes.GalleryThemes.toLowerCase()}`}
                style={{width: "5rem", background:"#dcdcdc", height:"12rem", lineHeight:"100px"}}>
            
                  {item.attributes.GalleryThemes}
            
              </Link>
            </>
          )
      })}
      </div>
  )
}

export default PhotosGalerie;