import 'react-native-gesture-handler'
import React from 'react'
import MainNavigation from './navigation/navigation'
import { Provider } from 'react-redux'
import {Provider as PaperProvider} from 'react-native-paper';
import { store } from './stores'
import { enableScreens } from 'react-native-screens'
enableScreens()

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PaperProvider>
        <MainNavigation />
        </PaperProvider>
      </Provider>
    </>
  )
}

export default App
