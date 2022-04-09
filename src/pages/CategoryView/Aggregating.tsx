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

import { AppDbExample } from '../../components/Apps/AppDbExample';
import Menu from '../../components/Menu/Menu';
import Header from '../../components/Menu/Header';
import './Aggregating.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from "../../components/Card/Card";
import 'swiper/swiper.min.css';
import '@ionic/react/css/ionic-swiper.css';
export { }

interface SubCat {
    url: string;
    title: string;
    description: string;
}
const subCats: SubCat[] = [
    {
        title: 'Augmented reality',
        url: '/page/AppListView2/Augmented reality',
        description: 'Tools to create Augmented reality'
    },
    {
        title: 'Content colectors',
        url: '/page/AppListView2/Content colectors',
        description: 'Tools to create Content collectors'
    },
    {
        title: 'Link collectors',
        url: '/page/AppListView2/Link collectors',
        description: 'Tools to create Link collectors'
    },
    {
        title: 'Storytelling',
        url: '/page/AppListView2/Storytelling',
        description: 'Tools to create Storytelling'
    },
];

const Aggregating: React.FC = () => {

    return (
        <IonPage>
            <Menu />
            <Header />
            <IonHeader>
                <IonToolbar >
                    <IonTitle class="ion-text-center">Aggregating</IonTitle>
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
                                                if (Math.random() > 0.3 && index2<6) {
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
        </IonPage >
    );
};

export default Aggregating;