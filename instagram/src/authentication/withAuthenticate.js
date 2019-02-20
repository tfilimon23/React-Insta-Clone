import React from 'react';

const withAuthenticate = FirstComponent => SecondComponent => 
    class extends React.Component {
        constructor(){
            super();
            this.state= {
                loggedIn: "true"
            }
        }
        render (){
            // if (loggedIn) {

            return <FirstComponent />;
            // }
            // return <SecondComponent />;
        }
    };



export default withAuthenticate;