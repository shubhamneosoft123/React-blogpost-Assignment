import React, { Component } from 'react'


export class Post extends Component {

   
    render() {
        return (
            <>
                     {this.props.pList.map((val,index)=>
                 <ul>
               
                    <li><b>{val.id}.</b></li>
                    <li><h2><i></i>{val.postname}</h2></li>
                    <li><img src={val.image} width="200px" /></li>
                    <li><h3>Description</h3><span>{val.discription}</span></li>
                    <button>Read More</button>
                    <li><h4>Author :- <i>{val.author}</i></h4></li>
                    <li><h5></h5><i>Date :-{val.date}</i></li>

                   
                  <hr></hr>
                  
                </ul>
                )}
            
            </>
        )
    }
}

export default Post