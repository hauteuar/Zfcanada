import React, { useEffect, useState } from 'react';
import './Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import AboutUs from './AboutUs'
import Services from './Services';
import NewsAlerts from './NewsAlerts';
import ContactUs from './ContactUs';
import SuccessStories from './successStories';
import Footer from './Footer';

function HomePage() {
    const sectionStyle = {
        padding: '50px 0',
        textAlign: 'center',
    };
    const [ads, setAds] = useState([]);


    useEffect(() => {
        const fetchAds = async () => {
            const adCollectionRef = collection(db, 'ads'); // Adjust 'ads' to your collection name
            const adDocs = await getDocs(adCollectionRef);
            const adsData = adDocs.docs.map(doc => doc.data());
            setAds(adsData);
        };

        fetchAds();
    }, []);

    return (
        <div>
            <section id="home">

        <div className="home-container">
                    <div className="description">
                        <h1>Welcome to ZFCanada Immigration Services</h1>
                        <div className="tagline">Turning Dreams Into Reality - One Application at a Time</div>
                        <p>"Opening Doors to Your Canadian Dream" <br />
                            A captivating image of Canada, possibly featuring iconic Canadian landscapes or symbols of Canadian life, to immediately catch the eye.</p>
                        <p>We specialize in providing comprehensive immigration services for Canadian immigration. Our team of experts is here to guide you through every step of the immigration process, ensuring a smooth and successful journey to Canada.</p>
                        <p>We are particularly versed and specialized in handling complex immigration cases, including appeals for rejected applications. Our expertise lies in turning challenges into opportunities, helping you navigate through the complexities of immigration law to achieve a favorable outcome.</p>
                        
                    </div>
            <div className="image-slider">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    {ads.map((ad, index) => (
                        <SwiperSlide key={index}>
                            <img src={ad.imageUrl} alt={`Ad ${index + 1}`} style={{ width: '512px', height: '512px' }} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
      </section>
            <section id="about-us" style={{ ...sectionStyle, backgroundColor: '#f0f0f0' }} ><AboutUs /></section>
            <section id="services" style={{ ...sectionStyle, backgroundColor: '#fffFF' }}><Services /></section>
            <section id="sucess" style={{ ...sectionStyle, backgroundColor: '#f0f0f0' }}><SuccessStories /></section>
            <section id="contact-us" style={{ ...sectionStyle, backgroundColor: '#fff' }}><ContactUs /></section>
            <section id="news-alerts" style={{ ...sectionStyle, backgroundColor: '#f0f0f0' }}><NewsAlerts /></section>
            <section id="footer" style={{ ...sectionStyle, backgroundColor: '#fff' }}><Footer /> </section>
    </div>
    );
}

export default HomePage;




