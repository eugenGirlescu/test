import React from 'react';
import app from './firebase';

class Home extends React.Component {
    render(){
        return(
            <div>
                <div>
                    Home
                
                </div>
                <button onClick ={() => app.auth.signOut()}>Sign out</button>
            </div>
        );
    }
};
export default Home;