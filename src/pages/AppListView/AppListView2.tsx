import { IonPage } from '@ionic/react';
import { useParams } from 'react-router';
export { }

const AppListView2: React.FC = () => {
    const { name } = useParams<{ name: string; }>();
    console.log({ name });
    var name2: string;
    name2 = "/page/AppListView/" + name;
    console.log(name2);
    { window.location.replace(name2) }
    return (
        <IonPage >
        </IonPage>
    );
};

export default AppListView2;