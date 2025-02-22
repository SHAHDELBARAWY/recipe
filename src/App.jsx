import { createBrowserRouter, createHashRouter, HashRouter, RouterProvider } from "react-router-dom"
import Layout from "./components/Layout.jsx";
import Meals from "./components/Meals.jsx";
import Area from "./components/Area.jsx";
import Ingredients from "./components/Ingredients.jsx";
import MealDetails from "./components/MealDetails.jsx";

export default function App() {
  const routes = createHashRouter([
    {path:'/',element:<Layout></Layout>,children:[
      {index:true,element:<Meals></Meals>},
      {path:'/mealdetails',element:<MealDetails></MealDetails>},
      {path:'/area',element:<Area></Area>},
      {path:'/ingredients',element:<Ingredients></Ingredients>},
    ]}
  ])
  return (
    <>
      <RouterProvider router={routes}/>
    </>
  )
}