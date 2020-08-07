import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import venadoFront from '../../assets/Venado_front.jpg';
import purpleAster from '../../assets/Purple_Aster.jpg';
import profile from '../../assets/profile.jpg';
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
        <div className="center_main">
          <div className="rrr_content">
            <h2>Raise, Repair, Remodel</h2>
            <p>Timberline Inc. is a locally owned and operated business in Santa Fe, New Mexico and surrounding areas since 1992. Specializing in New Mexican style builds and remodels, Timberline can do it all. From the preservation of original homes dating back to the mid 1800's to brand new homes and everything in between! Award winning Timberline Inc. can help with repairs, remodels or raising a new project from the ground up.</p>
          </div>
          <img src={purpleAster}/>
        </div>
        <div className="bottom_main">
          <h2>Meet the Owner</h2>
          <p>Stephen Gibson, owner and founder of Timberline Inc. has been working in the Santa Fe community for over 35 years and has received 11 awards in the Santa Fe area Home Builders Association's - A Parade of Homes. Steve's passion is crafting quality solutions for your construction needs.</p>
          <img src={profile}/>
        </div>
      </section>
    )
  }
}
