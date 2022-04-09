import {
    IonHeader,
    IonToolbar,
    IonItem,
    IonImg,
    IonRow,
    IonGrid,
    IonCol,
    IonMenuButton,
    IonButtons,
    IonIcon,
    IonButton,
    IonContent,
    IonLabel
} from '@ionic/react';

import './Header.css';
import { searchOutline } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

export { }

const Header: React.FC = () => {
    return (
        <IonHeader>
            <IonToolbar>
                <IonGrid>
                    <IonRow>
                        <IonCol size="2">
                            <IonButtons>
                                <IonMenuButton autoHide={false} />
                            </IonButtons>
                        </IonCol>

                        <IonCol size="8" >
                            <IonItem className="itemHeader" lines='none' routerLink="/Home2" >
                                <IonLabel>
                                    <img src={"https://drive.google.com/uc?export=view&id=1UqPbKXqo3kCrnZX4LpEvfdBoCEWTRsCj"} />
                                </IonLabel>
                            </IonItem>

                        </IonCol>
                        <IonCol size="2" class="ion-text-end">
                            <IonToolbar>
                                <IonButtons slot="end">
                                    <IonButton routerLink="/SearchPage">
                                        <IonIcon size="large" id="Search" icon={searchOutline} />
                                    </IonButton>
                                </IonButtons>
                            </IonToolbar>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;