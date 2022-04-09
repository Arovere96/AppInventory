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

import { useParams } from 'react-router';
import Menu from '../../components/Menu/Menu';
import Header from '../../components/Menu/Header';
import './Creating.css';
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
    title: 'Animations',
    url: '/page/AppListView2/Animations',
    description: 'Tools to create Animations'
  },
  {
    title: 'Diagrams, graphics and images',
    url: '/page/AppListView2/Diagrams, graphics and images',
    description: 'Tools to create Diagrams, graphics and images'
  },
  {
    title: 'Ebooks & flipbooks',
    url: '/page/AppListView2/Ebooks & flipbooks',
    description: 'Tools to create Ebooks & flipbooks'
  },
  {
    title: 'Flashcards',
    url: '/page/AppListView2/Flashcards',
    description: 'Tools to create Flashcards'
  },
  {
    title: 'Geographical maps',
    url: '/page/AppListView2/Geographical maps',
    description: 'Tools to create Geographical maps'
  },
  {
    title: 'Infographics',
    url: '/page/AppListView2/Infographics',
    description: 'tools to create Infographics'
  },
  {
    title: 'Mind Maps',
    url: '/page/AppListView2/Mind Maps',
    description: 'Tools to create Mind Maps'
  },
  {
    title: 'Podcasts',
    url: '/page/AppListView2/Podasts',
    description: 'Tools to create Podasts'
  },
  {
    title: 'Presentations',
    url: '/page/AppListView2/Presentations',
    description: 'Tools to create Presentations'
  },
  {
    title: 'Text processing & Spreadsheets',
    url: '/page/AppListView2/Text processing & Spreadsheets',
    description: 'Tools to create Text processing & Spreadsheets'
  },
  {
    title: 'Timelines',
    url: '/page/AppListView2/Timelines',
    description: 'Tools to create Timelines'
  },
  {
    title: 'Video making & enrichment',
    url: '/page/AppListView2/Video making',
    description: 'Tools to create Video making & enrichment'
  },
  {
    title: 'Wordclouds',
    url: '/page/AppListView2/Wordclouds',
    description: 'Tools to create Wordclouds'
  }
];

const Creating: React.FC = () => {

  return (
    <IonPage >
      <Menu />
      <Header />
      <IonHeader>
        <IonToolbar >
          <IonTitle class="ion-text-center">Creating</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent >
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

export default Creating;

