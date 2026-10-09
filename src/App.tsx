/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Pricing } from './pages/Pricing';
import { Booking } from './pages/Booking';
import { Consultancy } from './pages/Consultancy';
import { Care } from './pages/Care';
import { ChatAI } from './pages/ChatAI';
import { AboutMe } from './pages/AboutMe';
import { AppRoute } from './types';

function HashCleaner() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // If user enters with legacy /#/ or /#/dashboard, seamlessly normalize to clean URL
    if (window.location.hash) {
      const cleanPath = window.location.hash
        .replace(/^#\/?/, '/')
        .replace(/^\/dashboard\/?$/, '/')
        .replace(/^\/home\/?$/, '/');

      window.history.replaceState(null, '', cleanPath || '/');
      navigate(cleanPath || '/', { replace: true });
    }
  }, [navigate]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <HashCleaner />
      <Layout>
        <Routes>
          {/* Clean Root Landing Page */}
          <Route path={AppRoute.HOME} element={<Dashboard />} />

          {/* Clean User-Friendly Routes */}
          <Route path={AppRoute.PRICING} element={<Pricing />} />
          <Route path={AppRoute.BOOKING} element={<Booking />} />
          <Route path={AppRoute.CONSULTANCY} element={<Consultancy />} />
          <Route path={AppRoute.CARE} element={<Care />} />
          <Route path={AppRoute.ABOUT_ME} element={<AboutMe />} />
          <Route path={AppRoute.CHAT} element={<ChatAI />} />

          {/* Legacy redirects away from technical terms like 'dashboard' */}
          <Route
            path="/dashboard"
            element={<Navigate to={AppRoute.HOME} replace />}
          />
          <Route
            path="/home"
            element={<Navigate to={AppRoute.HOME} replace />}
          />

          {/* Catch-all fallback to root */}
          <Route
            path="*"
            element={<Navigate to={AppRoute.HOME} replace />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
