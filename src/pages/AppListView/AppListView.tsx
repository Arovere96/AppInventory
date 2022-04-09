import {
    IonContent,
    IonGrid,
    IonHeader,
    IonPage,
    IonRow,
    IonCol,
    IonTitle,
    IonToolbar,
    IonText
} from '@ionic/react';
import { useParams } from 'react-router';
import { AppDbExample } from '../../components/Apps/AppDbExample';
import Menu from '../../components/Menu/Menu';
import Header from '../../components/Menu/Header';
import './AppListView.css';
import Card from "../../components/Card/Card"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import '@ionic/react/css/ionic-swiper.css';
export { }

const AppListView: React.FC = () => {
    const { name } = useParams<{ name: string; }>();
    const link = "/page/AppListView/" + name;
    return (
        <IonPage>
            <Header />
            <Menu />
            <IonHeader>
                <IonToolbar >
                    <IonTitle class="ion-text-center">{name}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonGrid>
                    <IonRow>
                        <IonCol >
                            <IonText className="subTitle">
                                {name}
                            </IonText>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                    
                                {AppDbExample.map((appList, index) => {
                                    if (Math.random() > 0.2) {
                                        const img = "/assets/images/" + appList.name + ".PNG";
                                        const link = "/page/apps/" + appList.name;
                                        return (  
                                            <IonCol key={index} size="4" size-sm="4" size-md="3" size-lg="2">
                                                <Card link={link} title={appList.name} subTitle={appList.subTitle} image={img} />
                                                </IonCol> 
                                        );
                                    }
                                })} 
                                                     
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default AppListView;