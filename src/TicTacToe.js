import { createContext, useContext, useEffect, useRef, useState, forwardRef, useImperativeHandle  } from "react";

const PlayerContext = createContext();

const TicTacToe = () =>{

    const [player, setPlayer] = useState("O");
    const [moves, setMoves] = useState([{}]);
    const [status, setStatus] = useState("");

    const togglePlayer = (ticboxId) =>{
        let boxId = 'box'+ticboxId;
        setMoves(values=>({...values, [boxId]:player}));
        setPlayer(player == "O" || player == "" ? "X" : "O");    
    }

    useEffect(()=>{
        checkWinCombination(); 
    },[moves])

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
            }else if(total == -3){
                setStatus("Player X win");
            }
        })
    }
    const childRef = useRef();

    const doRestartGame = () =>{
        setMoves([{}]);
        setPlayer("O"); 
        setStatus('');
        console.log(childRef);
        childRef.current.resetBox();
    }

    return (
        <>
            <PlayerContext.Provider value={{player, togglePlayer, status}}>
            <div>
                <TicBox boxId={1} ref={childRef}/>
                <TicBox boxId={2} ref={childRef}/>
                <TicBox boxId={3} ref={childRef}/>
            </div>
            <div>
                <TicBox boxId={4} ref={childRef}/>
                <TicBox boxId={5} ref={childRef}/>
                <TicBox boxId={6} ref={childRef}/>
            </div>
            <div>
                <TicBox boxId={7} ref={childRef}/>
                <TicBox boxId={8} ref={childRef}/>
                <TicBox boxId={9} ref={childRef}/>
            </div>
            </PlayerContext.Provider>

            <div className="game-status">{status}</div>
            <button className="btn btn-success" onClick={doRestartGame}>Restart</button>
        </>
    );
}

const TicBox = forwardRef(({boxId, ref}) => {
    
    const {player, togglePlayer, status} = useContext(PlayerContext);
    const [playerChar, setPlayerChar] = useState();
    const [withMove, setWithMove] = useState('');

    const onClickHandler = () =>{
        if(playerChar == undefined && status == ''){
            setPlayerChar(player);
            togglePlayer(boxId);
            setWithMove('withMove');
        }
    }

    useImperativeHandle(ref, () => ({
        resetBox(){
            setPlayerChar('');
            setWithMove('');
        }
    }));

    return (
        <div className={"tic-box " + withMove} onClick={onClickHandler}>{playerChar}</div>
    );
})

export default TicTacToe;