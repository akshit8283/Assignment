import React, { Component } from 'react'                         

export default class Classtodo extends Component {                
    constructor(props){   
        super(props)
        this.state = {task :[{name:""}]}  
    }
    addtask(){    
        this.setState({task:[...this.state.task,{name:document.getElementById('input').value}]})
        document.getElementById("input").value = ''
    }
    deletedata(index){  
     var data = this.State.task.filter((data,i)=>{       
        return i !== index    
      })   
      this.setState({task : data})    
    }                                               
     componentDidUpdate(){                      
         console.log(this.state.task);           
    }                                         
  render() {                                   
    return <>                                   
      <input type="text" id='input' />               
      <button onClick={()=>{                   
        this.addtask()                        
      }} >Submit</button>                    
      {this.state.task.map((result,i)=>{    
   return <>                                 
   <p> {result.name} <button onClick={()=>       
          this.deletedata(i)} >delete         
    </button> </p>                                     
   </>
      })}      
    </>      
  }          
}                         