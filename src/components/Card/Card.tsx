import {
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonCardSubtitle
} from '@ionic/react';
import './Card.css';
import 'swiper/swiper.min.css';
import '@ionic/react/css/ionic-swiper.css';
const Card: React.FC<{ link: string, title: string, subTitle: string, image: string }> = props => {
    return (
        <IonCard routerLink={props.link}>
            <IonCardTitle className="Card-ion-card-title"> {props.title}</IonCardTitle>
            <IonCardSubtitle className="Card-ion-card-subtitle"> {props.subTitle} </IonCardSubtitle>
            <IonCardContent >
                <div className="Card-ion-card-content">
                    <img className="Card-ion-img" src={props.image} />
                </div>
            </IonCardContent>
        </IonCard>
    );

};
export default Card;