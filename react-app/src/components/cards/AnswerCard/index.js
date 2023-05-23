import React from "react";
import "./AnswerCard.css";
// import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CardHeader from "../CardContainer/CardHeader";

export default function AnswerCard({ answer }) {
    return (
        <>
        <CardHeader user={answer.user} />
            <div>
                <p>
                    I went to this place along the river where there is a lot of
                    fish to catch and birds to look at. I wish there was a place
                    that I could go to to see what I want tot do so that I have
                    more things to say and I want to have dots on this when I
                    run our of space so I'm writing a bunch
                </p>
            </div>

            <div className="card card-button-row">
                <button className="answer">
                    <i className="fa-regular fa-pen-to-square"></i>
                    Answer
                </button>
            </div>
        </>
    );
}


{/* {question.answers.map((answer) => (
    <div key={answer.id}>
        {answer.text}
        {answer.user_id === sessionUser.id && (
            <>
                <OpenModalButton
                    className="delete-question"
                    modalComponent={
                        <div>
                            <button
                                onClick={(e) =>
                                    handleDeleteAnswer(answer.id)
                                }
                            >
                                DELETE?
                            </button>
                        </div>
                    }
                    buttonText="Delete"
                />
                <OpenModalButton
                    className="update-question"
                    modalComponent={<TestAnswer answer={answer} />}
                    buttonText="Update"
                />
            </>
        )}
    </div>
))} */}