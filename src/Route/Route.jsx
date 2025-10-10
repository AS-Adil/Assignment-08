import React from 'react';
import { createBrowserRouter } from "react-router";
import App from '../App';
import MainLayout from '../Layout/MainLayout';
import Home from '../pages/Home';
import Apps from '../pages/Apps';
import Installations from '../pages/Installations';
import AppDetails from '../pages/AppDetails';
import InvalidRoute from '../Components/InvalidRoute';

const router = createBrowserRouter([

  {
    path:"/",
    Component:MainLayout,
    errorElement:<InvalidRoute></InvalidRoute>,
    children:[
        {
            index:true,
            Component:Home
        },
        {
            path:"apps",
            Component:Apps
        },
        {
            path:"installations",
            Component:Installations
        },
        {
          path:"appDetails/:id",
          Component:AppDetails
        }
    ]
  }

])

export default router;