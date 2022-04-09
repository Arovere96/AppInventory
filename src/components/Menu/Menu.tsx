import {
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonMenu,
    IonMenuToggle,
} from '@ionic/react';

import { archiveOutline, archiveSharp, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
    url: string;
    iosIcon: string;
    mdIcon: string;
    title: string;
}

const appPages: AppPage[] = [
    {
        title: 'Creating',
        url: '/page/CategoryView/Creating2',
        iosIcon: mailOutline,
        mdIcon: mailSharp
    },
    {
        title: 'Aggregating',
        url: '/page/CategoryView/Aggregating2',
        iosIcon: paperPlaneOutline,
        mdIcon: paperPlaneSharp
    },
    {
        title: 'Interacting & Organizating',
        url: '/page/CategoryView/Interacting & Organizating2',
        iosIcon: heartOutline,
        mdIcon: heartSharp
    },
    {
        title: 'Others',
        url: '/page/AppListView2/Others',
        iosIcon: archiveOutline,
        mdIcon: archiveSharp
    },
];

const InfoPages: AppPage[] = [
    {
        title: 'News',
        url: 'http://appinventory.uniud.it/category/newseng/',
        iosIcon: paperPlaneOutline,
        mdIcon: paperPlaneSharp
    },
    {
        title: 'The Project',
        url: 'http://appinventory.uniud.it/the-project/',
        iosIcon: heartOutline,
        mdIcon: heartSharp
    },
    {
        title: 'Development',
        url: 'http://appinventory.uniud.it/development/',
        iosIcon: archiveOutline,
        mdIcon: archiveSharp
    },
    {
        title: 'Doc & Papers',
        url: 'http://appinventory.uniud.it/doc-papers/',
        iosIcon: trashOutline,
        mdIcon: trashSharp
    },
    {
        title: 'About us',
        url: 'http://appinventory.uniud.it/about-us/',
        iosIcon: warningOutline,
        mdIcon: warningSharp
    }
];

const Menu: React.FC = () => {
    const location = 'useLocation()';

    return (
        <IonMenu contentId="main" type="overlay" menuId="Menu" >
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

                <IonList id="info-list">
                    <IonListHeader>Info</IonListHeader>
                    {InfoPages.map((infoPage, index) => {
                        return (
                            <IonMenuToggle key={index} autoHide={false}>
                                <IonItem onClick={() => {
                                    window.open(infoPage.url, '_blank');
                                }}
                                    className={location === infoPage.url ? 'selected' : ''}
                                    routerDirection="none"
                                    lines="none"
                                    detail={false}>
                                    <IonIcon slot="start" ios={infoPage.iosIcon} md={infoPage.mdIcon} />
                                    <IonLabel>{infoPage.title}</IonLabel>
                                </IonItem>
                            </IonMenuToggle>
                        );
                    })}
                </IonList>
            </IonContent>
        </IonMenu>
    );
};

export default Menu;
