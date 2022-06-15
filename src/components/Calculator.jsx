import React, { useState} from 'react';
import '../App.css';

export const Calculator = () => {

    const [Value, setValue] = useState("");

    const backspace = () =>{
        try {
            setValue(Value.slice(0 , -1));
        } catch (error) {
            setValue(" ");
            
        }
    }

    const total = () =>{
        try {
            setValue(eval(Value));

        } catch (error) {
            setValue("Undefined..");
            
        }
    }

    return (
        <div>
            <div className="container">
                <div className="card text-center w-25 mx-auto mt-5 shadow">
                    <div className="card-header">
                        <h1 className="display-6 fw-bolder text-center text-uppercase p-3 text-primary">Calculator</h1>
                    </div>
                    <div className="card-body">
                        <div className=" mb-3">
                            <input type="text" className="form-control shadow p-2 text-primary fs-5 text-center" value={Value} onChange={(e)=> setValue(e.target.value)} />
                        </div>
                        <div className="row">
                            <div className="col-3 col-sm-3 col-md-3 col-lg-3 mb-3">
                                <button className="btn btn-light btn-md p-3 shadow rounded-circle text-primary cal-btn" onClick={(e)=> setValue(Value + e.target.value)}  value="1">1</button>
                            </div>
                            <div className="col-3 col-sm-3 col-md-3 col-lg-3 mb-3 ">
                                <button className="btn btn-light btn-md p-3 shadow rounded-circle text-primary cal-btn" onClick={(e)=> setValue(Value + e.target.value)}  value="2">2</button>
                            </div>
                            <div className="col-3 col-sm-3 col-md-3 col-lg-3 mb-3">
                                <button className="btn btn-light btn-md p-3 shadow rounded-circle text-primary cal-btn" onClick={(e)=> setValue(Value + e.target.value)}  value="3">3</button>
                            </div>
                            <div className="col-3 col-sm-3 col-md-3 col-lg-3 mb-3">
                                <button className="btn btn-light btn-md p-2 py-3 shadow rounded-circle text-primary cal-btn" onClick={()=> backspace()}  value="C">C/CE</button>
                            </div>
                            <div className="col-3 col-sm-3 col-md-3 col-lg-3 mb-3">
                                <button className="btn btn-light btn-md p-3 shadow rounded-circle text-primary cal-btn" onClick={(e)=> setValue(Value + e.target.value)}  value="4">4</button>
                            </div>
                            <div className="col-3 col-sm-3 col-md-3 col-lg-3 mb-3">
                                <button className="btn btn-light btn-md p-3 shadow rounded-circle text-primary cal-btn" onClick={(e)=> setValue(Value + e.target.value)}  value="5">5</button>
                            </div>
                            <div className="col-3 col-sm-3 col-md-3 col-lg-3 mb-3">
                                <button className="btn btn-light btn-md p-3 shadow rounded-circle text-primary cal-btn"  onClick={(e)=> setValue(Value + e.target.value)}  value="6">6</button>
                            </div>
                            <div className="col-3 col-sm-3 col-md-3 col-lg-3 mb-3">
                                <button className="btn btn-light btn-md p-3 shadow rounded-circle text-primary cal-btn" onClick={(e)=> setValue(Value + e.target.value)}  value="+">+</button>
                            </div>
                            <div className="col-3 col-sm-3 col-md-3 col-lg-3 mb-3">
                                <button className="btn btn-light btn-md p-3 shadow rounded-circle text-primary cal-btn" onClick={(e)=> setValue(Value + e.target.value)}  value="7">7</button>
                            </div>
                            <div className="col-3 col-sm-3 col-md-3 col-lg-3 mb-3">
                                <button className="btn btn-light btn-md p-3 shadow rounded-circle text-primary cal-btn" onClick={(e)=> setValue(Value + e.target.value)}  value="8">8</button>
                            </div>
                            <div className="col-3 col-sm-3 col-md-3 col-lg-3 mb-3">
                                <button className="btn btn-light btn-md p-3 shadow rounded-circle text-primary cal-btn" onClick={(e)=> setValue(Value + e.target.value)}  value="9">9</button>
                            </div>
                            <div className="col-3 col-sm-3 col-md-3 col-lg-3 mb-3">
                                <button className="btn btn-light btn-md p-3 shadow rounded-circle text-primary cal-btn" onClick={(e)=> setValue(Value + e.target.value)}  value="*">X</button>
                            </div>
                            <div className="col-3 col-sm-3 col-md-3 col-lg-3 mb-3">
                                <button className="btn btn-light btn-md p-3 shadow rounded-circle text-primary cal-btn" onClick={(e)=> setValue(Value + e.target.value)}  value=".">.</button>
                            </div>
                            <div className="col-3 col-sm-3 col-md-3 col-lg-3 mb-3">
                                <button className="btn btn-light btn-md p-3 shadow rounded-circle text-primary cal-btn" onClick={(e)=> setValue(Value + e.target.value)}  value="0">0</button>
                            </div>
                            <div className="col-3 col-sm-3 col-md-3 col-lg-3 mb-3">
                                <button className="btn btn-light btn-md p-3 shadow rounded-circle text-primary cal-btn" onClick={()=> total()}  value="=">=</button>
                            </div>
                            <div className="col-3 col-sm-3 col-md-3 col-lg-3 mb-3">
                                <button className="btn btn-light btn-md p-3 shadow rounded-circle text-primary cal-btn" onClick={(e)=> setValue(Value + e.target.value)}  value="/">/</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;
