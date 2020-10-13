import React, { Component} from 'react';
import ReactDom from 'react-dom';
import './index.css';

// class Square extends React.Component {
//     render() {
//       return (
//         <button
//           className="square"
//           onClick={() => this.props.onClick()}
//         >
//           {this.props.value}
//         </button>
//       );
//     }
//   }

function Square(props){
    return (
        <button 
            className="square" 
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

class Board extends Component{
    constructor(props){
        super(props);
        this.state = {
            squares : Array(9).fill(null),
            xIsNext : true,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(i){
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            squares : squares,
            xIsNext : !this.state.xIsNext,
        });
    }

    renderSquare(i){
        return (
            <Square 
                    value={this.state.squares[i]}
                    onClick={() => {this.handleClick(i)}}
            />
        );
    }

    render(){
        const status = 'Next Player: ' + (this.state.xIsNext ? 'X' : 'O');
        //const status = this.state.xIsNext ? 'X' : 'O';

        return(
            <div>
                <div className="status">{status}</div><br/>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

function Game(){
    return (
        <div className="game">
            <div className="game-board">
                <Board/>
            </div>
            <div className="game-info"></div>
        </div>
    );
}

ReactDom.render(<Game/>, document.getElementById('root'));
