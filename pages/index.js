import React, { useContext, useEffect } from 'react'
import Countdown from "./components/countdown"
import dynamic from "next/dynamic"
import Global from './style/global'

const background = {
    width: '100%',
    height: '100vh',
    backgroundSize: 'cover'
}
const YoutubeBackground = dynamic(() => import("react-youtube-background"), {
  ssr: false
});

const Index = () => {

    return (
        <>
            <Global />
            <YoutubeBackground
                videoId={`DzakIXCVs60`}
                aspectRatio="16:9"
                overlay="rgba(0,0,0,0.8)"
                onplay="true"
                style={background}
            >
                <div className="contain">
                    <div className="header tracking-in-expand">
                        <h2><span>Countdown to New Year</span>2021</h2>
                    </div>
                    <div className="content">
                        <Countdown />
                    </div>
                </div>
                <style jsx global>{`
                    @import url('https://fonts.googleapis.com/css?family=Kanit&display=swap');

                    body {
                        margin: 0;
                        font-family: 'Kanit', sans-serif;
                        color: white;
                    }
                    
                    .contain {
                        max-width: 960px;
                        width: 90%;
                        margin: 0 auto;
                    }

                    .header {
                        display: flex;
                        justify-content: center;
                    }

                    .header h2 
                    {
                        text-align: center;
                        font-size: 10em;
                        line-height: 0.7em;
                        color: white;
                        margin-top: 50px;
                        margin-bottom: 51px;
                    }

                    
                    @media(max-width: 768px) {
                        .header h2 
                        {
                            text-align: center;
                            font-size: 8em;
                            line-height: 0.7em;
                            color: white;
                            margin-top: 50px;
                            margin-bottom: 51px;
                        }
    
                    }

                    @media(max-width: 768px) {
                        .header h2 
                        {
                            text-align: center;
                            font-size: 8em;
                            line-height: 0.7em;
                            color: white;
                            margin-top: 50px;
                            margin-bottom: 51px;
                        }
    
                    }

                    @media(max-width: 375px) {
                        .header h2 
                        {
                            text-align: center;
                            font-size: 5em;
                            line-height: 0.7em;
                            color: white;
                            margin-top: 50px;
                            margin-bottom: 51px;
                        }
    
                    }

                    .header h2 span {
                        display: block;
                        font-weight: 300;
                        letter-spacing: 6px;

                        font-size: 0.2em;
                    }
                    .tracking-in-expand {
                        -webkit-animation: tracking-in-expand 0.7s linear alternate backwards;
                                animation: tracking-in-expand 0.7s linear alternate backwards;
                    }


                    @-webkit-keyframes tracking-in-expand {
                        0% {
                            letter-spacing: -0.5em;
                            opacity: 0;
                        }
                        40% {
                            opacity: 0.6;
                        }
                        100% {
                            opacity: 1;
                        }
                    }
                    @keyframes tracking-in-expand {
                        0% {
                        letter-spacing: -0.5em;
                        opacity: 0;
                        }
                        40% {
                        opacity: 0.6;
                        }
                        100% {
                        opacity: 1;
                        }
                    }

                    .content {
                        display: flex;
                        justify-content: center;
                        height: 40vh;
                        margin-top: 10px;
                        align-items: center;
                    }
                    
                    .footer {
                        display: flex;
                        justify-content: center;
                    }
                    }

                `}</style>
            </YoutubeBackground>
        </>
    )
};

export default Index;
