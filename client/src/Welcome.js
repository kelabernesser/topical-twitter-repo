import React from "react";
import styled from "styled-components";
import welcomeIcon from "./img/android-chrome-512x512.png";
import downIcon from "./img/downarrow.png";
import { Link } from "react-router-dom";

const JoinPanelContainer = styled.div`
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: left;
    flex: 1;

    & > div {
        width: 70%;
        padding-top: 75px;
        padding-left: 35px;
        padding-right: 35px;
        padding-bottom: 50px;

        position: relative;
        top: 20px;
        opacity: 0;

        background-color: #f2f2f2ff;
        border: 2px solid #ffffff;

        box-shadow: 0px 20px 20px 0px #2e2e2e25;

        border-radius: 15px;

        transition: 0.5s;
        transition-timing-function: cubic-bezier(0, 0, 0.01, 1);
    }
    & h3 {
        font-size: 40px;
        font-weight: 600;

        padding-bottom: 25px;
    }
    & form {
        display: flex;
        flex-direction: column;
        height: 85%;
    }
    & input {
        width: 100%;
        margin: auto;
        margin-top: 5px;
        margin-bottom: 15px;

        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 15px;
        padding-right: 15px;

        font-size: 18px;
        font-weight: 300;

        background-color: #f2f2f200;

        color: #2e2e2e;
        outline: none;

        border: 1px solid #cccccc;

        border-radius: 15px;

        transition: 0.2s;
    }

    & input:focus {
        border: 1px solid #2e2e2e;
        background-color: #e8e8e8;
    }

    & button {
        width: 30%;
        padding: 14px;
        margin-left: auto;
        margin-top: 10px;

        font-size: 20px;

        border: 1px solid black;
        border-radius: 25px;
        outline: none;

        cursor: pointer;

        background-color: #2e2e2e;
        color: #f2f2f2;

        transition: 0.07s;
        transition-timing-function: cubic-bezier(0, 0, 0, 1);
    }

    & button:hover {
        background-color: #f2f2f2;
        color: #2e2e2e;
    }

    & button:active {
        background-color: #e8e8e8;
        color: black;
    }

    @media (max-width: 1440px) {
        & {
            flex: 1;
        }
        & > div {
            padding-top: 50px;

            padding-bottom: 25px;
        }
    }

    @media (max-width: 1220px) {
        & {
            flex: 1;
        }
        & > div {
            width: 85%;
        }
    }

    @media (max-width: 970px) {
        & {
            justify-content: center;
        }

        & h3 {
            font-size: 30px;
            padding-bottom: 15px;
            line-height: 1;
        }

        & > div {
            width: 95%;
            padding-top: 35px;
            padding-left: 25px;
            padding-right: 25px;
            padding-bottom: 20px;
        }

        & input {
            padding-top: 15px;
            padding-bottom: 15px;

            margin-top: 5px;
            margin-bottom: 10px;
        }
    }
`;
const DownArrow = styled.img`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;

    display: none;

    @media (max-width: 970px) {
        display: inline-block;
    }
`;
const WelcomeMessageContainer = styled.div`
    height: 100%;
    padding-left: 100px;
    padding-right: 175px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;

    & > img {
        width: 50px;
    }
    & > h2 {
        margin-top: 15px;
        margin-bottom: 15px;
        font-size: 40px;
        font-weight: 600;
    }
    & > p {
        line-height: 1.5;

        font-size: 18px;
        font-weight: 400;
    }

    @media (max-width: 1440px) {
        & {
            flex: 0.6;
        }
    }

    @media (max-width: 1220px) {
        & {
            flex: 0.6;
        }
    }

    @media (max-width: 970px) {
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 25px;
        flex: 1;
        justify-content: center;
    }
`;
const WelcomeContainer = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: row;

    @media (max-width: 970px) {
        height: 200vh;

        flex-direction: column;
    }
`;

function Welcome() {
    const panelRef = React.createRef();
    const colors = ["#8ae7e1", "#f0bfa2", "#f8aeae", "#aeccf8"];
    const initInputState = {
        username: "",
        password: "",
        imgUrl: "",
    };
    const [inputState, setInputState] = React.useState(initInputState);

    function handleChange(e) {
        let { name, value } = e.target;
        if (name === "username") {
            const noSpace = value
                .split("")
                .filter((char) => char !== " ")
                .join("");
            setInputState((prev) => {
                return {
                    ...prev,
                    username: `${noSpace}`,
                };
            });
        } else {
            setInputState((prev) => {
                return {
                    ...prev,
                    [name]: value,
                };
            });
        }
    }

    React.useEffect(() => {
        const { style } = panelRef.current;
        setTimeout(() => {
            document.body.style.backgroundColor =
                colors[Math.floor(Math.random() * 4)];
            style.top = "0px";
            console.log(style.top);
            style.opacity = "1";
            console.log(style.opacity);
        }, 250);
        // eslint-disable-next-line
    }, []);

    return (
        <WelcomeContainer>
            <WelcomeMessageContainer>
                <img src={welcomeIcon} alt='icon' />
                <h2>hello. please stay on topic here.</h2>
                <p>
                    go ahead and sign up, you’ll be assigned a topic, and then
                    you can talk about it with millions of other users. it’s
                    basically twitter, but you have to stay on your assigned
                    topic.
                </p>
                <DownArrow src={downIcon} alt='down' />
            </WelcomeMessageContainer>
            <JoinPanelContainer>
                <div ref={panelRef}>
                    <h3>join the discussion.</h3>
                    <form>
                        <label>username</label>
                        <input
                            placeholder='your handle'
                            value={inputState.username}
                            onChange={handleChange}
                            name='username'
                            onFocus={() => {
                                setInputState((prev) => {
                                    return {
                                        ...prev,
                                        username: "@",
                                    };
                                });
                            }}
                        />
                        <label>password</label>
                        <input
                            placeholder='your password'
                            value={inputState.password}
                            onChange={handleChange}
                            name='bio'
                        />
                        <label>profile picture</label>
                        <input
                            placeholder='your image url'
                            value={inputState.imgUrl}
                            onChange={handleChange}
                            name='imgUrl'
                        />
                        <Link to="Tweets">
                        <button>join</button>
                        </Link>
                    </form>
                </div>
            </JoinPanelContainer>
        </WelcomeContainer>
    );
}

export default Welcome;
 