import React from "react";

function Monster(props) {
    return (
        <div>
            <img className="" 
                style={{left: props.position.x, top: props.position.y, 
                        width: props.scale.x, height: props.scale.y,
                        position: "absolute",
                        zIndex: 2,
                    }}
                key={props.index} id={props.id}
                alt="monster" src={props.img}/>
        </div>
    );
}

class MonsterInstance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            position: props.position, 
            scale: props.scale,
            visible: true,
            img: props.img,
            dir: 1,
            speed: props.speed,
        }
    }

    componentDidMount() {
        this.position = setInterval(
            () => this.move(),
            this.state.speed
        );
    }

    move() {
        if (this.state.position.x < 0) {
            this.setState({dir: -1})
        } 
        if (this.state.position.x > 1024) {
            this.setState({dir: 1})
        }

        this.setState({
            position: {
                x: this.state.position.x - (10*this.state.dir),
                y: this.state.position.y
            }
        })
    }

    render() {
        return( 
            <div>
                <Monster key={this.props.index} id={this.props.id}
                         position={this.state.position} scale={this.state.scale} img={this.state.img}/>
            </div>
        );
    }
}

export default MonsterInstance;