import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home/Home';
import Home2 from './pages/Home/Home2';
import SearchPage from './pages/Search/SearchPage';
import AdvancedSearch from './pages/Search/AdvancedSearch';
import AppPage from './pages/AppPage/AppPage';
import AppPage2 from './pages/AppPage/AppPage2';
import { Appp } from './models/App';
import About from './pages/AppPage/About';
import Creating from './pages/CategoryView/Creating';
import Creating2 from './pages/CategoryView/Creating2';
import Aggregating from './pages/CategoryView/Aggregating';
import Aggregating2 from './pages/CategoryView/Aggregating2';
import Interacting from './pages/CategoryView/Interacting&Organizating';
import Interacting2 from './pages/CategoryView/Interacting&Organizating2';
import AppListView from './pages/AppListView/AppListView';
import AppListView2 from './pages/AppListView/AppListView2';
import { AppDbExample } from './components/Apps/AppDbExample';

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

/* Theme variables */
import './theme/variables.css';

var b: Appp;
setupIonicReact();

/*function needed to pass the correct app to the app page */
function selectAppForPage(stuff: string) {
  AppDbExample.map((app, index) => {
    const v = "/page/apps/" + app.name;
    if (v == stuff) {
      b = app;
    }
  })
  return b;
};
/*function needed to pass the correct app to the about page */
function selectAppForAbout(stuff: string) {
  AppDbExample.map((app, index) => {
    const v = "/About/" + app.name;
    if (v == stuff) {
      b = app;
    }
  })
  return b;
};

/*router to handle the movement between pages */
/*the jumps to Creating2 and than back to Creating are needed otherwise the menun breaks when revisiting one of the category pages */
const App: React.FC = () => (

  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet id="main">
        <Route exact path="/Home">
          <Home AppLists={AppDbExample} />
        </Route>
        <Route exact path="/Home2">
          <Home2 />
        </Route>
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/page/apps/:name" render={props => <AppPage InspectedApp={selectAppForPage(props.match.url)} />} />
        <Route exact path="/page/apps2/:name">
          <AppPage2 />
        </Route>
        <Route path="/page/CategoryView/Creating2">
          <Creating2 />
        </Route>
        <Route path="/page/CategoryView/Creating">
          <Creating />
        </Route>
        <Route path="/page/CategoryView/Aggregating">
          <Aggregating />
        </Route>
        <Route path="/page/CategoryView/Aggregating2">
          <Aggregating2 />
        </Route>
        <Route path="/page/CategoryView/Interacting & Organizating">
          <Interacting />
        </Route>
        <Route path="/page/CategoryView/Interacting & Organizating2">
          <Interacting2 />
        </Route>
        <Route exact path="/page/AppListView2/:name">
          <AppListView2 />
        </Route>
        <Route exact path="/page/AppListView/:name">
          <AppListView />
        </Route>
        <Route exact path="/SearchPage">
          <SearchPage />
        </Route>
        <Route exact path="/About/:name" render={props => <About InspectedApp={selectAppForAbout(props.match.url)} />} />
        <Route exact path="/Advanced Search">
          <AdvancedSearch />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
