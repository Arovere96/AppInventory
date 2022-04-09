import {
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButton,
  IonItem,
  IonSearchbar,
  IonList,
  IonBackButton,
  IonButtons
} from "@ionic/react";

import React, { useState, useEffect } from "react";
import './SearchPage.css';
export const SEARCH = [
  {
    title: "ABCya",
    url: '/page/apps2/ABCya',
  },
  {
    title: "ActionBound",
    url: '/page/apps2/ActionBound',
  },
  {
    title: "Bitmoji",
    url: '/page/apps2/Bitmoji',
  },
  {
    title: "Desmos",
    url: '/page/apps2/Desmos',
  },
  {
    title: "Duolingo",
    url: '/page/apps2/Duolingo',
  },
  {
    title: "EasyBib",
    url: '/page/apps2/EasyBib',
  },
  {
    title: "JellyCam",
    url: '/page/apps2/JellyCam',
  },
  {
    title: "Loopy",
    url: '/page/apps2/Loopy',
  },
  {
    title: "Pixton",
    url: '/page/apps2/Pixton',
  },
  {
    title: "Quizlet",
    url: '/page/apps2/Quizlet',
  },
  {
    title: "Tinytap",
    url: '/page/apps2/Tinytap',
  },
  {
    title: "Cram",
    url: '/page/apps2/Cram',
  },
  {
    title: "Studyblue",
    url: '/page/apps2/Studyblue',
  },
  {
    title: "WordsTool",
    url: '/page/apps2/WordsTool',
  },
  {
    title: "TimeToast",
    url: '/page/apps2/TimeToast',
  },
];

export const Search: React.FC = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSearch, setFilteredSearch] = useState([
    {
      title: "",
      url: "",
    }])
  /*
  la ricerca è case-sensitive senza i .toLowerCase
  */
  useEffect(() => {
    let tempSearchResult = SEARCH.filter(ele => ele.title.toLowerCase().includes(searchQuery.toLowerCase()))
    setFilteredSearch([...tempSearchResult])
  }, [searchQuery])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonBackButton />
          </IonButtons>
          <IonTitle>Search</IonTitle>
          <IonButtons slot='end'>
            <IonButton color="primary" routerLink="/Advanced search">
              Advanced Search
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar value={searchQuery} onIonChange={e => setSearchQuery(e.detail.value!)} />
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {filteredSearch.map((search, index) => (
            <IonItem routerLink={search.url} key={index + 1}>{index}.    {search.title}</IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Search;