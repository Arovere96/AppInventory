import {
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonPage,
    IonItem,
    IonSearchbar,
    IonBackButton,
    IonButtons,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    IonCheckbox,
    IonText,
    IonRange,
    IonIcon,
    IonBadge,
    IonRadioGroup,
    IonRadio,
    IonLabel
} from "@ionic/react";

import React, { useState } from "react";
import './AdvancedSearch.css';
import { star, starOutline } from 'ionicons/icons';
export const SEARCH = [
    {
        title: "ABCya",
        url: '/page/apps/ABCya',
    },
    {
        title: "Actionboound",
        url: '/page/apps/Actionboound',
    },
    {
        title: "Binumi",
        url: '/page/apps/Binumi',
    },
    {
        title: "Canva",
        url: '/page/apps/Canva',
    },
    {
        title: "Enwoven",
        url: '/page/apps/Enwoven',
    },
    {
        title: "Focusky",
        url: '/page/apps/Focusky',
    },
    {
        title: "Mindmeister",
        url: '/page/apps/Mindmeister',
    },
    {
        title: "Twine",
        url: '/page/apps/Twine',
    },
    {
        title: "Visme",
        url: '/page/apps/Visme',
    },
    {
        title: "Wizer",
        url: '/page/apps/Wizer',
    },
];
/**
 * name
 */

