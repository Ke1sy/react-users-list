import React, {ComponentType} from "react";

const Services = React.lazy(() => import(/* webpackChunkName: "Services Page" */"./components/Services/Services"));
const Clients = React.lazy(() => import(/* webpackChunkName: "Clients Page" */"./components/Clients/Clients"));
const About = React.lazy(() => import(/* webpackChunkName: "About Page" */"./components/About/About"));
const Users = React.lazy(() => import(/* webpackChunkName: "Users Page" */"./components/Users/UsersContainer"));
const Contacts = React.lazy(() => import(/* webpackChunkName: "Users Page" */"./components/Contacts/Contacts"));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound" */"./components/NotFound/NotFound"));

type RouteValueType = {
    path: string,
    redirect?: (hasRedirect: boolean) => string,
    component?: ComponentType,
    getPath?: any
    exact?: boolean
}

type RouteType = {
    [key: string]: RouteValueType
};

const RM: RouteType = {
    home: {
        path: '/',
        exact: true,
        redirect: () => {
            return `/users`
        },
    },

    services: {
        path: '/services',
        component: Services,
        exact: true,
    },

    clients: {
        path: '/clients',
        exact: true,
        component: Clients,
    },

    about: {
        path: '/about',
        exact: true,
        component: About,
    },

    users: {
        path: '/users',
        exact: true,
        component: Users,
    },

    contacts: {
        path: '/contacts',
        exact: true,
        component: Contacts,
    },

    notFound: {
        path: '*',
        exact: false,
        component: NotFound,
    },
};

export default RM;
