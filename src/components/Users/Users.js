import React from 'react';

const Users = (props) => {
    const familiar = props.familiar;
    let greetings;
    let food;
    let connection;
    if(familiar){
        greetings = <p>Welcome to my friend!</p>
        food = <p> I will buy a food for you</p>
        connection = <p>Let's Join to my Facebook</p>
        
    }else{
        greetings = <p>Who the hell are you!</p>
        food = <p>lets eat his his whose whose.</p>
        connection = <p>I don't add stranger</p>
    }
    return (
        <div>
            <div>
                <h2>Greetings</h2>
                {greetings}
            </div>
            <div>
                <h2>Food</h2>
                {food}
            </div>
            <div>
                <h2>connection</h2>
                {connection}
            </div>
            
        </div>
    );
};

export default Users;