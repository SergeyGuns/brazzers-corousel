import React from 'react'
import './BrazzersCorousel.css'
export function BrazzersCorousel({width=450,height=300, imageUrls=[], strokeColor = ['blue', 'white'], autoloop = false, framePerSecond = 24, dashPadding = 4}) {
    const [images, setImages] = React.useState([])
    const [showIndex, setShowIndex] = React.useState(0)
    const [mouseIsOver, setMouseIsOver] = React.useState(false)

    React.useEffect(()=>{
        setImages(imageUrls)
        if(autoloop) {
            const interval = setInterval(() => {
                if(mouseIsOver) return;
                showIndex < images.length ? setShowIndex(showIndex+1) : setShowIndex(0)
              }, 1000 / framePerSecond);
            return () => clearInterval(interval);
        }
    }, [showIndex, images, mouseIsOver])

    function hoverHandler(event) {
        const pointerX = event.nativeEvent.layerX
        const segmentWidth = width / imageUrls.length
        const segmentForShow = Math.floor(pointerX / segmentWidth)
        setShowIndex(segmentForShow)
    }

    function enterMouseHandler() {
        setMouseIsOver(true)
    }

    function leaveMouseHandler() {
        setMouseIsOver(false)
    }

    return <div onMouseMove={hoverHandler} onMouseEnter={enterMouseHandler} onMouseLeave={leaveMouseHandler} className='brazzers-corousel' style={{width, height}}>
        {images.map((image, index) => <img width={width} style={{ backgroundColor: 'black', opacity: +(index <= showIndex), transition: 'all .2s'}} className='brazzers-corousel__image' src={image} key={image}/>)}
        <svg className='brazzers-corousel__progress-bar' viewBox={`0 0 ${width} 5`}>
            <line x1='0' y1='0' y2='0' x2={width} strokeDasharray={`0 ${dashPadding/2} ` + imageUrls.map(()=> (width / imageUrls.length) - dashPadding + ` ${dashPadding}` ).join(' ') } stroke={strokeColor[0]} strokeWidth="5"/>
        </svg>
        <svg className='brazzers-corousel__progress-bar' viewBox={`0 0 ${width} 5`}>
            <line x1='0' y1='0' y2='0' x2={width} strokeDasharray={`0 ${dashPadding/2} 0 ` + ((width / imageUrls.length) * showIndex) + ' ' + ((width / imageUrls.length) - dashPadding) + ` ${dashPadding}` + width } stroke={strokeColor[1]} strokeWidth="5"/>
        </svg>
    </div>
}