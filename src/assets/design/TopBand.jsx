import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import Swiper styles

const BrandLogoSlider = () => {
    const brandLogos = [
        { name: "Nike", logo: "https://i.ibb.co.com/zxCgLC2/images-1.png", url: "https://www.nike.com" },
        { name: "Adidas", logo: "https://i.ibb.co.com/9nPjYs8/images.png", url: "https://www.adidas.com"},
        { name: "Puma", logo: "https://i.ibb.co.com/r6jKvWc/Puma-logo-black-png.png",url: "https://www.puma.com"  },
        { name: "Reebook", logo: "https://i.ibb.co.com/GT4BTLR/Banner-0001-2019.jpg",url: "https://www.reebok.com" },
        { name: "Under Armour", logo: "https://i.ibb.co.com/F75ZMJM/images-2.png",url: "https://www.reebok.com" },
        { name: "Nike", logo: "https://i.ibb.co.com/zxCgLC2/images-1.png",url: "https://www.nike.com"  },
        { name: "Adidas", logo: "https://i.ibb.co.com/9nPjYs8/images.png", url: "https://www.adidas.com" },
        { name: "Puma", logo: "https://i.ibb.co.com/r6jKvWc/Puma-logo-black-png.png",url: "https://www.puma.com"  },
        { name: "Reebok", logo: "https://i.ibb.co.com/GT4BTLR/Banner-0001-2019.jpg" ,url: "https://www.reebok.com" },
        { name: "Under Armour", logo: "https://i.ibb.co.com/F75ZMJM/images-2.png",url: "https://www.reebok.com" }
    ];

    return (
        <section className="py-10 mx-auto max-w-7xl bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">Our Brand Partners</h2>
            <Swiper
                spaceBetween={0}
                slidesPerView={6}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                {brandLogos.map((brand, index) => (
                    <SwiperSlide key={index} className="flex justify-center items-center">
                        <a href={brand.url} target="_blank" rel="noopener noreferrer">
                            <img src={brand.logo} alt={brand.name} className="w-40 h-10 object-contain" />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default BrandLogoSlider;
