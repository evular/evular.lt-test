import React from 'react';
import Slider from 'react-slick';
import expertise from '../../data/content/expertise';

export default () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 0
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 0
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 0
        }
      }
    ]
  };
  return (
    <section className="bg-white pt-lg-0 pt-0 pb-lg-10 pb-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <span className="eyebrow mb-1 text-primary">Technologijos ir įrankiai</span>
            <h4 className="text-decorated text-decorated--padding">
              "Nesvarbu, kokie esate - geri ar blogi. Neinvestavę į naujas technologijas, jūs būsite
              palikti už nugaros"
            </h4>
            <p>Sir. Phillip Green, Arcadia Group įkūrėjas.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <Slider {...settings}>
              {expertise.map(item => (
                <div key={item.heading}>
                  <b style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                      src={item.icon}
                      alt={item.heading}
                      style={{
                        display: 'inline !important',
                        height: 'auto',
                        maxWidth: '50px'
                      }}
                    />
                    <span className="eyebrow" style={{ marginLeft: '.625rem' }}>
                      {item.heading}
                    </span>
                  </b>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};
