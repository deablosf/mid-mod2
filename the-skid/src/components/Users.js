import React, { Component } from 'react';


class Users extends Component {
        state = {
            users: [
            {
                name: "Delgado",
                profilePic: './assets/knights.png', 
                quotes: ["Half Iago, Half Fu Manchu, all bastard!"],
                link: '',
                images: '', 
            },
            {
                name: "",
                profilePic: '', 
                quotes: ["If you Don't laugh, you'll cry."],
                link: '',
                images: ''
            },
        ]
    }

    

    render() {
        console.log(this.props.data)
     
        return (
            
            <div>
                <div>  </div>
            </div>
        )
    }
}

export default Users