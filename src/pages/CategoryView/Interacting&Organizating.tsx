import {
    IonContent,
    IonGrid,
    IonHeader,
    IonPage,
    IonRow,
    IonCol,
    IonText,
    IonTitle,
    IonToolbar,
    IonButton
} from '@ionic/react';

import Menu from '../../components/Menu/Menu';
import Header from '../../components/Menu/Header';
import './Interacting&Organizating.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from "../../components/Card/Card";
import 'swiper/swiper.min.css';
import '@ionic/react/css/ionic-swiper.css';
import { AppDbExample } from '../../components/Apps/AppDbExample';
export { }

interface SubCat {
    url: string;
    title: string;
    description: string;
}
const subCats: SubCat[] = [
    {
        title: 'Assessment rubrics',
        url: '/page/AppListView2/Assessment',
        description: 'Tools to create Assessment rubrics'
    },
    {
        title: 'Collaboration & Comunication',
        url: '/page/AppListView2/Collaboration & Comunication',
        description: 'Tools to create Collaboration & Comunication'
    },
    {
        title: 'Designing & Planning',
        url: '/page/AppListView2/Designing & Planning',
        description: 'Tools to create Designing & Planning'
    },
    {
        title: 'Gamification',
        url: '/page/AppListView2/Gamification',
        description: 'Tools to create Gamification'
    },
    {
        title: 'Group management',
        url: '/page/AppListView2/Group management',
        description: 'Tools to create Group management'
    },
    {
        title: 'Quizzes, forms, surveys',
        url: '/page/AppListView2/Quizzes',
        description: 'Tools to create Quizzes, forms, surveys'
    },
    {
        title: 'Shared whiteboards',
        url: '/page/AppListView2/Shared whiteboards',
        description: 'Tools to create Shared whiteboards'
    },
];

const Interacting: React.FC = () => {

    return (
        <IonPage>
            <Menu />
            <Header />
            <IonHeader>
                <IonToolbar >
                    <IonTitle class="ion-text-center">Interacting & Organizating</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonGrid class="grid">
                    {subCats.map((subCat, index) => {
                        return (
                            <div key={index}>
                                <IonRow>
                                    <IonCol>
                                        <IonText className="subTitle">
                                            {subCat.title}
                                        </IonText>
                                    </IonCol>
                                    <IonCol className="ion-text-end">
                                        <IonButton color="primary" routerLink={subCat.url}>
                                            See more
                                        </IonButton>
                                    </IonCol>
                                </IonRow>
                                <IonRow>
                                    <IonCol key={index} >
                                        <Swiper
                                            observer={true}
                                            observeParents={true}
                                            loop={true}
                                            slidesPerView={4}
                                            spaceBetween={10}
                                            breakpoints={{
                                                // when window width is >= 300px
                                                300: {
                                                    slidesPerView: 2,
                                                    spaceBetween: 10
                                                },
                                                // when window width is >= 450px
                                                450: {
                                                    slidesPerView: 3,
                                                    spaceBetween: 10
                                                },
                                                // when window width is >= 600px
                                                600: {
                                                    slidesPerView: 4,
                                                    spaceBetween: 10
                                                },
                                                // when window width is >= 850px
                                                850: {
                                                    slidesPerView: 5,
                                                    spaceBetween: 10
                                                },
                                                // when window width is >= 1000px
                                                1000: {
                                                    slidesPerView: 6,
                                                    spaceBetween: 10
                                                },
                                                1200: {
                                                    slidesPerView: 7,
                                                    spaceBetween: 10
                                                },
                                            }}
                                        >
                                            {AppDbExample.map((prop, index2) => {
                                                if (Math.random() > 0.3 && index2 < 7) {
                                                    const img = "assets/images/" + prop.name + ".PNG";
                                                    const link = "/page/apps/" + prop.name;
                                                    return (
                                                        <SwiperSlide key={index2}>
                                                            <Card link={link} title={prop.name} subTitle={prop.subTitle} image={img} />
                                                        </SwiperSlide>
                                                    );
                                                }
                                            })}
                                        </Swiper>
                                    </IonCol>
                                </IonRow>
                            </div>
                        );
                    })}
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Interacting;