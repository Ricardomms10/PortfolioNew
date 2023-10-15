import React, { useState } from 'react';
import { CustomSwiper, CustomSwiperSlide, Box, Container, Title, Text, ModalContainer, ModalContent, CloseButton } from './styled';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { data } from './data';


export const MyProject = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    const openModal = (item) => {
        setSelectedItem(item);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedItem(null);
        setModalOpen(false);
    };

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
                            <div onClick={() => openModal(item)}>
                                <img src={item.image} alt="Slider" />
                                <Text>
                                    <h1>{item.nome}</h1>
                                </Text>
                            </div>
                        </CustomSwiperSlide>
                    ))}
                </CustomSwiper>
            </Box>
            {modalOpen && selectedItem && (
                <ModalContainer>
                    <ModalContent>
                        <CloseButton onClick={closeModal}>X</CloseButton>
                        <h1>{selectedItem.nome}</h1>
                        <ul>
                            <li>
                                <span><i class="fa-regular fa-file-lines"></i></span>
                                <div>
                                    <span>Descrição:</span>
                                    <span>{selectedItem.descricao}</span>
                                </div>
                            </li>

                            <li>
                                <span><i class="fa-regular fa-user"></i></span>
                                <div>
                                    <span>Repositório:</span>
                                    <span><a href={selectedItem.link} target="_blank" rel="noopener noreferrer">Acessar repositório</a></span>
                                </div>
                            </li>
                        </ul>
                        <img src={selectedItem.image} alt="Slider" />
                        <div>
                           <span>Linguagens utilizadas: </span>
                           <span>{selectedItem.ling} </span>
                        </div>
                    </ModalContent>
                </ModalContainer>
            )}
        </Container>
    );
};

