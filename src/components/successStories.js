import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Core styles
import 'swiper/css';
// Modules styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Modules
import { Navigation, Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

const successStories = [
    {
        id: 1,
        clientName: "Tareq Hadhad",
        image: 'images/suc_imag1.jpg',
        text: ' Tareq Hadhad and his family were Syrian refugees who resettled in Antigonish, Nova Scotia. In Syria, the Hadhad family owned a chocolate factory, which was destroyed in a bombing. Starting anew in Canada, they founded Peace by Chocolate, a company that quickly grew from a small local business to a nationally recognized brand. Tareq’s story is not just one of business success but also of community engagement and philanthropy, as the Hadhad family has committed to hiring and supporting other refugees and contributing to community projects.',
    },
    {
        id: 2,
        clientName: "Satish Kanwar",
        image: 'images/suc_imag1.jpg',
        text: 'Born in India and raised in Canada, Satish Kanwar is a testament to the potential of immigrants in the tech industry. He co-founded Jet Cooper, a user experience and design agency, in his early 20s. The company was acquired by Shopify, one of Canada’s biggest tech success stories, where Kanwar played a pivotal role in the company’s exponential growth. His journey reflects the potential of Canada’s tech industry to be enriched by immigrant talent, fostering innovation and global competitiveness.',
    },
    {
        id: 3,
        clientName: "Viola Desmond",
        image: 'images/news1.webp',
        text: `Though not an immigrant, Viola Desmond's story is a profound testament to overcoming barriers and inspiring change, relevant to the theme of resilience and success in the face of adversity.Desmond, a Black Nova Scotian businesswoman, challenged racial segregation at a film theatre in New Glasgow, Nova Scotia, in 1946. Her courageous stand, nearly a decade before Rosa Parks' action, made her an icon of the civil rights movement in Canada. Desmond's legacy is celebrated in Canadian history, with her image gracing the Canadian $10 bill, symbolizing the country's commitment to social justice and the recognition of contributions from all communities.`

    },
    {
        id: 4,
        clientName: "Client Name 4",
        image: 'images/news1.webp',
        text: 'Success Story 4.',
    },
    // Add more stories as needed
];


function SuccessStoriesSlider() {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }} // Example autoplay config
        >
            {successStories.map((story) => (
                <SwiperSlide key={story.id}>
                    <div className="story-content">
                        <img src={story.image} alt="Success Story" style={{ width: '100%', height: 'auto' }} />
                        <h3>{story.clientName}</h3> {/* Client name display */}
                        <p>{story.text}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SuccessStoriesSlider;
