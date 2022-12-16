import React from "react";

const Hoc = ( ComponentMy )=>{
    return class extends React.Component{
        
        //Современный метод 
        componentDidUpdate(oldProps){
            console.log('Актуальные props',  this.props);    
            console.log('Старые props',   oldProps);    
           }

        //Устаревший метод
        // componentWillReceiveProps(nextProps){
        //     console.log('Актуальные props',  + nextProps); 
        //     console.log(nextProps)
        //     console.log('Старые props',  + this.props);
        //     console.log(this.props)
        // }

        render(){
            return <ComponentMy {...this.props} />
        }
    }
}

export default Hoc