import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import OpenModalButton from "../modals/OpenModalButton";

export default function Navigation({ isLoaded }) {
    const sessionUser = useSelector((state) => state.session.user);

    return (<div className="navigation-container flex justify-center">
            <ul className="navigation flex align-center flex-end">
                <li className="justify-start">
                    <NavLink exact to="/">
                        <div className="flex align-center">
                            <img
                                className="icon"
                                alt="icon-img"
                                src="https://livebnbbucket.s3.amazonaws.com/favicon.svg"
                            ></img>
                            <h1 className="main-title">SoundForum</h1>
                        </div>
                    </NavLink>
                </li>

                <li className="flex">
                    <input className="search" placeholder="Search"></input>
                    <ProfileButton user={sessionUser} />
                </li>

                <li>
                {/* <button className="add-question">
                        Add a question <i className="fa-solid fa-pencil"></i>
                    </button> */}

                    <OpenModalButton
                    modalClass="add-question"
                    modalComponent={<h1>hello</h1>}
                    buttonText="Add a question"
                />
                </li>


            </ul>
        </div>
    )
}
