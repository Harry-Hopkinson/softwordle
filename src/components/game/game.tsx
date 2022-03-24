import { useState } from "react";
import GameRow from "../game-row/game-row";
import Header from "../header/header";
import Modal from "../modal/modal-interface.ts";
import "./game.scss";
const Game = () => {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    };
    const handleShowModal = () => {
        setShowModal(true);
    };

    return (
        <div id="game">
            <Header handleShowModal={handleShowModal} />
            <GameRow />
            <Modal show={showModal} handleClose={handleClose}>
                <div>
                    <p>
                        A clone of the{" "}
                        <a href="https://www.powerlanguage.co.uk/wordle/">
                            Wordle
                        </a>{" "}
                        game which is for Software Engineers!{" "}
                    </p>
                    <p>This game is created with React Typescript.</p>
                    <p>
                        You can find the source code from the below repository.
                    </p>
                </div>
            </Modal>
        </div>
    );
};
export default Game;
