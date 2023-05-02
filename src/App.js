import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {  useState } from 'react';
import axios from 'axios';

function App() {
  
  const API_Key="1276038ad47672ca8d72582ed77c5fde"
  const [inputCity,setInputCity] = useState("")
  const [data, setData]=useState({})

    const getWeatherDetails =(cityName)=>{
      const API_Url="https://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&appid="+ API_Key

      if(!cityName) return
      

    
      axios.get(API_Url).then((res)=>{
        console.log("response",res)
        setData(res.data)

      }).catch((err) => {
        console.log("err",err)
      })
    }

    const handleChangInput = (e) =>{
      console.log("value", e.target.value)
      setInputCity(e.target.value)
    }
     
    const handleSearch = () =>{
      getWeatherDetails(inputCity)
      
    }

  return (
    <div className='col-md-12'>
        <div className='weatherBg'>
         <h1>Weather Forecasts</h1>

         <div className='d-grid gap-3 col-4 mt-4'>
            <input type="text" className='form-control' value={inputCity} placeholder="cityName*"
            onChange={handleChangInput} />
            <button className='btn btn-primary' type='button' onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>

        {Object.keys(data).length>0 &&
          <div className='col-md-12 text-center mt-5'>
            <div className='shadow rounded weatherResultBox'>
                <img src='Weathericon.jpg' alt="" className='weathericone' />
                <h5 className='weatherCity'>
                 {data?.name}
                </h5>
                <h6 className='weatherTemp'> Temperature:{((data?.main?.temp)-273.15).toFixed(2)}°C</h6>
                <h6 className='weatherTemp'> Temperature-Min:{((data?.main?.temp_min)-273.15).toFixed(2)}°C</h6>
                <h6 className='weatherTemp'> Temperature-Max:{((data?.main?.temp_max)-273.15).toFixed(2)}°C</h6>
                <h6 className='Humidity'>Humidity:{(data?.main?.humidity)}</h6>
          
            </div>
          </div>
        } 
        
    </div>
  );

}
export default App;
