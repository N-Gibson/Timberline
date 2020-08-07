import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import venadoFront from '../../assets/Venado_front.jpg';
import purpleAster from '../../assets/Purple_Aster.jpg';
import "react-image-gallery/styles/css/image-gallery.css";

export class Home extends Component {
  constructor() {
    super()
    this.state = {
      showThumbnails: false,
      showFullscreenButton: false,
      showPlayButton: false,
      showBullets: true,
      autoPlay: true,
      slideInterval: 5000,
      images: [
        {
          original: venadoFront,
          thumbnail: venadoFront,
          originalClass: 'venado_gallery_image',
          originalAlt: 'Custom home in Santa Fe, New Mexico. Rear view of home.',
        },
        {
          original: purpleAster,
          thumbnail: purpleAster,
          originalClass: 'purpleAster_gallery_image',
          originalAlt: 'Custom home in Santa Fe, New Mexico. Mountain views.',
        },
      ],
    }
  }

  render() {
    return (
      <section className="home">
        <ImageGallery 
          items={this.state.images} 
          showThumbnails={this.state.showThumbnails}
          showFullscreenButton={this.state.showFullscreenButton}
          showPlayButton={this.state.showPlayButton}
          showBullets={this.state.showBullets}
          autoPlay={this.state.autoPlay}
          slideInterval={this.state.slideInterval}
        />
      </section>
    )
  }
}
