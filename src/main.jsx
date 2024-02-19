import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { MantineProvider, createTheme } from '@mantine/core'
import { Global } from '@emotion/react';
import { CharacterAnimationsProvider } from './contexts/CharacterAnimations.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={(theme) => ({
      'body':{
        width: '100vw',
        height: '100vh'
      },
      '#root': {
        width: '90%',
        height: '90%'
      }
    })}/>
   <MantineProvider 
    withGlobalStyles 
    withNormalizeCss 
   >
   <CharacterAnimationsProvider>
    <App />
   </CharacterAnimationsProvider>
   </MantineProvider>
  </React.StrictMode>,
)
