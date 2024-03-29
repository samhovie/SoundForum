import React, { useState, useEffect, useRef } from "react";
import OpenModalButton from "../modals/OpenModalButton";
import "./Card.css";
import UpdateQuestionModal from "../modals/UpdateQuestionModal";
import DeleteQuestionModal from "../modals/DeleteQuestionModal";

function OptionsButton({ question }) {
    const [showMenu, setShowMenu] = useState(false);
    const ulRef = useRef();

    const openMenu = (e) => {
        e.preventDefault();
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = (e) => {
            if (ulRef.current && !ulRef.current.contains(e.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener("click", closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const ulClassName = "options-dropdown" + (showMenu ? "" : " hidden");
    const closeMenu = () => setShowMenu(false);

    return (
        <>
            <button className="options border-none" onClick={openMenu}>
                <i className="fa-solid fa-ellipsis fa-lg"></i>
            </button>

            <ul className={ulClassName} ref={ulRef}>
                <>
                    <OpenModalButton
                        className="delete-question"
                        onItemClick={closeMenu}
                        modalComponent={<DeleteQuestionModal question={question}/>}
                        buttonText={<i className="fa-regular fa-trash-can"></i>}
                    />
                    <OpenModalButton
                        className="update-question"
                        onItemClick={closeMenu}
                        modalComponent={
                            <UpdateQuestionModal question={question} />
                        }
                        buttonText={<i className="fa-solid fa-pencil"></i>}
                    />
                </>
            </ul>
        </>
    );
}

export default OptionsButton;
