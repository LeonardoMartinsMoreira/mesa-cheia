import React from 'react'
import ReactDOM from 'react-dom/client'
import { Outlet, RouterProvider } from '@tanstack/react-router'

import Home from './routes/index'
import About from './routes/about'
import { RootRoute, Route, Router } from '@tanstack/react-router'

const rootRoute = new RootRoute({
  component: () => (
    <div>
      <Outlet />
    </div>
  ),
})

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
})

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
})

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute])

const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
