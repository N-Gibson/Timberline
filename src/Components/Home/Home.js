import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import venadoFront from '../../assets/Venado_front.jpg';
import purpleAster from '../../assets/Purple_Aster.jpg';

export class Home extends Component {
  constructor() {
    super()
    this.state = {
      showNav: false,
      showThumbnails: false,
      showFullscreenButton: false,
      useBrowserFullscreen: false,
      showPlayButton: false,
      showBullets: true,
      autoPlay: true,
      images: [
        {
          original: venadoFront,
          originalClass: 'venado_gallery_image',
          originalAlt: 'Custom home in Santa Fe, New Mexico. Rear view of home.',
        },
        {
          original: purpleAster,
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
          showNav={this.state.showNav}
          showThumbnails={this.state.showThumbnails}
          showFullscreenButton={this.state.showFullscreenButton}
          useBrowserFullscreen={this.state.useBrowserFullscreen}
          showPlayButton={this.state.showPlayButton}
          showBullets={this.state.showBullets}
          autoPlay={this.state.autoPlay}
        />
      </section>
    )
  }
}
