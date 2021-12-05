import React, { useState } from 'react'

export function Adding() {
    const [add, setAdd] = useState(0)
    const [subtract, setSubtract] = useState(0)
        
    return (
        <>
            <div className="card text-center">
                <div className="card-header">Click Counter</div>
                <div className="card-body">
                    <h5 className="card-title">Click to add + 1</h5>
                    <p className="card-text"></p>
                    <button className="btn btn-primary" onClick={() => setAdd(add + 1)}><h4>{add}</h4></button>
                </div>
                <div className="card-footer text-muted"></div>
            </div>
            <hr/>
            <div className="card text-center">
                <div className="card-header">Subtraction</div>
                <div className="card-body">
                    <h5 className="card-title">Click to subtract - 1</h5>
                    <p className="card-text"></p>
                    <button className="btn btn-primary" onClick={() => setSubtract(subtract - 1)}><h4>{subtract}</h4></button>
                </div>
                <div className="card-footer text-muted"></div>
            </div>            
        </>
    );
}


