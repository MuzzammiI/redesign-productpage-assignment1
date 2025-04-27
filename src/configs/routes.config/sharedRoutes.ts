import { lazy } from 'react'
import authRoute from './authRoute'      // Routes only for unauthorized users (e.g., sign-in, sign-up)
import othersRoute from './othersRoute'  // Additional protected routes
import sharedRoutes from './sharedRoutes' // Routes accessible to everyone (new file we created)

import type { Routes } from '@/@types/routes'

// Routes anyone can access (unauthorized users + shared routes)
export const publicRoutes: Routes = [
    ...authRoute,    // Includes sign-in, sign-up, etc.
    ...sharedRoutes  // Includes home, about, contact, etc.
]

// Routes only for logged-in (authorized) users + shared routes
export const protectedRoutes: Routes = [
    // Example routes (for demo purposes, you can remove these later)
    {
        key: 'singleMenuItem',
        path: '/single-menu-view',
        component: lazy(() => import('@/views/demo/SingleMenuView')),
        authority: [],
    },
    {
        key: 'collapseMenu.item1',
        path: '/collapse-menu-item-view-1',
        component: lazy(() => import('@/views/demo/CollapseMenuItemView1')),
        authority: [],
    },
    {
        key: 'collapseMenu.item2',
        path: '/collapse-menu-item-view-2',
        component: lazy(() => import('@/views/demo/CollapseMenuItemView2')),
        authority: [],
    },
    {
        key: 'groupMenu.single',
        path: '/group-single-menu-item-view',
        component: lazy(() => import('@/views/demo/GroupSingleMenuItemView')),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item1',
        path: '/group-collapse-menu-item-view-1',
        component: lazy(() => import('@/views/demo/GroupCollapseMenuItemView1')),
        authority: [],
    },
    {
        key: 'groupMenu.collapse.item2',
        path: '/group-collapse-menu-item-view-2',
        component: lazy(() => import('@/views/demo/GroupCollapseMenuItemView2')),
        authority: [],
    },
    // Removed duplicate '/hello' route from here since it’s already in authRoute.ts
    ...othersRoute,   // Additional protected routes
    ...sharedRoutes   // Shared routes (home, about, etc.) also available to logged-in users
]