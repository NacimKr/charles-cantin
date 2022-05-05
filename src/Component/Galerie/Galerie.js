import React,{useState,useEffect} from 'react';
import PhotosGalerie from '../PhotosGaleries/PhotosGaleries';

const Galerie = () => {

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
  }, [])

  console.log(info);
  return (
    <>
      <PhotosGalerie/>

    </>
  )
}

export default Galerie;