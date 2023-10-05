import { CustomSwiper, CustomSwiperSlide, Box, Container, Title, Text } from "./styled"
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { data } from "./data";

export const MyProject = () => {

    return (
        <Container>
            <Title>
                <h1> Projetos </h1>
                <p> Aqui estão alguns exemplos dos projetos que desenvolvi e estou trabalhando atualmente. <br /> Confira abaixo: </p>
            </Title>

            <Box>
                <CustomSwiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {data.map((item) => (
                        <CustomSwiperSlide key={item.id}>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <img src={item.image} alt="Slider" />
                            </a>
                            <Text key={item.id}>
                                <h1>{item.nome}</h1>

                            </Text>
                        </CustomSwiperSlide >
                    ))}

                </CustomSwiper >



            </Box>

        </Container>

    )
}