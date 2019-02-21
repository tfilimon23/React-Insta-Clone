import React from 'react';

const withAuthenticate = FirstComponent => SecondComponent => props => 
    class extends React.Component {
        constructor(props){
            super(props);
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