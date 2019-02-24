import React from 'react';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon
} from 'react-share';
import moment from 'moment';
import Breadcrumb from './Breadcrumb';

const shareUrl = 'http://www.evular.lt';

export default ({ title, tag, description, thumbnail, content, children, date, slug }) => (
  <React.Fragment>
    <Breadcrumb image={thumbnail} title={title} description={description} tag={tag} />
    <section className="bg-white pt-0 pb-lg-10 pb-5 ">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <div className="row">
              <div className="col-12">
                <div className="row mb-0">
                  <div className="col-8">
                    <p className="">
                      {moment(date)
                        .locale('lt')
                        .format('l')}
                    </p>
                  </div>
                  <div className="col-4" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <FacebookShareButton
                      url={shareUrl + '/blogas' + '/' + slug}
                      quote={title}
                      style={{ filter: 'grayscale(1)' }}
                    >
                      <FacebookIcon size={24} round />
                    </FacebookShareButton>
                    <LinkedinShareButton
                      url={shareUrl + '/blogas' + '/' + slug}
                      quote={title}
                      style={{ filter: 'grayscale(1)' }}
                    >
                      <LinkedinIcon size={24} round />
                    </LinkedinShareButton>
                    <TwitterShareButton
                      url={shareUrl + '/blogas' + '/' + slug}
                      quote={title}
                      style={{ filter: 'grayscale(1)' }}
                    >
                      <TwitterIcon size={24} round />
                    </TwitterShareButton>
                  </div>
                </div>
                <hr className="mt-1 mb-1" />
              </div>
            </div>
            <div className="row justify-content-center">
              <article
                className="col-lg-8 col-12 markdown"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    {children}
  </React.Fragment>
);
