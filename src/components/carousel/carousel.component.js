import React, { useEffect } from 'react';
import './carousel.styles.scss';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { connect } from 'react-redux';
import { nextSlide, prevSlide, updateCarousel } from '../../redux/collection/collection.actions';
import { createStructuredSelector } from 'reselect';
import { firestore } from '../../firebase/firebase.utils';
import { convertCarouselSnapshotToMap } from '../../firebase/firebase.utils';
import { selectCarousel, selectCurrent } from '../../redux/collection/collection.selectors';

const Carousel = ({ nextSlide, prevSlide, carousel, current, updateCarousel }) => {

    useEffect(() => {
        const carouselRef = firestore.collection('carousel')

        carouselRef.get().then(snapshot => {
            const carouselMap = convertCarouselSnapshotToMap(snapshot)
            updateCarousel(carouselMap)
        })

        console.log(carousel.length)
       /* const handleAutoplay = setInterval(nextSlide, 3000);
        return () => clearInterval(handleAutoplay);*/
    }, []);

    return (
        <div className="carousel">
            <FaArrowLeft className="arrow-left" onClick={prevSlide} />
            <FaArrowRight className="arrow-right" onClick={nextSlide} />
            {
                carousel.map(({ id, title, pos, desc, imageUrl }) => (
                    <div key={id} className={current === pos ? "slide active" : "slide"}
                    style={{ backgroundImage: `url(${imageUrl})` }}
                />
                    
                )
                )
            }
            
        </div>
    );
}


const mapStateToProps = createStructuredSelector({
    carousel: selectCarousel,
    current: selectCurrent
})

const mapDispatchToProps = dispatch => ({
    nextSlide: () => dispatch(nextSlide()),
    prevSlide: () => dispatch(prevSlide()),
    updateCarousel: carouselMap => dispatch(updateCarousel(carouselMap))
})

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);