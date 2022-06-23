import React, {useState} from 'react';
import styles from '../styles/Carousel.module.css';

function Carousel({children}) {

    const [current,setCurrent] = useState(0);
    const [start, setStart] = useState(null);
    const [end, setEnd] = useState(null);
    const minSpan = 50; 

    function onTouchStart(e) {
        setEnd(null);
        setStart(e.targetTouches[0].clientX);
    };

    function onTouchMove(e) {
        setEnd(e.targetTouches[0].clientX)
    };

    function onTouchEnd() {

        if (!start || !end) return;

        const distance = (start - end);
        const leftSwipe = distance > minSpan;
        const rightSwipe = distance < (-minSpan);

        leftSwipe && nextSlide();
        rightSwipe && prevSlide();
     
    };
    

    function prevSlide() {
        current <= 0 ? setCurrent(children.length - 1) : setCurrent(current - 1);
    };

    function nextSlide() {
        current == (children.length - 1) ? setCurrent(0) : setCurrent(current + 1);
    };

    function goTo(x) {
        setCurrent(x);
    };

    return (
        <div className={styles.section}>
            <div className={styles.container}>

                {/* <div><button onClick={() => prevSlide()}>-</button></div> */}

                
                {children && <div className={styles.slider}>
    
                    {!Array.isArray(children) && <div className={styles.slide} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
                        {children}
                    </div>}
                    {Array.isArray(children) && children.map((child, i) =>
                        (<div className={styles.slide} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd} key={i} style={{transform: `translateX(${(i - current) * 100}%)`}}>
                            {child}
                        </div>))}
                </div>}

                {/* <div><button onClick={() => nextSlide()}>+</button></div> */}

            </div>

            {Array.isArray(children) && <div className={styles.dots}>
                {children.map((_, i) => 
                    (<div className={current == i ? styles.dotActive : styles.dot} key={i} onClick={() => goTo(i)}></div>))
                }
            </div>}

        </div>
    );

};

export default Carousel;