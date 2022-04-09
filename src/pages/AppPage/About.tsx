import {
    IonButtons,
    IonBackButton,
    IonContent,
    IonGrid,
    IonHeader,
    IonPage,
    IonRow,
    IonCol,
    IonText,
    IonTitle,
    IonToolbar
} from '@ionic/react';

import './About.css';
import ReactPlayer from 'react-player'
import { Appp } from '../../models/App';

const About: React.FC<{ InspectedApp: Appp }> = props => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot='start'>
                        <IonBackButton />
                    </IonButtons>
                    <IonTitle>About {props.InspectedApp.name}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonGrid class="about-grid">
                    <IonRow>
                        <IonCol>
                            <IonTitle> Video Presentazione</IonTitle>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <div className="wrapper">
                                <ReactPlayer
                                    width='100%'
                                    height='100%'
                                    className="player" url='https://www.youtube.com/watch?v=KI1YFEH23lc' />
                            </div>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol class="cell-class">
                            <p>Categories</p>
                        </IonCol>
                        <IonCol size="8" class="cell-class">
                            <p>
                                {props.InspectedApp.categories.map((Category, index) => {

                                    if (index == props.InspectedApp.categories.length - 1) {
                                        return (
                                            <IonText key={index}>{Category} </IonText>
                                        )
                                    } else {
                                        return (
                                            <IonText key={index}>{Category}, </IonText>
                                        )
                                    }
                                })}
                            </p>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol class="cell-class">
                            <p>Tags</p>
                        </IonCol>
                        <IonCol size="8" class="cell-class">
                            <p>
                                {props.InspectedApp.tags.map((tag, index) => {

                                    if (index == props.InspectedApp.tags.length - 1) {
                                        return (
                                            <IonText key={index}>{tag} </IonText>
                                        )
                                    } else {
                                        return (
                                            <IonText key={index}>{tag}, </IonText>
                                        )
                                    }
                                })}
                            </p>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol class="cell-class">
                            <p>Typology</p>
                        </IonCol>
                        <IonCol size="8" class="cell-class">
                            <p> {props.InspectedApp.typology}</p>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol class="cell-class">
                            <p>Sign-up to create products</p>
                        </IonCol>
                        <IonCol size="8" class="cell-class">
                            <p> {props.InspectedApp.Sign_up_to_create_products}</p>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol class="cell-class">
                            <p>Sign-up to access artefacts</p>
                        </IonCol>
                        <IonCol size="8" class="cell-class">
                            <p> {props.InspectedApp.Sign_up_to_access_artefacts}</p>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol class="cell-class">
                            <p>Registration notes</p>
                        </IonCol>
                        <IonCol size="8" class="cell-class">
                            <p> {props.InspectedApp.Registration_notes}</p>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol class="cell-class">
                            <p>Plan & Pricing</p>
                        </IonCol>
                        <IonCol size="8" class="cell-class">
                            <p><a href={props.InspectedApp.Plan_and_Pricing}> check </a> </p>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol class="cell-class">
                            <p>Free plan limits</p>
                        </IonCol>
                        <IonCol size="8" class="cell-class">
                            <p> {props.InspectedApp.Free_plan_limits}</p>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol class="cell-class">
                            <p>Catalog of user contents</p>
                        </IonCol>
                        <IonCol size="8" class="cell-class">
                            <p> {props.InspectedApp.Catalog_of_user_contents}</p>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol class="cell-class">
                            <p>Available in Italian language</p>
                        </IonCol>
                        <IonCol size="8" class="cell-class">
                            <p> {props.InspectedApp.Available_in_Italian_language}</p>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol class="cell-class">
                            <p>Advertisement</p>
                        </IonCol>
                        <IonCol size="8" class="cell-class">
                            <p> {props.InspectedApp.Advertisement}</p>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol class="cell-class">
                            <p>Complexity (1-10)</p>
                        </IonCol>
                        <IonCol size="8" class="cell-class">
                            <p>{props.InspectedApp.Complexity}</p>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol class="cell-class">
                            <p>Bloom’s levels</p>
                        </IonCol>
                        <IonCol size="8" class="cell-class">
                            <p>
                                {props.InspectedApp.Bloom_level.map((bloom, index) => {

                                    if (index == props.InspectedApp.Bloom_level.length - 1) {
                                        return (
                                            <IonText key={index}>{bloom} </IonText>
                                        )
                                    } else {
                                        return (
                                            <IonText key={index}>{bloom}, </IonText>
                                        )
                                    }
                                })}
                            </p>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol class="cell-class">
                            <p>Documentation</p>
                        </IonCol>
                        <IonCol size="8" class="cell-class">
                            <p>
                                {props.InspectedApp.Documentation.map((doc, index) => {
                                    if ((index % 2) == 0) {
                                        return (
                                            <IonText key={index}>{doc} </IonText>
                                        )
                                    } else {
                                        if (index == props.InspectedApp.Documentation.length - 1) {
                                            return (
                                                <a key={index} href={doc}> Link </a>
                                            )
                                        } else {
                                            return (
                                                <a key={index} href={doc}> Link, </a>
                                            )
                                        }
                                    }
                                })}
                            </p>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol class="cell-class">
                            <p>Product Example</p>
                        </IonCol>
                        <IonCol size="8" class="cell-class">
                            <p>
                                {props.InspectedApp.Product_examples.map((product, index) => {

                                    if ((index % 2) == 0) {
                                        return (
                                            <IonText key={index}>{product} </IonText>
                                        )
                                    } else {
                                        if (index == props.InspectedApp.Product_examples.length - 1) {
                                            return (
                                                <a key={index} href={product}> Example </a>
                                            )
                                        } else {
                                            return (
                                                <a key={index} href={product}> Example, </a>
                                            )
                                        }
                                    }
                                })}
                            </p>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol class="cell-class">
                            <p>Specific subjects</p>
                        </IonCol>
                        <IonCol size="8" class="cell-class">
                            <p>
                                {props.InspectedApp.Specific_subjects.map((subject, index) => {

                                    if (index == props.InspectedApp.Specific_subjects.length - 1) {
                                        return (
                                            <IonText key={index}>{subject} </IonText>
                                        )
                                    } else {
                                        return (
                                            <IonText key={index}>{subject}, </IonText>
                                        )
                                    }
                                })}
                            </p>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <IonTitle> Video Tutorial</IonTitle>
                        </IonCol>
                    </IonRow>

                    <IonRow>
                        <IonCol>
                            <div className="wrapper">
                                <ReactPlayer
                                    width='100%'
                                    height='100%'
                                    className="player"
                                    url='https://www.youtube.com/watch?v=rUPE1ej3pjI#action=share' />
                            </div>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default About;