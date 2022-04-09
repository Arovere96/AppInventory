import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonPage,
  IonText
} from '@ionic/react';

import React from 'react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import '@ionic/react/css/ionic-swiper.css';
import './Home.css';
import Menu from '../../components/Menu/Menu';
import Header from '../../components/Menu/Header';
import { Swiper, SwiperSlide } from 'swiper/react';
import { App } from "../../components/Apps/Apps";
import Card from "../../components/Card/Card"
export { }

interface AppSquare {
  url: string;
  title: string;
  description: string;
}

const Aggregating: AppSquare[] = [
  {
    title: 'Augmented reality',
    url: '/page/AppListView/Augmented reality',
    description: 'Tools to create Augmented reality'
  },
  {
    title: 'Content collectors',
    url: '/page/AppListView/Content collectors',
    description: 'Tools to create Content collectors'
  },
  {
    title: 'Link collectors',
    url: '/page/AppListView/Link collectors',
    description: 'Tools to create Link collectors'
  },
  {
    title: 'Storytelling',
    url: '/page/AppListView/Storytelling',
    description: 'Tools to create Storytelling'
  },
];

const Creating: AppSquare[] = [
  {
    title: 'Animations',
    url: '/page/AppListView/Animations',
    description: 'Tools to create Animations'
  },
  {
    title: 'Diagrams, graphics and images',
    url: '/page/AppListView/Diagrams, graphics and images',
    description: 'Tools to create Diagrams, graphics and images'
  },
  {
    title: 'Ebooks & flipbooks',
    url: '/page/AppListView/Ebooks & flipbooks',
    description: 'Tools to create Ebooks & flipbooks'
  },
  {
    title: 'Flashcards',
    url: '/page/AppListView/Flashcards',
    description: 'Tools to create Flashcards'
  },
  {
    title: 'Geographical maps',
    url: '/page/AppListView/Geographical maps',
    description: 'Tools to create Geographical maps'
  },
  {
    title: 'Infographics',
    url: '/page/AppListView/Infographics',
    description: 'tools to create Infographics'
  },
  {
    title: 'Mind Maps',
    url: '/page/AppListView/Mind Maps',
    description: 'Tools to create Mind Maps'
  },
  {
    title: 'Podcasts',
    url: '/page/AppListView/Podasts',
    description: 'Tools to create Podasts'
  },
  {
    title: 'Presentations',
    url: '/page/AppListView/Presentations',
    description: 'Tools to create Presentations'
  },
  {
    title: 'Text processing & Spreadsheets',
    url: '/page/AppListView/Text processing & Spreadsheets',
    description: 'Tools to create Text processing & Spreadsheets'
  },
  {
    title: 'Timelines',
    url: '/page/AppListView/Timelines',
    description: 'Tools to create Timelines'
  },
  {
    title: 'Video making & enrichment',
    url: '/page/AppListView/Video making',
    description: 'Tools to create Video making & enrichment'
  },
  {
    title: 'Wordclouds',
    url: '/page/AppListView/Wordclouds',
    description: 'Tools to create Wordclouds'
  }
];

const Interacting: AppSquare[] = [
  {
    title: 'Assessment rubrics',
    url: '/page/AppListView/Assessment',
    description: 'Tools to create Assessment rubrics'
  },
  {
    title: 'Collaboration & Comunication',
    url: '/page/AppListView/Collaboration & Comunication',
    description: 'Tools to create Collaboration & Comunication'
  },
  {
    title: 'Designing & Planning',
    url: '/page/AppListView/Designing & Planning',
    description: 'Tools to create Designing & Planning'
  },
  {
    title: 'Gamification',
    url: '/page/AppListView/Gamification',
    description: 'Tools to create Gamification'
  },
  {
    title: 'Group management',
    url: '/page/AppListView/Group management',
    description: 'Tools to create Group management'
  },
  {
    title: 'Quizzes, forms, surveys',
    url: '/page/AppListView/Quizzes',
    description: 'Tools to create Quizzes, forms, surveys'
  },
  {
    title: 'Shared whiteboards',
    url: '/page/AppListView/Shared whiteboards',
    description: 'Tools to create Shared whiteboards'
  },
];

const Home: React.FC<{ AppLists: App[] }> = props => {

  return (
    <IonPage>
      <Menu />
      <Header />
      <IonContent>
        <IonGrid id="main-content">
          <IonRow>
            <IonCol >
              <IonText className="subTitle">
                New & updated apps
              </IonText>
            </IonCol>
            <IonCol className="ion-text-end">
              <IonButton color="primary" routerLink="/page/AppListView/New & updated">
                See more
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
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
                {props.AppLists.map((prop, index) => {
                  if (Math.random() > 0.3) {
                    const img = "assets/images/" + prop.name + ".PNG";
                    const link = "/page/apps/" + prop.name;
                    return (
                      <SwiperSlide key={index}>
                        <Card link={link} title={prop.name} subTitle={prop.subTitle} image={img} />
                      </SwiperSlide>
                    );
                  }
                })}
              </Swiper>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonText className="subTitle">
                Discover Aggregating
              </IonText>
            </IonCol>
            <IonCol class="ion-text-end">
              <IonButton color="primary" routerLink="/page/CategoryView/Aggregating">
                See more
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
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
                }}
              >
                {Aggregating.map((AggregatingApp, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <IonCard routerLink={AggregatingApp.url}>
                        <IonCardTitle class="ion-text-center" >
                          {AggregatingApp.title}
                        </IonCardTitle>
                        <IonCardContent class="ion-text-center">
                          {AggregatingApp.description}
                        </IonCardContent>
                      </IonCard>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonText className="subTitle">
                Discover Creating
              </IonText>
            </IonCol>
            <IonCol className="ion-text-end">
              <IonButton color="primary" routerLink="/page/CategoryView/Creating">
                See more
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
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
                }}
              >
                {Creating.map((CreatingApp, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <IonCard routerLink={CreatingApp.url}>
                        <IonCardTitle class="ion-text-center">
                          {CreatingApp.title}
                        </IonCardTitle>
                        <IonCardContent class="ion-text-center">
                          {CreatingApp.description}
                        </IonCardContent>
                      </IonCard>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonText className="subTitle">
                Discover Interacting & Organizating
              </IonText>
            </IonCol>
            <IonCol className="ion-text-end">
              <IonButton color="primary" routerLink="/page/CategoryView/interacting&Organizating">
                See more
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
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
                }}
              >
                {Interacting.map((InteractingApp, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <IonCard routerLink={InteractingApp.url}>
                        <IonCardTitle class="ion-text-center">
                          {InteractingApp.title}
                        </IonCardTitle>
                        <IonCardContent class="ion-text-center">
                          {InteractingApp.description}
                        </IonCardContent>
                      </IonCard>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonText className="subTitle">
                Discover Others
              </IonText>
            </IonCol>
            <IonCol class="ion-text-end">
              <IonButton color="primary" routerLink="/page/AppListView2/Others">
                See more
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
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
                {props.AppLists.map((prop, index) => {
                  const img = "assets/images/" + prop.name + ".PNG";
                  const link = "/page/apps/" + prop.name;
                  return (
                    <SwiperSlide key={index}>
                      <Card link={link} title={prop.name} subTitle={prop.subTitle} image={img} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
