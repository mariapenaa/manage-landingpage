import React, {useState, useEffect} from 'react'
import './Carousel.scss'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Carousel = (props) => {
    const {children, show, infiniteLoop} = props;
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length) 
    const [touchPosition, setTouchPosition] = useState(null)

    const [isRepeating, setIsRepeating] = useState(infiniteLoop && children.length > show)
    const [transitionEnabled, setTransitionEnabled] = useState(true)

    useEffect(() => {
        setLength(children.length)
        setIsRepeating(infiniteLoop && children.length > show)
    }, [children, infiniteLoop, show])

    useEffect(() => {
        if (isRepeating) {
            if (currentIndex === show || currentIndex === length) {
                setTransitionEnabled(true)
            }
        }
    }, [currentIndex, isRepeating, show, length])

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition
        if(touchDown === null) {
            return
        }
        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch
        if (diff > 5) {
            next()
        }
        if (diff < -5) {
            prev()
        }
        setTouchPosition(null)
    }

    const next = () => {
        if (isRepeating || currentIndex < (length - show)) {
            setCurrentIndex(prevState => prevState + 1)
            console.log(currentIndex)
            if(currentIndex === 8 ){
                handleTransitionEnd()
            }
        }
    }
    
    const prev = () => {
        if (isRepeating || currentIndex > 0) {
            console.log(currentIndex)
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const handleTransitionEnd = () => {
        if (isRepeating) {
            if (currentIndex === 0) {
                setTransitionEnabled(false)
                setCurrentIndex(length)
            } else if (currentIndex === length + show) {
                setTransitionEnabled(false)
                setCurrentIndex(show)
            }
        }
    }

    const renderExtraPrev = () => {
        let output = []
        for (let index = 0; index < show; index++) {
            output.push(children[length - 1 - index])
        }
        output.reverse()
        return output
    }

    const renderExtraNext = () => {
        let output = []
        for (let index = 0; index < show; index++) {
            output.push(children[index])
        }
        return output
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {(isRepeating || currentIndex > 0) &&
                        <button onClick={prev} className="arrowButton">
                            <ArrowBackIosIcon className="arrowIcon"/>
                        </button>
                }
                <div className="carousel-content-wrapper"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}>
                    <div className="carousel-content"
                    className={`carousel-content show-${show}`}
                    style={{ 
                        transform: `translateX(-${currentIndex * (100 / show)}%)`,
                        transition: !transitionEnabled ? 'none' : undefined, }}
                    onTransitionEnd={() => handleTransitionEnd()}>
                        {
                            (length > show && isRepeating) &&
                            renderExtraPrev()
                        }
                        {children}
                        {
                            (length > show && isRepeating) &&
                            renderExtraNext()
                        }
                    </div>
                </div>
                {( isRepeating || currentIndex < (length - show) ) &&
                    <button onClick={next} className="arrowButton">
                        <ArrowForwardIosIcon className="arrowIcon"/>
                    </button>
                }
            </div>
        </div>
    )
}

export default Carousel