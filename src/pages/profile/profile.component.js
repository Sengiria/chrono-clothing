import React from 'react';
import './profile.styles.scss';
import { connect } from 'react-redux';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }
    render() { 
        const { displayName, photoURL } = this.props.currentUser
        return ( 
            <div className="profile-page">
                <h1>Profile</h1>
                <img alt="profile" src={photoURL} />
                <h2>{displayName}</h2>
            </div>
         );
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser || {}
})
 
export default connect(mapStateToProps)(Profile);