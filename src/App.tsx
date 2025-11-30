import { useState } from 'react'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Button } from "./components/ui/button"
import {BrowserRouter ,Route,Routes} from "react-router-dom"
import Layout from './layout'
import { ThemeProvider } from "./context/theme-provider";
import WeatherDashboard from './components/ui/WeatherDashboard';
import CityPage from "./components/ui/CityPage"
function App() {

  const queryClient = new QueryClient()

  return (
   <QueryClientProvider client={queryClient}>
    <BrowserRouter>
<ThemeProvider defaultTheme='dark'>
      <Layout> 
        <Routes>
          <Route path ='/' element = {<WeatherDashboard/>}></Route>
          <Route path ='/city/:cityname' element = {<CityPage/>}></Route>
        </Routes>
      </Layout>
</ThemeProvider>
   </BrowserRouter>
   </QueryClientProvider>
  )
}

export default App
