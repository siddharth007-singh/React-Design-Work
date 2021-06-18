import './App.css';
import React,{useState,useEffect} from 'react';
import Fonts from './Components/Fonts';
import Banner from './Components/Banner';
import Tables from './Components/Table';
import SecBanner from './Components/SecBanner';
import { Dropdown } from 'react-bootstrap';
import { FaTelegramPlane } from 'react-icons/fa';

function App() {
  const getMode = ()=>{
    return JSON.parse(localStorage.getItem("mode")) || false;
  }
  const[dark,setdark]=useState(getMode());
  useEffect(()=>{
    localStorage.setItem("mode",JSON.stringify(dark))
  },[dark])
  return (
    <div className={dark ? "App dark-theme":"App"}>
      <div className="App-header">
      <div className="container-fluid">
                <div className="row">
                    <div className="header">
                        <div className="row">
                            <div className="text-center col-md-5 col-lg-4 btnsets">
                                <div className="mobile-header">
                                    <h2 className="maintext">HODLINFO</h2>
                                    <p className="subtext">Powered By <span className="subtexts">Finstreet</span></p>
                                </div>
                            </div>
                            <div className="col-md-2 col-lg-5 ">
                                <div className="row adjust">
                                    <div className="col-md-3 drop1">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic" className="midbtn m-0">
                                                INR
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">INR</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="col-md-3 drop2">
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic" className="midbtn m-0">
                                                BTC
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#/action-1">BTC</Dropdown.Item>
                                                <Dropdown.Item href="#/action-1">ETCH</Dropdown.Item>
                                                <Dropdown.Item href="#/action-1">USDT</Dropdown.Item>
                                                <Dropdown.Item href="#/action-1">DTX</Dropdown.Item>
                                                <Dropdown.Item href="#/action-1">DASH</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="col-md-4 drop3">
                                        <button type="button" class="btn midbtn text-white">BUY BTC</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-3 sides">
                                <div className="secbtn">
                                  <button type="button" class="btn btnsocial"><FaTelegramPlane />  Connect To Instagram</button>
                                  <div class="form-switch switch">
                                      <input class="form-check-input iconswitch" type="checkbox" checked={dark} onChange={()=>setdark(!dark)} />
                                  </div>   
                                </div>       
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          <div className="container-fluid">
            <div className="row">
              <Fonts/>
              <Banner/>
              <Tables/>
              <SecBanner/>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;
