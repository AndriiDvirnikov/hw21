
import AboutPage from "../Components/pages/About";
import AcountPage from "../Components/pages/Acount";
import ContactsPage from "../Components/pages/Contacts";
import HomePage from "../Components/pages/Home";
import PhotoPage from "../Components/pages/Photo";

export const appRoutes = [
    {
        path :'/',
        exact: true,
        component:HomePage
    },
    {
        path :'/about',
      
        component:AboutPage
    },
    {
        path :'/contacts',
        
        component:ContactsPage
    },
    {
        path :'/photos',
        
        component:PhotoPage
    },
    {
        path :'/acount',
        
        component:AcountPage
    }

];