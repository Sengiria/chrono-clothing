import React, { useEffect } from 'react';
import './carousel.styles.scss';
import HOMEPAGE_DATA from '../../pages/homepage/homepage.data';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {nextSlide, prevSlide} from '../../redux/collection/collection.actions';
import { createStructuredSelector } from 'reselect';
import { selectCollectionItems, selectCurrent } from '../../redux/collection/collection.selectors';

const Carousel = ({nextSlide, prevSlide, collectionItems, current}) => {

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
                            <div className="content">
                                <h1 className="title">{title}</h1>
                                <span className="subtitle">{desc}</span>
                                <span className="subtitle_shop"><Link to="/shop">SHOP NOW</Link></span>
                            </div>
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