export const AdvancedSearch: React.FC = () => {
    const [valueScore, setValueScore] = useState(0);
    const [rangeValue, setRangeValue] = useState<{
        lower: number;
        upper: number;
    }>({ lower: 1, upper: 10 });

    const [searchQuery, setSearchQuery] = useState('');

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>Advanced Search</IonTitle>
                </IonToolbar>

            </IonHeader>
            <IonContent className="ion-padding">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonSearchbar value={searchQuery} onIonChange={e => setSearchQuery(e.detail.value!)} />
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonItem className="subTitle">Catgories</IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol size="auto">
                            <IonItem lines='none'>
                                <IonCheckbox color="primary" checked={false} />
                                <IonText className="text-margin">Creating</IonText>
                            </IonItem>
                        </IonCol>
                        <IonCol size="auto">
                            <IonItem lines='none'>
                                <IonCheckbox color="primary" checked={false} />
                                <IonText className="text-margin">Aggregating</IonText>
                            </IonItem>
                        </IonCol>
                        <IonCol size="auto">
                            <IonItem lines='none'>
                                <IonCheckbox color="primary" checked={false} />
                                <IonText className="text-margin">Interacting & Organizating</IonText>
                            </IonItem>
                        </IonCol>
                        <IonCol size="auto">
                            <IonItem lines='none'>
                                <IonCheckbox color="primary" checked={false} />
                                <IonText className="text-margin">Other</IonText>
                            </IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonItem className="subTitle">Typology</IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol size="auto">
                            <IonItem lines='none'>
                                <IonCheckbox color="primary" checked={false} />
                                <IonText className="text-margin">Web App</IonText>
                            </IonItem>
                        </IonCol>
                        <IonCol size="auto">
                            <IonItem lines='none'>
                                <IonCheckbox color="primary" checked={false} />
                                <IonText className="text-margin">Flash App</IonText>
                            </IonItem>
                        </IonCol>
                        <IonCol size="auto">
                            <IonItem lines='none'>
                                <IonCheckbox color="primary" checked={false} />
                                <IonText className="text-margin">IOS App</IonText>
                            </IonItem>
                        </IonCol>
                        <IonCol size="auto">
                            <IonItem lines='none'>
                                <IonCheckbox color="primary" checked={false} />
                                <IonText className="text-margin">Windows Mobile App</IonText>
                            </IonItem>
                        </IonCol>
                        <IonCol size="auto">
                            <IonItem lines='none'>
                                <IonCheckbox color="primary" checked={false} />
                                <IonText className="text-margin">Windows Deskotop App</IonText>
                            </IonItem>
                        </IonCol>
                        <IonCol size="auto">
                            <IonItem lines='none'>
                                <IonCheckbox color="primary" checked={false} />
                                <IonText className="text-margin">MacOS App</IonText>
                            </IonItem>
                        </IonCol>
                        <IonCol size="auto">
                            <IonItem lines='none'>
                                <IonCheckbox color="primary" checked={false} />
                                <IonText className="text-margin">Linus App</IonText>
                            </IonItem>
                        </IonCol>
                        <IonCol size="auto">
                            <IonItem lines='none'>
                                <IonCheckbox color="primary" checked={false} />
                                <IonText className="text-margin">Chrome extension</IonText>
                            </IonItem>
                        </IonCol>
                        <IonCol size="auto">
                            <IonItem lines='none'>
                                <IonCheckbox color="primary" checked={false} />
                                <IonText className="text-margin">Firefox extension</IonText>
                            </IonItem>
                        </IonCol>
                        <IonCol size="auto">
                            <IonItem lines='none'>
                                <IonCheckbox color="primary" checked={false} />
                                <IonText className="text-margin">Google app</IonText>
                            </IonItem>
                        </IonCol>
                        <IonCol size="auto">
                            <IonItem lines='none'>
                                <IonCheckbox color="primary" checked={false} />
                                <IonText className="text-margin">Other</IonText>
                            </IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonItem className="subTitle">Sign-up to access products</IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonRadioGroup value="products">
                            <IonCol>
                                <IonItem lines="none">
                                    <IonLabel>Compulsory</IonLabel>
                                    <IonRadio slot="start" color="tertiary" value="compulsory"></IonRadio>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem lines="none">
                                    <IonLabel>Optional</IonLabel>
                                    <IonRadio slot="start" color="tertiary" value="optioinal"></IonRadio>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem lines="none">
                                    <IonLabel>No Registration</IonLabel>
                                    <IonRadio slot="start" color="tertiary" value="no registration"></IonRadio>
                                </IonItem>
                            </IonCol>
                        </IonRadioGroup>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonItem className="subTitle">Sign-up to access artefacts</IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonRadioGroup value="catalog">
                            <IonCol>
                                <IonItem lines="none">
                                    <IonLabel>Compulsory</IonLabel>
                                    <IonRadio slot="start" color="tertiary" value="compulsory"></IonRadio>
                                </IonItem>
                            </IonCol>

                            <IonCol>
                                <IonItem lines="none">
                                    <IonLabel>No Registration</IonLabel>
                                    <IonRadio slot="start" color="tertiary" value="no registration"></IonRadio>
                                </IonItem>
                            </IonCol>
                        </IonRadioGroup>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonItem className="subTitle">Catalog of user content</IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonRadioGroup value="catalog">
                            <IonCol>
                                <IonItem lines="none">
                                    <IonLabel>Public</IonLabel>
                                    <IonRadio slot="start" color="tertiary" value="public"></IonRadio>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem lines="none">
                                    <IonLabel>Protected</IonLabel>
                                    <IonRadio slot="start" color="tertiary" value="protected"></IonRadio>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem lines="none">
                                    <IonLabel>No</IonLabel>
                                    <IonRadio slot="start" color="tertiary" value="no"></IonRadio>
                                </IonItem>
                            </IonCol>
                        </IonRadioGroup>
                    </IonRow>


                    <IonRow>
                        <IonCol>
                            <IonItem className="subTitle"> Language</IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonItem lines='none'>
                                <IonCheckbox color="primary" checked={false} />
                                <IonText className="text-margin">Italiano</IonText>
                            </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonItem lines='none'>
                                <IonCheckbox color="primary" checked={false} />
                                <IonText className="text-margin">English</IonText>
                            </IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonItem className="subTitle">Advertisement</IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonRadioGroup value="advertisement">
                            <IonCol>
                                <IonItem lines="none">
                                    <IonLabel>Yes</IonLabel>
                                    <IonRadio slot="start" color="tertiary" value="yes"></IonRadio>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem lines="none">
                                    <IonLabel>No</IonLabel>
                                    <IonRadio slot="start" color="tertiary" value="no"></IonRadio>
                                </IonItem>
                            </IonCol>
                        </IonRadioGroup>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonItem className="subTitle">Price</IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonRadioGroup value="price">
                            <IonCol>
                                <IonItem lines="none">
                                    <IonLabel>Paid</IonLabel>
                                    <IonRadio slot="start" color="tertiary" value="paid"></IonRadio>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem lines="none">
                                    <IonLabel>Free</IonLabel>
                                    <IonRadio slot="start" color="tertiary" value="free"></IonRadio>
                                </IonItem>
                            </IonCol>
                        </IonRadioGroup>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonItem className="subTitle">Complexity</IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonBadge>From: {rangeValue.lower}</IonBadge>
                                <IonRange dualKnobs={true} snaps pin={true} min={1} max={10} onIonChange={e => setRangeValue(e.detail.value as any)} >
                                </IonRange>
                                <IonBadge>To: {rangeValue.upper}</IonBadge>
                            </IonItem>
                        </IonCol>
                    </IonRow>


                    <IonRow>
                        <IonCol>
                            <IonItem className="subTitle">Bloom's Level</IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonItem lines='none'>
                                <IonCheckbox color="primary" checked={false} />
                                <IonText className="text-margin">Remember</IonText>
                            </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonItem lines='none'>
                                <IonCheckbox color="primary" checked={false} />
                                <IonText className="text-margin">Understand</IonText>
                            </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonItem lines='none'>
                                <IonCheckbox color="primary" checked={false} />
                                <IonText className="text-margin">Apply</IonText>
                            </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonItem lines='none'>
                                <IonCheckbox color="primary" checked={false} />
                                <IonText className="text-margin">Analize</IonText>
                            </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonItem lines='none'>
                                <IonCheckbox color="primary" checked={false} />
                                <IonText className="text-margin">Evaluate</IonText>
                            </IonItem>
                        </IonCol>
                        <IonCol>
                            <IonItem lines='none'>
                                <IonCheckbox color="primary" checked={false} />
                                <IonText className="text-margin">Create</IonText>
                            </IonItem>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonItem className="subTitle">Availability</IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonRadioGroup value="availability">
                            <IonCol>
                                <IonItem lines="none">
                                    <IonLabel>App Active</IonLabel>
                                    <IonRadio slot="start" color="tertiary" value="active"></IonRadio>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem lines="none">
                                    <IonLabel>App Dismissed</IonLabel>
                                    <IonRadio slot="start" color="tertiary" value="dismissed"></IonRadio>
                                </IonItem>
                            </IonCol>
                        </IonRadioGroup>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonItem className="subTitle">Minimum Score</IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonRange min={0} max={5} pin={true} snaps value={valueScore} onIonChange={e => setValueScore(e.detail.value as number)} >
                                    <IonIcon slot="start" size="small" icon={starOutline} />
                                    <IonIcon slot="end" icon={star} />
                                </IonRange>
                                <IonBadge>{valueScore}</IonBadge>
                            </IonItem>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol className="ion-text-end">
                            <IonButton color="primary">
                                Search
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton color="primary"  >
                                Reset
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default AdvancedSearch;