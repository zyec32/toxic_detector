import React, { useRef, useState } from 'react'
import styled from 'styled-components';

const SVG = styled.svg`
    cursor: pointer;
`

const Icon = ({ onClick }) => (
    <SVG width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
        <g id="volume">
            <path id="icon/av/volume_up_24px" fill-rule="evenodd" clip-rule="evenodd" d="M37.3333 14.1067V8.61334C48.0267 11.04 56 20.5867 56 32C56 43.4133 48.0267 52.96 37.3333 55.3867V49.8933C45.04 47.6 50.6667 40.4533 50.6667 32C50.6667 23.5467 45.04 16.4 37.3333 14.1067ZM8 40V24H18.6667L32 10.6667V53.3333L18.6667 40H8ZM26.6667 40.4533V23.5467L20.88 29.3333H13.3333V34.6667H20.88L26.6667 40.4533ZM44 32C44 27.28 41.28 23.2267 37.3333 21.2533V42.72C41.28 40.7733 44 36.72 44 32Z" fill="#BDBDBD"/>
        </g>
    </SVG>
)

export default ({ Audio }) => {

    const refContainer = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false)

    return (
        <React.Fragment>
            <audio 
                ref={refContainer} 
                onPlay={() => {
                    setIsPlaying(true)
                }} 
                onPause={() => {
                    setIsPlaying(false)
                }}
            >
                <source src={Audio} type="audio/mp3" />
            </audio>
            <Icon onClick={() => {
                if (isPlaying) refContainer.current.pause()
                else refContainer.current.play()
            }} />
        </React.Fragment>
    )
}