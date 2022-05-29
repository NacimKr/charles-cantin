import React,{useState,useEffect} from 'react'

const Couple = () => {
  const [info, setInfo] = useState(null);
  const [load, setLoad] = useState(true);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const getAPI = async () => {
      let appel = await fetch('http://localhost:1337/api/galeries/?populate=*');
      let resp = await appel.json();
      setInfo(resp.data[3].attributes.images);
      const newArr = [...arr];
      newArr.push(resp.data[3].attributes.images.data)
      setArr(newArr)
      setLoad(false);
    }
    getAPI();
  }, []);

  
  return (
    <div className="d-flex flex-wrap justify-content-center">
      { !load && arr.map(item =>{
        return (
          item.map(img =>{
            // load ? console.log("attend") : console.log(img.attributes.formats.small.url);
            return(
              <>
                <img 
                src={`http://localhost:1337${img.attributes.formats.small.url}`} 
                alt="test" 
                style={{
                  width:"20%",
                  backgroundSize:"cover",
                  height:"auto",
                  margin:'5px'
                }}
                /> 
              </>
            )
          })
        )
        })
      }
    </div>
  )
}

export default Couple