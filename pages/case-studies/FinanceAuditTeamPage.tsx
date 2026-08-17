
import React from 'react';
import CaseStudyLayout from '../../components/CaseStudyLayout';

const FinanceAuditTeamPage: React.FC = () => {
    const caseStudyData = {
        title: "55-Location Audit Workflow",
        industry: "Accounting & Compliance",
        problem: "An accounting audit team received weekly and batch financial reports from 55 locations through a fragmented manual process. Formats varied, consolidation was slow, and exceptions were difficult to trace.",
        approach: (
             <div className="space-y-4">
                <p>ArioLabs designed and implemented a centralized data collection and processing system. Our approach included:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Google Apps Script Workflow:</strong> A robust backend script was created to handle all data logic, validation, and processing.</li>
                    <li><strong>Standardized Form Input:</strong> A user-friendly form was deployed to ensure all 55 locations submitted data in a consistent format.</li>
                    <li><strong>Live Currency Conversion:</strong> An API was integrated to perform live CAD to USD conversions, eliminating manual calculations.</li>
                    <li><strong>Automated Data Aggregation:</strong> The system automatically collected submissions and aggregated them into master reports.</li>
                </ul>
            </div>
        ),
        solution: "The new system automatically validated incoming data, performed currency conversions in real-time, and generated standardized reports. We also integrated an AI analysis layer for accuracy control, flagging potential anomalies for human review. This completely replaced the manual submission and consolidation process.",
        results: [
            "55 locations moved into one standardized submission path",
            "Currency conversion and report aggregation ran automatically",
            "Potential anomalies were routed to people for review"
        ],
        highlight: "The workflow automated repeatable processing while keeping sensitive audit judgment with the team.",
        tools: ["Google Apps Script", "Google Forms", "Google Sheets", "Currency Conversion API", "AI Data Analysis"]
    };

    return <CaseStudyLayout {...caseStudyData} />;
};

export default FinanceAuditTeamPage;
