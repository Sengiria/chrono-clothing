import React, { useEffect } from 'react';
import './carousel.styles.scss';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { nextSlide, prevSlide } from '../../redux/collection/collection.actions';
import { createStructuredSelector } from 'reselect';
import { selectCollectionItems, selectCurrent } from '../../redux/collection/collection.selectors';

const Carousel = ({ nextSlide, prevSlide, collectionItems, current }) => {

    useEffect(() => {
        const handleAutoplay = setInterval(nextSlide, 3000);
        return () => clearInterval(handleAutoplay);
    }, []);

    return (
        <div className="carousel">
            <FaArrowLeft className="arrow-left" onClick={prevSlide} />
            <FaArrowRight className="arrow-right" onClick={nextSlide} />
            {
                collectionItems.map(({ id, title, desc, imageUrl }) => (
                    <div key={id} className={current === id ? "slide active" : "slide"}
                        style={{ backgroundImage: `url(${imageUrl})` }}
                    >
                    </div>

                )
                )
            }
        </div>
    );
}


const mapStateToProps = createStructuredSelector({
    collectionItems: selectCollectionItems,
    current: selectCurrent
})

const mapDispatchToProps = dispatch => ({
    nextSlide: () => dispatch(nextSlide()),
    prevSlide: () => dispatch(prevSlide())
})

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);