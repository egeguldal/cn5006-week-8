import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ClickCounter from './Counter'
import EmojiCounter from './EmojiCounter'
import WeatherMoodWidget from './WeatherMoodWidge'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClickCounter/>
    <EmojiCounter pic="Love"/>
    <EmojiCounter pic="Sad"/>
    <EmojiCounter pic="Like"/>
    <EmojiCounter pic="Happy"/>

    <WeatherMoodWidget weather="Sunny"/>
    <WeatherMoodWidget weather="Rainy"/>
    <WeatherMoodWidget weather="Cloudy"/>
  </StrictMode>,
)
