import './App.css';
import Population from "./assets/population.svg"
import Country from "./assets/country.svg"
import api from "./service/api"
import {useEffect, useState} from "react"

function App() {

  const [regioes, setRegioes] = useState()

  useEffect(() => {
    async function fetchData(){
      await api.get("regioes").then(response => {
        setRegioes(response.data)
      })
    } 
    fetchData();
  }, [])

  if(regioes)
    console.log(regioes)

  return (
    <div className="App">
      
      Regiões Brasileiras:

      <div className="basic">

        <div className="card">
          <div className="card-body">
            <div className="card-title">Centro-Oeste</div>
            <hr className="card-divisor"></hr>
            <img id="pop" src={Population}></img> <h6>{regioes.somaCentro}</h6>
            <img id="country" src={Country}></img> <h6>{regioes.lengthCentro}</h6>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="card-title">Nordeste</div>
            <hr class="card-divisor"></hr>
            <img id="pop" src={Population}></img> <h6>{regioes.somaNordeste}</h6>
            <img id="country" src={Country}></img> <h6>{regioes.lengthNordeste}</h6>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="card-title">Norte</div>
            <hr className="card-divisor"></hr>
            <img id="pop" src={Population}></img> <h6>{regioes.somaNorte}</h6>
            <img id="country" src={Country}></img> <h6>{regioes.lengthNorte}</h6>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="card-title">Sudeste</div>
            <hr className="card-divisor"></hr>
            <img id="pop" src={Population}></img> <h6>{regioes.somaSudeste}</h6>
            <img id="country" src={Country}></img> <h6>{regioes.lengthSudeste}</h6>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div className="card-title">Sul</div>
            <hr className="card-divisor"></hr>
            <img id="pop" src={Population}></img> <h6>{regioes.somaSul}</h6>
            <img id="country" src={Country}></img> <h6>{regioes.lengthSul}</h6>
          </div>
        </div>

      </div>
      
    </div>
  );
}

export default App;
