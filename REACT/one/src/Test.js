import React,{components} from "react";

export default class Test extends components{
    constructor(props){
        super(props)
        this.state = {count:0 , name:"ram"}
    }
    setIncreement(){
        this.setstate({count:++this.state.count })
    }
    setDIC(){
        this.setstate({count:this.state.count-1})
    }
    render(){
        return(
            <div>
                <button onClick={()=>
                this.setIncreement()
            }>Increement</button>
            <button onClick={()=>
                this.setDIC()
            }>Dicreement</button>
            <p>{this.state.count}</p>
            </div>
        )
    }
}