/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Pricing } from './pages/Pricing';
import { Booking } from './pages/Booking';
import { Consultancy } from './pages/Consultancy';
import { Care } from './pages/Care';
import { ChatAI } from './pages/ChatAI';
import { AboutMe } from './pages/AboutMe';
import { AppRoute } from './types';

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route
            path={AppRoute.WELCOME}
            element={<Navigate to={AppRoute.DASHBOARD} replace />}
          />
          <Route path={AppRoute.DASHBOARD} element={<Dashboard />} />
          <Route path={AppRoute.PRICING} element={<Pricing />} />
          <Route path={AppRoute.BOOKING} element={<Booking />} />
          <Route path={AppRoute.CONSULTANCY} element={<Consultancy />} />
          <Route path={AppRoute.CARE} element={<Care />} />
          <Route path={AppRoute.CHAT} element={<ChatAI />} />
          <Route path={AppRoute.ABOUT_ME} element={<AboutMe />} />
          <Route
            path="*"
            element={<Navigate to={AppRoute.DASHBOARD} replace />}
          />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
