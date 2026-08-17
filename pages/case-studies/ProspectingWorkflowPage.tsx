import React from 'react';
import CaseStudyLayout from '../../components/CaseStudyLayout';

const ProspectingWorkflowPage: React.FC = () => {
    const caseStudyData = {
        title: "AI-Assisted Prospecting Workflow",
        industry: "Business Services",
        problem: "A small business-services sales team lacked the capacity to consistently prospect, nurture, and track leads while keeping high-value conversations human-led.",
        approach: (
            <div className="space-y-4">
                <p>ArioLabs built a connected sales-support workflow designed to:</p>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Prioritize Leads:</strong> Analyze incoming records and surface promising prospects for staff review.</li>
                    <li><strong>Run Approved Outreach:</strong> Send configured email sequences using the team’s agreed messages and timing.</li>
                    <li><strong>Connect Scheduling and CRM:</strong> Record booked calls and update pipeline status in the existing tools.</li>
                    <li><strong>Support Human Follow-up:</strong> Draft context-aware follow-ups for staff to review and send.</li>
                </ul>
            </div>
        ),
        solution: "The workflow handled repeatable top-of-funnel work, including prospect prioritization, approved communications, scheduling, and CRM updates. The sales team kept ownership of qualification, conversations, and closing decisions.",
        results: [
            "The earlier project summary reported two B2B clients closed within two weeks",
            "Lead activity and scheduling were recorded in one pipeline",
            "Human staff focused on warm conversations and final decisions"
        ],
        highlight: "Automation supported the sales team without replacing human qualification or relationship work.",
        tools: ["AI Lead Scoring", "Automated Email Platform", "CRM Integration", "Calendly API", "Generative AI"]
    };

    return <CaseStudyLayout {...caseStudyData} />;
};

export default ProspectingWorkflowPage;
