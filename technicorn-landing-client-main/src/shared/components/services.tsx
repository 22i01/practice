"use client";

import { Container } from '@/shared/ui/wrapppers/container';
import { Typography } from '@/shared/ui/typography';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Card, CardHeader } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function Services() {
const { t } = useTranslation('translation');
const [isClient, setIsClient] = useState(false);

  useEffect(() => {
      setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Container flares={true} className="py-24">
      <Typography className="text-center mb-10" tag="h2">
      {t(`services.services_label`)}
      </Typography>
      <Swiper
        modules={[Autoplay]}
        speed={1000}
        autoplay={{
          pauseOnMouseEnter: true,
          delay: 25500,
          disableOnInteraction: false,
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        // onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {[...Array(10)].map((_, index) => (
          <SwiperSlide key={index}>
            <Card className="aspect-[12/16]">
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="text-tiny text-white/60 uppercase font-bold">
                {t(`services.services_name`)}
                </p>
                <h4 className="text-white font-medium text-large">
                {t(`services.services_descr`)}
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src="https://nextui.org/images/card-example-4.jpeg"
              />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
