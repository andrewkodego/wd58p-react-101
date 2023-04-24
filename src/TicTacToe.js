import { createContext, useContext, useEffect, useState } from "react";

const PlayerContext = createContext();

const TicTacToe = () =>{

    const roundsToWin = 3;
    const [player, setPlayer] = useState("O");
    const [moves, setMoves] = useState([{}]);
    const [status, setStatus] = useState("");
    const [reset, setReset] = useState(1);
    const [playerOScore, setPlayerOScore] = useState(0);
    const [playerXScore, setPlayerXScore] = useState(0);

    const togglePlayer = (ticboxId) =>{
        let boxId = 'box'+ticboxId;
        setMoves(values=>({...values, [boxId]:player}));
        setPlayer(player == "O" || player == "" ? "X" : "O");    
    }

    useEffect(()=>{
        checkWinCombination(); 
    },[moves])

    useEffect(()=>{
        if(reset == 0){
            setReset(1);
        }
    },[reset])

    const winCombination = [
        [1,2,3],[4,5,6],[7,8,9], // horizontal combination
        [1,4,7],[2,5,8],[3,6,9], // vertical combination
        [1,5,9],[3,5,7], // x combination
    ];

    const checkWinCombination = () =>{
        winCombination.forEach((item) => {

            let combi_1 = moves['box' + item[0]] == undefined ? 0 : moves['box' + item[0]] == "O" ? 1 : -1;
            let combi_2 = moves['box' + item[1]] == undefined ? 0 : moves['box' + item[1]] == "O" ? 1 : -1;
            let combi_3 = moves['box' + item[2]] == undefined ? 0 : moves['box' + item[2]] == "O" ? 1 : -1;

            let total = combi_1 + combi_2 + combi_3;
            if(total == 3){
                setStatus("Player O win");
                setPlayerOScore(playerOScore + 1);
            }else if(total == -3){
                setStatus("Player X win");
                setPlayerXScore(playerXScore + 1);
            }
        })

        if(playerOScore == roundsToWin || playerXScore == roundsToWin){
            doRestartGame();
            setStatus("Game Over");
        }

        checkDrawResult();
    }

    const checkDrawResult = ()=> {
        let totalMoves = 0;
        for(let i=1; i <= 9; i++){
            totalMoves += moves['box' + i] == undefined ? 0 : 1;
        }

        if(totalMoves == 9){
            setStatus("Game Draw");
        }
    }

    const doRestartGame = () =>{
        setMoves([{}]);
        setPlayer("O"); 
        setStatus('');
        setReset(0);
    }

    return (
        <>
            <h2>Score</h2>
            <div className="row">
                <div className="col-sm-2">Player O : {playerOScore}</div>
                <div className="col-sm-2">Player X : {playerXScore}</div>
            </div>
            
            <PlayerContext.Provider value={{player, togglePlayer, status, reset}}>
            <div>
                <TicBox boxId={1}/>
                <TicBox boxId={2}/>
                <TicBox boxId={3}/>
            </div>
            <div>
                <TicBox boxId={4}/>
                <TicBox boxId={5}/>
                <TicBox boxId={6}/>
            </div>
            <div>
                <TicBox boxId={7}/>
                <TicBox boxId={8}/>
                <TicBox boxId={9}/>
            </div>
            </PlayerContext.Provider>

            <div className="game-status">{status}</div>
            <button className="btn btn-success" onClick={doRestartGame}>Restart</button>
        </>
    );
}

const TicBox = ({boxId}) => {
    
    const {player, togglePlayer, status, reset} = useContext(PlayerContext);
    const [playerChar, setPlayerChar] = useState();
    const [withMove, setWithMove] = useState('');

    const onClickHandler = () =>{
        if(playerChar == undefined && status == ''){
            setPlayerChar(player);
            togglePlayer(boxId);
            setWithMove('withMove');
        }
    }

    useEffect(()=>{
        setPlayerChar();
        setWithMove('');
    },[reset]);

    return (
        <div className={"tic-box " + withMove} onClick={onClickHandler}>{playerChar}</div>
    );
}

export default TicTacToe;