import { useState } from "react";
import GameRow from "../game-row/game-row";
import Header from "../header/header";
import Modal from "../modal/modal";
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
                    <strong>
                        <p>
                            A clone of the famous{" "}
                            <a href="https://www.powerlanguage.co.uk/wordle/">
                                Wordle
                            </a>{" "}
                            game.{" "}
                        </p>
                        <p>
                            This is a Wordle Clone written in React and
                            Typescript for Software Engineers.
                        </p>
                        <p>
                            You can find the source code from this{" "}
                            <a href="https://github.com/Harry-Hopkinson/softwordle">
                                repository
                            </a>
                        </p>
                    </strong>
                </div>
            </Modal>
        </div>
    );
};
export default Game;
