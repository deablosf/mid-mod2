import React, { Component } from 'react';
import ReactDOM from "react-dom";
import User from './Users'

class Intent extends Component {
       state = {
            data: [
                {
                    imageName: 'Jade Palace',
                    imageUrl: './assets/Jade Palace.jpg',
                    bookMark: false,
                    tags: ["locals"],
                },
                {
                    imageName: 'Polaris Engine',
                    imageUrl: './assets/Polaris Engine.jpg',
                    bookMark: false,
                    tags: ["locals", "space"],
                },
                {
                    imageName: 'Virtual city',
                    imageUrl: './assets/Virtual city.jpg',
                    bookMark: false,
                    tags: ["locals", "cities"],
                },
                {
                    imageName: 'Ring World',
                    imageUrl: './assets/Ring World.jpg',
                    bookMark: false,
                    tags: ["locals", "space"],
                },
                {
                    imageName: 'Imperial city',
                    imageUrl: './assets/Imperial city.jpg',
                    bookMark: false,
                    tags: ["locals", "cities"],
                },
                {
                    imageName: 'The Time of deliverance',
                    imageUrl: './assets/The Time of deliverance.jpg',
                    bookMark: false,
                    tags: ["characters", "berserk", "dog"],
                },
                {
                    imageName: "Jeanne d'arc, first horseman of the apocalypse",
                    imageUrl: "./assets/Jeanne d'arc, first horseman of the apocalypse.jpg",
                    bookMark: false,
                    tags: ["characters", "alt-version"],
                },
                {
                    imageName: 'Dark bright',
                    imageUrl: './assets/Dark bright.png',
                    bookMark: false,
                    tags: ["characters", "blood", "trippy"],
                },
                {
                    imageName: 'Bill Cipher',
                    imageUrl: './assets/Bill Cipher.jpg',
                    bookMark: false,
                    tags: ["characters", "alt-version", "gravity falls", "trippy"],
                },
                {
                    imageName: 'Leo Davinesh, The Recluse',
                    imageUrl: './assets/Leo Davinesh, The Recluse.jpg',
                    bookMark: false,
                    tags: ["characters", "blood", "armed"],
                },
                {
                    imageName: 'Deathlike',
                    imageUrl: './assets/Deathlike.png',
                    bookMark: false,
                    tags: ["characters", "blood", "armed"],
                },
                {
                    imageName: 'Crows',
                    imageUrl: './assets/Crows.jpg',
                    bookMark: false,
                    tags: ["characters", "armed"],
                },
                {
                    imageName: 'The Wave God',
                    imageUrl: './assets/The Wave God.jpg',
                    bookMark: false,
                    tags: ["characters", "spiderman", "osborn"],
                },
                {
                    imageName: 'Dapper',
                    imageUrl: './assets/Dapper.jpg',
                    bookMark: false,
                    tags: ["characters"],
                },
                {
                    imageName: 'My Inner Sanctuary',
                    imageUrl: './assets/My Inner Sanctuary.jpg',
                    bookMark: false,
                    tags: ["characters", "trippy"],
                },
                {
                    imageName: 'Garnet',
                    imageUrl: './assets/Garnet.jpg',
                    bookMark: false,
                    tags: ["characters", "alt-version"],
                },
                {
                    imageName: 'Warp',
                    imageUrl: './assets/Warp.jpg',
                    bookMark: false,
                    tags: ["characters", "trippy"],
                },
                {
                    imageName: 'Moon Faces',
                    imageUrl: './assets/Moon Faces.png',
                    bookMark: false,
                    tags: ["characters", "trippy", "alt-version"],
                },
                {
                    imageName: 'M',
                    imageUrl: './assets/M.jpg',
                    bookMark: false,
                    tags: ["characters"],
                },

            ],
            loggedIn: true
        }


    render() {
        const images = this.state.data

        let randN = (max) => {
            var min = 0,
                max = max,
                num = Math.floor(Math.random() * (max - min) + min);
                return num;
            // console.log(score);
        };
        let boxImg1 = images[randN(19)].imageUrl
        let boxImg2 = images[randN(19)].imageUrl
        let boxImg3 = images[randN(19)].imageUrl
        let boxImg4 = images[randN(19)].imageUrl
        let boxImg5 = images[randN(19)].imageUrl
        let boxImg6 = images[randN(19)].imageUrl


        return (
            <div className="intent">
                <div className="chatFeed">
                    <div className="feed"></div>
                    <input placeholder="Add Text here"></input>
                </div>
                <div className="imageFeed">
                    <div className="featured">Inspirations of the day</div>
                    <div className="imageFeed1">
                        <div className="img1"> <img className="imgIns" src={require(`${boxImg1}`)} /> </div>
                        <div className="img2"> <img className="imgIns" src={require(`${boxImg2}`)} /> </div>
                    </div>
                    <div className="imageFeed1">
                        <div className="img3"> <img className="imgIns" src={require(`${boxImg3}`)} /> </div>
                        <div className="img4"> <img className="imgIns" src={require(`${boxImg4}`)} /> </div>
                    </div>
                    <div className="imageFeed1">
                        <div className="img5"> <img className="imgIns" src={require(`${boxImg5}`)} /> </div>
                        <div className="img6"> <img className="imgIns" src={require(`${boxImg6}`)} /> </div>
                    </div>

                </div>
                <User data={this.state} />
            </div>
        )
    }
}

export default Intent