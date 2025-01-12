import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './PublicGreeting.jsx'
import DisplayFavoriteFood from './FavoriteFood.jsx'
import ConvertHtmlJsx from "./convertHtml.jsx";
// import RenderListOfElements from "./RenderListOfElements.jsx"
// import {ListItem, List, DefineAnimalListApp } from "./RenderListOfComponent.jsx"
import DefineAnimalListApp from './RenderListOfComponent'
import RenderButtonApp from './ButtonComponent.jsx'
import List from "./ConditionallyRenderUi.jsx";
import Gallery from "./Gallery.jsx";
import Form from './Form.jsx'
import FeedbackFrom from "./Feedback.jsx";
import BackgroundApp from './BackgroundColor.jsx'
import Person from './PersonApp.jsx'
import Clock from './Clock.jsx'
import AdditionDisplay from "./AdditionDisplay.jsx"
import EffectIsNotForEvent from "./EffectIsNotForEvent.jsx"




createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Greeting />
    <App />

    <DisplayFavoriteFood />
    <ConvertHtmlJsx />
    <DefineAnimalListApp />
    <List />
    <RenderButtonApp />
    <Gallery />
    <Form />
    <FeedbackFrom />
    <BackgroundApp />
    <Person />
    <Clock />
<AdditionDisplay/>
<EffectIsNotForEvent />
  </StrictMode>

);
