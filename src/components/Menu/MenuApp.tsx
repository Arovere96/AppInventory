import {
    IonContent,
    IonFooter,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
    IonNote,
    IonHeader,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonButtons,
    IonButton,
    IonMenuButton,
    IonImg
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, bookmarkSharp, shareSocialOutline, shareSocialSharp, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './MenuApp.css';



interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
}

const appPages: AppPage[] = [
    {
        title: 'Share',
        url: '',
        iosIcon: shareSocialOutline,
        mdIcon: shareSocialSharp
    },
    {
        title: 'Report',
        url: '',
        iosIcon: warningOutline,
        mdIcon: warningSharp
    },
    {
        title: 'Favorite',
        url: '',
        iosIcon: bookmarkOutline,
        mdIcon: bookmarkSharp
    },
];

const Menu: React.FC = () => {
    const location = 'useLocation()';

    return (

        <IonContent>
            <IonList id="categories-list">
                <IonListHeader>Categories</IonListHeader>
                {appPages.map((appPage, index) => {
                    return (
                        <IonMenuToggle key={index} autoHide={false}>
                            <IonItem
                                className={location === appPage.url ? 'selected' : ''}
                                routerLink={appPage.url}
                                routerDirection="forward"
                                lines="none"
                                detail={false}>
                                <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                                <IonLabel>{appPage.title}</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                    );
                })}
            </IonList>
        </IonContent>

    );
};

export default Menu;
