import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import {theme} from './theme/Theme'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <ColorModeScript initialColorMode="dark" theme={theme} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
