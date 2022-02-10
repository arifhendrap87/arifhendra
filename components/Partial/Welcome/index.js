

import Image from 'next/image'
export default function index() {
    return (

        <div class="welcome-area welcome-area--l3 bg-default">
            <div class="container">
                <div class="row align-items-center justify-content-center justify-content-md-start">
                    <div class="col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-xs-11">
                        <div class="welcome-content welcome-content--l3">
                            <h1 class="welcome-content--l3__sub-title aos-init aos-animate" data-aos="fade-up" data-aos-duration="500" data-aos-once="true">Get Started</h1>
                            <h1 class="welcome-content--l3__title aos-init aos-animate" data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true">Make More Time <br class="d-none d-xs-block" /> For The Work That <br class="d-none d-xs-block" /> Matters Most</h1>
                            <p class="welcome-content--l3__descriptions aos-init aos-animate" data-aos="fade-up" data-aos-duration="500" data-aos-delay="400" data-aos-once="true">When, while lovely valley teems with vapour around
                meand <br class="d-none d-sm-block" />
                                    meridian sun strikes the upper impenetroble.</p>
                            <div class="welcome-btn-group--l3">
                                <a class="btn btn--lg-2 btn-primary text-white shadow--primary rounded-50 me-2 me-sm-3 popup-btn aos-init aos-animate" href="https://www.youtube.com/watch?v=LWZ7iytIA6k" data-aos="fade-up" data-aos-duration="500" data-aos-delay="600" data-aos-once="true">Watch
                  Video</a>
                                <a class="btn btn--lg-2 btn-electric-violet-2 shadow--electric-violet-2 rounded-50 me-2 me-sm-3 aos-init aos-animate" href="#" data-aos="fade-up" data-aos-duration="500" data-aos-delay="600" data-aos-once="true">Get
                  Started</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xxl-7 col-xl-6 col-lg-5 col-md-8 col-6 position-static">
                        <div class="welcome-image-group-wrapper--l3">
                            <div class="welcome-image-group welcome-image-group--l3">
                                <Image class="w-100 aos-init aos-animate" src="/fastland-html/image/home-3/welcome-woman-l3.png" alt="" data-aos="fade-left" data-aos-duration="500" data-aos-once="true" width="100" height="100" />
                                <div class="welcome-image-group--l3__img-1">
                                    <Image class="w-100 aos-init aos-animate" src="/fastland-html/image/home-3/welcome-man-l3.png" alt="" data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true" width="100" height="100" />
                                </div>
                                <div class="welcome-image-group--l3__img-2">
                                    <Image class="w-100 aos-init aos-animate" src="/fastland-html/image/home-3/welcome-shape-l3.png" alt="" data-aos="fade-right" data-aos-duration="500" data-aos-delay="400" data-aos-once="true" width="100" height="100" />
                                </div>
                                <div class="welcome-image-group--l3__img-3">
                                    <Image class="w-100 aos-init aos-animate" src="/fastland-html/image/home-3/welcome-shape-l3-2.png" alt="" data-aos="fade-right" data-aos-duration="500" data-aos-delay="400" data-aos-once="true" width="100" height="100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
