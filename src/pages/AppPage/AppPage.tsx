/*
This page is the abstraction that is gonna implement the inspection of an application when clicked
TODO: Redirect at about this app, function pre-created to complete.
*/
import {
  IonButtons,
  IonButton,
  IonIcon,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonPage,
  IonRow,
  IonCol,
  IonText,
  IonTitle,
  IonToolbar,
  IonImg,
  IonProgressBar,
  IonLabel,
  IonBackButton,
  IonPopover,
  IonModal
} from '@ionic/react';

import { useParams } from 'react-router';
import { Appp } from '../../models/App';
import './AppPage.css';
import { AppDbExample } from '../../components/Apps/AppDbExample';
import { searchOutline, ellipsisVertical, arrowForwardOutline, eyeSharp, heartSharp, star, starHalf } from 'ionicons/icons';
import MenuApp from '../../components/Menu/MenuApp';
import { Swiper, SwiperSlide } from 'swiper/react';
import AppComment from '../../components/Comments/AppComment';
import 'swiper/swiper.min.css';
import '@ionic/react/css/ionic-swiper.css';
import Card from "../../components/Card/Card";
import React, { useState } from "react";

const AppPage: React.FC<{ InspectedApp: Appp }> = props => {
  const [showPopover, setShowPopover] = useState<{ open: boolean, event: Event | undefined }>({
    open: false,
    event: undefined,
  });
  const [showImgPopover, setImgPopover] = useState<{ open: boolean, img: string, event: Event | undefined }>({
    open: false,
    img: "",
    event: undefined,
  });
  var showMore = true;
  const [textMore, settextMore] = useState("Show More");
  const [hide, sethide] = useState(true);
  const { name } = useParams<{ name: string; }>();
  const name2 = "/About/" + name;
  const fun = props.InspectedApp.functionality / 10;
  const app = props.InspectedApp.applicability / 10;
  const ori = props.InspectedApp.originality / 10;
  const ease = props.InspectedApp.ease / 10;
  const img = "assets/images/" + props.InspectedApp.name + ".PNG";

  return (

    <IonPage>
      <IonHeader class="first-row">
        <IonToolbar>
          <IonButtons slot="start" >
            <IonBackButton />
          </IonButtons>
          <IonTitle>{props.InspectedApp.name}</IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink="/SearchPage">
              <IonIcon size="large" id="Search" icon={searchOutline} />
            </IonButton>
          </IonButtons>
          <IonButtons slot="end" onClick={(e) => setShowPopover({ open: true, event: e.nativeEvent })} >
            <IonButton>
              <IonIcon size="large" id="Search" icon={ellipsisVertical} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonPopover
        isOpen={showPopover.open}
        event={showPopover.event}
        onDidDismiss={e => setShowPopover({ open: false, event: undefined })}
      >
        <MenuApp />
      </IonPopover>

      <IonContent >
        <IonGrid class="grid">

          <IonRow>
            <IonCol>
              <IonItem lines='none'>
                <IonImg className="thumbImg" slot="start" src={img} />
                <IonTitle class="my-label">
                  <a className="title" target="_blank" href={props.InspectedApp.urlApp}>{props.InspectedApp.name}</a>
                </IonTitle>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol className="border-right ion-text-center">
              <IonIcon className="yellow responsive-text" icon={star} />
              <IonLabel className="responsive-text">{props.InspectedApp.score}</IonLabel>
            </IonCol>
            <IonCol className="ion-text-center">
              <IonIcon className="responsive-text" icon={eyeSharp} />
              <IonLabel className="responsive-text"> {props.InspectedApp.views}</IonLabel>
            </IonCol>
            <IonCol className="border-left ion-text-center">
              <IonIcon className="responsive-text" icon={heartSharp} />
              <IonLabel className="responsive-text"> {props.InspectedApp.likes}</IonLabel>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol class="ion-text-center">
              <IonToolbar class="subTitleToolbar">
                <IonGrid>
                  <IonRow>
                    <IonCol size="8">
                      <IonText className="subTitle">{props.InspectedApp.subTitle}</IonText>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonToolbar>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <p>
                {props.InspectedApp.description}
              </p>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonText class="subTitle" >
                Presentazione App
              </IonText>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              {props.InspectedApp.presentation.map((Pres, index) => {

                if (!Pres.startsWith("/") && index == 0) {
                  return (<IonText class="presentation" key={index}>{Pres}</IonText>)
                }
                if (Pres.startsWith("/")) {
                  return (
                    <IonImg className="presentationImg" hidden={hide} key={index} src={Pres}
                      onClick={(e) => setImgPopover({ open: true, img: Pres, event: e.nativeEvent })}
                    />
                  )
                } else {
                  return (<IonText class="presentation" hidden={hide} key={index}>{Pres}</IonText>)
                }
              })
              }
              <IonModal class="ion-text-center my-custom-modal-css" isOpen={showImgPopover.open}>
                <IonImg src={showImgPopover.img} />
                <IonButton onClick={e => setImgPopover({ open: false, img: "", event: undefined })}>
                  Close
                </IonButton>
              </IonModal>


            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton onClick={() => { sethide(!hide); if (hide) { settextMore("Show Less") } else { settextMore("Show More") }; showMore = !showMore }}>
                {textMore}
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size-sm="8" size-md="5" size-lg="4">
              <IonItem lines='none'>
                <IonText className="fun">
                  Functionality
                </IonText>
                <IonProgressBar class="margin" value={fun} />
                <IonText className="scoreMargin"> {props.InspectedApp.functionality} </IonText>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size-sm="8" size-md="5" size-lg="4">
              <IonItem lines='none'>
                <IonText className="fun">
                  Applicability
                </IonText>
                <IonProgressBar class="margin" value={app} />
                <IonText className="scoreMargin"> {props.InspectedApp.applicability} </IonText>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size-sm="8" size-md="5" size-lg="4">
              <IonItem lines='none'>
                <IonText className="fun">
                  Originality
                </IonText>
                <IonProgressBar class="margin" value={ori} />
                <IonText className="scoreMargin"> {props.InspectedApp.originality} </IonText>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size-sm="8" size-md="5" size-lg="4">
              <IonItem lines='none'>
                <IonText className="fun">
                  Ease of Use
                </IonText>
                <IonProgressBar class="margin" value={ease} />
                <IonText className="scoreMargin"> {props.InspectedApp.ease} </IonText>
              </IonItem>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonToolbar class="subTitleToolbar">
                <IonText >
                  About this app
                </IonText>
                <IonButtons slot="end">
                  <IonButton routerLink={name2}>
                    <IonIcon size="large" id="About" icon={arrowForwardOutline} />
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <Swiper
                observer={true}
                observeParents={true}
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
                {props.InspectedApp.categories.map((Category, index) => {
                  var link: string;
                  {
                    if (Category == "Creating" || Category == "Aggregating" || Category == "Interacting & Organizating") {
                      link = "/page/CategoryView/" + Category + "2";
                    } else {
                      link = "/page/AppListView2/" + Category;
                    }
                  }
                  return (
                    <SwiperSlide className="cat ion-text-center" key={index}>
                      <IonItem lines='none' class="item-background-color" routerLink={link}>
                        <IonText>
                          {Category}
                        </IonText>
                      </IonItem>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonText class="subTitle">
                Similar Apps
              </IonText>
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
                  // when window width is >= 900px
                  900: {
                    slidesPerView: 5,
                    spaceBetween: 10
                  },
                  // when window width is >= 1280px
                  1280: {
                    slidesPerView: 7,
                    spaceBetween: 10
                  },
                }}
              >
                {AppDbExample.map((prop, index) => {
                  if (Math.random() > 0.4 && prop.name != props.InspectedApp.name) {
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
              <IonText class="subTitle" >
                Commenti degli Utenti
              </IonText>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <AppComment />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage >
  );
};

export default AppPage;

//under ion header closure <ExploreContainer name={name} />