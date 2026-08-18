import React, { Suspense, lazy } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'));
const MediaCompanyPage = lazy(() => import('./pages/case-studies/MediaCompanyPage'));
const FinanceAuditTeamPage = lazy(() => import('./pages/case-studies/FinanceAuditTeamPage'));
const ProspectingWorkflowPage = lazy(() => import('./pages/case-studies/ProspectingWorkflowPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));
const WorkflowCallPage = lazy(() => import('./pages/WorkflowCallPage'));

const LoadingSpinner = () => <div className="flex min-h-screen items-center justify-center">Loading…</div>;

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/media-company" element={<MediaCompanyPage />} />
            <Route path="/case-studies/finance-audit-team" element={<FinanceAuditTeamPage />} />
            <Route path="/case-studies/prospecting-workflow" element={<ProspectingWorkflowPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/start" element={<WorkflowCallPage mode="inquiry" />} />
            <Route path="/book" element={<WorkflowCallPage mode="book" />} />
            <Route path="/schedule" element={<Navigate to="/book" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Layout>
    </HashRouter>
  );
}
