//require('./components/Example.tsx');  
  
import React from 'react';
import ReactDOM from 'react-dom';
import "antd/dist/antd.css";  
import SiderDemo from "./components/Example"
 




export default function Example() {
    return (  
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <SiderDemo />
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

ReactDOM.render(<Example />, document.getElementById('app'));