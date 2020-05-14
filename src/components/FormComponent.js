import React from 'react';
import axios from 'axios';

class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.getAllUsers = this.getAllUsers.bind(this);
    }

    getAllUsers() {
        axios.get('http://localhost:4000/book/all')
        .then(response => {
            console.log(response.data);
        });
    }

    render() {
        return(
            <div>
                <button onClick={this.getAllUsers} type="submit">
                    Get All User
                </button>
            </div>
        
        );
    }
}

export default FormComponent;