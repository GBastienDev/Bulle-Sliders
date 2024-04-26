import './App.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


const App = () => {

    return(
        <>
            <div className="bulle">
            <Swiper
            slidesPerView={3}
            spaceBetween={50}
            grabCursor={true}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
            >
                <div className="bulle__box">
                    <div className="bulle__content swiper-wrapper">
                        <SwiperSlide>
                        <div className="bulle__card swiper-slide">
                            <div className="bulle__card-content">
                                <div className="bulle__card-img">
                                    <img className="bulle__img" src="./nemo.jpg" alt="nemo" />
                                </div>

                                <div className="bulle__desc" >
                                    <span className="bulle__name">Nemo</span>
                                    <span className="bulle__type">Poisson-Clown</span>
                                </div>

                                <div className="bulle__rating">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>

                                <a className="bulle__button" href="https://disney.fandom.com/fr/wiki/Nemo" target="_blank">View More</a>
                            </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className="bulle__card swiper-slide">
                            <div className="bulle__card-content">
                                <div className="bulle__card-img">
                                    <img className="bulle__img" src="./dory.jpg" alt="dory" />
                                </div>

                                <div className="bulle__desc" >
                                    <span className="bulle__name">Dory</span>
                                    <span className="bulle__type">Poisson chirurgien bleu</span>
                                </div>

                                <div className="bulle__rating  bulle__rating--two">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                </div>

                                <a className="bulle__button bulle__button--two" href="https://heros.fandom.com/fr/wiki/Dory_(Le_Monde_de_Nemo)" target="_blank">View More</a>
                            </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className="bulle__card swiper-slide">
                            <div className="bulle__card-content">
                                <div className="bulle__card-img">
                                    <img className="bulle__img" src="./sheldon.jpg" alt="sheldon" />
                                </div>

                                <div className="bulle__desc" >
                                    <span className="bulle__name">Sheldon</span>
                                    <span className="bulle__type">Hippocampe</span>
                                </div>

                                <div className="bulle__rating bulle__rating--tree">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star-half' ></i>
                                    <i class='bx bx-star' ></i>
                                </div>

                                <a className="bulle__button bulle__button--tree" href="https://pixar.fandom.com/wiki/Sheldon" target="_blank">View More</a>
                            </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className="bulle__card swiper-slide">
                            <div className="bulle__card-content">
                                <div className="bulle__card-img">
                                    <img className="bulle__img" src="./squiz1.jpg" alt="squiz" />
                                </div>

                                <div className="bulle__desc" >
                                    <span className="bulle__name">Squiz</span>
                                    <span className="bulle__type">Tortue</span>
                                </div>

                                <div className="bulle__rating bulle__rating--four">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bx-star' ></i>
                                </div>

                                <a className="bulle__button bulle__button--four" href="https://disney.fandom.com/fr/wiki/Squiz" target="_blank">View More</a>
                            </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className="bulle__card swiper-slide">
                            <div className="bulle__card-content">
                                <div className="bulle__card-img">
                                    <img className="bulle__img" src="./mrRaie.jpg" alt="mr raie" />
                                </div>

                                <div className="bulle__desc" >
                                    <span className="bulle__name">Mr Raie</span>
                                    <span className="bulle__type">Raie Manta</span>
                                </div>

                                <div className="bulle__rating bulle__rating--five">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star-half' ></i>
                                    <i class='bx bx-star' ></i>
                                    <i class='bx bx-star' ></i>
                                </div>

                                <a className="bulle__button bulle__button--five" href="https://www.chroniquedisney.fr/perso/2003-monsieur-raie.htm" target="_blank">View More</a>
                            </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className="bulle__card swiper-slide">
                            <div className="bulle__card-content">
                                <div className="bulle__card-img">
                                    <img className="bulle__img" src="./astrid.jpg" alt="astrid" />
                                </div>

                                <div className="bulle__desc" >
                                    <span className="bulle__name">Astrid</span>
                                    <span className="bulle__type">Etoile de mer</span>
                                </div>

                                <div className="bulle__rating bulle__rating--six">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star-half' ></i>
                                    <i class='bx bx-star' ></i>
                                </div>

                                <a className="bulle__button bulle__button--six" href="https://www.chroniquedisney.fr/perso/2003-astrid.htm" target="_blank">View More</a>
                            </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className="bulle__card swiper-slide">
                            <div className="bulle__card-content">
                                <div className="bulle__card-img">
                                    <img className="bulle__img" src="./gill.jpg" alt="gill" />
                                </div>

                                <div className="bulle__desc" >
                                    <span className="bulle__name">Gill</span>
                                    <span className="bulle__type">Zancle cornu</span>
                                </div>

                                <div className="bulle__rating bulle__rating--seven">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star-half' ></i>
                                    <i class='bx bx-star' ></i>
                                    <i class='bx bx-star' ></i>
                                </div>

                                <a className="bulle__button bulle__button--seven" href="https://disney.fandom.com/fr/wiki/Gill" target="_blank">View More</a>
                            </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className="bulle__card swiper-slide">
                            <div className="bulle__card-content">
                                <div className="bulle__card-img">
                                    <img className="bulle__img" src="./bruce1.jpg" alt="bruce" />
                                </div>

                                <div className="bulle__desc" >
                                    <span className="bulle__name">Bruce</span>
                                    <span className="bulle__type">Requin</span>
                                </div>

                                <div className="bulle__rating bulle__rating--eight">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bx-star' ></i>
                                    <i class='bx bx-star' ></i>
                                    <i class='bx bx-star' ></i>
                                    <i class='bx bx-star' ></i>
                                </div>

                                <a className="bulle__button bulle__button--eight" href="https://disney.fandom.com/fr/wiki/Bruce" target="_blank">View More</a>
                            </div>
                        </div>
                        </SwiperSlide>

                        <SwiperSlide>
                        <div className="bulle__card swiper-slide">
                            <div className="bulle__card-content">
                                <div className="bulle__card-img">
                                    <img className="bulle__img" src="./perle.jpg" alt="perle" />
                                </div>

                                <div className="bulle__desc" >
                                    <span className="bulle__name">Perle</span>
                                    <span className="bulle__type">Pieuvre</span>
                                </div>

                                <div className="bulle__rating bulle__rating--nine">
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star'></i>
                                    <i class='bx bxs-star-half' ></i>
                                    <i class='bx bx-star' ></i>
                                </div>

                                <a className="bulle__button bulle__button--nine" href="https://www.chroniquedisney.fr/perso/2003-perle-hippo-titouan.htm" target="_blank">View More</a>
                            </div>
                        </div>
                        </SwiperSlide>
                    </div>
                </div>
            </Swiper>
            </div>
        </>
    )
}

export default App;