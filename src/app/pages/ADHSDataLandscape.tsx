import { Check } from 'lucide-react';
import { ProjectDetail } from '../components/ProjectDetail';
import { PageMeta } from '../components/PageMeta';

const workflowSteps = [
  {
    step: '1',
    activity: 'Collect program-facing information in a structured workbook',
    output: 'Completed data-entry workbook'
  },
  {
    step: '2',
    activity: 'Validate responses against reference tables and flag new values for review',
    output: 'Cleaned workbook with validation status'
  },
  {
    step: '3',
    activity: 'Prepare core tables for programs, entities, inputs, systems, products, and destinations',
    output: 'SQL-ready core import files'
  },
  {
    step: '4',
    activity: 'Import core records before relationship records so SQL can assign stable IDs',
    output: 'Updated database tables with generated IDs'
  },
  {
    step: '5',
    activity: 'Export updated IDs and map them back to relationship files',
    output: 'Relationship import files with resolved foreign keys'
  },
  {
    step: '6',
    activity: 'Load source-to-input, input-to-system, system-to-product, and product-to-destination links',
    output: 'Validated relational data landscape model'
  },
  {
    step: '7',
    activity: 'Transform relational data into graph-ready structures for Power BI',
    output: 'Node and edge tables for Sankey and network visuals'
  },
  {
    step: '8',
    activity: 'Build, validate, and publish visuals for exploration and QA',
    output: 'Dashboard logic, QA views, and handoff documentation'
  }
];

const workbookFeatures = [
  {
    label: 'Reference sheets',
    desc: 'Store approved names, IDs, and code values exported from the database.'
  },
  {
    label: 'User-facing sheets',
    desc: 'Collect data landscape information in plain language: sources, inputs, systems, products, destinations, and relationships.'
  },
  {
    label: 'Controlled lists',
    desc: 'Reduce spelling variation and encourage use of approved values while still allowing new entries for review.'
  },
  {
    label: 'Warning logic',
    desc: 'Flag values that need review before import instead of blocking staff from completing the workbook.'
  },
  {
    label: 'Helper columns',
    desc: 'Resolve IDs, convert codes, detect duplicates, and identify unresolved values automatically.'
  },
  {
    label: 'Relationship sheets',
    desc: 'Connect records in data flow order: source to input, input to system, system to product, and product to destination.'
  }
];

const importPhases = [
  {
    phase: 'Clean entry data',
    activity: 'Review workbook responses for required fields, duplicates, and blank-looking values.',
    check: 'Filter for blanks, spaces, unknowns, and unresolved comments.'
  },
  {
    phase: 'Map to database fields',
    activity: 'Convert descriptive responses into approved database columns and code values.',
    check: 'Compare each coded field against lookup tables.'
  },
  {
    phase: 'Prepare core records',
    activity: 'Create import files for unique programs, entities, inputs, systems, products, and destinations.',
    check: 'Check whether each record already exists, is new, or needs review.'
  },
  {
    phase: 'Import core records',
    activity: 'Load core files into the target database.',
    check: 'Confirm row counts and omit identity columns so SQL assigns IDs.'
  },
  {
    phase: 'Export updated IDs',
    activity: 'Export updated core tables after import.',
    check: 'Use generated IDs to replace names or temporary values in relationship files.'
  },
  {
    phase: 'Load relationships',
    activity: 'Load source-to-input, input-to-system, system-to-product, and product-to-destination links.',
    check: 'Do not load rows with missing foreign keys.'
  },
  {
    phase: 'Validate model',
    activity: 'Run counts, join checks, and sample workflow reviews.',
    check: 'Document open issues, assumptions, and records requiring follow-up.'
  }
];

const dashboardViews = [
  {
    label: 'Overview',
    desc: 'Cards, bar charts, and key counts summarizing the size and scope of the data landscape.'
  },
  {
    label: 'Combined Flow',
    desc: 'Sankey diagram and relationship table showing the end-to-end directional path from sources to outputs.'
  },
  {
    label: 'Filtered Flow',
    desc: 'Sankey view with slicers and tooltips for exploring a specific program, division, entity type, or relationship type.'
  },
  {
    label: 'Network View',
    desc: 'Network graph and connected-node table showing shared data assets and highly connected nodes.'
  },
  {
    label: 'Program-Level',
    desc: 'Drill-down view of all inputs, systems, and products associated with a single program.'
  },
  {
    label: 'QA Tables',
    desc: 'Quality assurance pages surfacing blank nodes, duplicate edges, missing endpoints, and filter anomalies.'
  }
];

const modelLayers = [
  {
    layer: 'Dimension tables',
    content: 'Unique entities, programs, inputs, systems, products, destinations, and relationship types.',
    purpose: 'Provide slicers, labels, and descriptive fields.'
  },
  {
    layer: 'Bridge tables',
    content: 'Many-to-many connections between core objects.',
    purpose: 'Preserve relational logic and support validation.'
  },
  {
    layer: 'Graph link table',
    content: 'Source node, destination node, node type, relationship label, program context, and weight.',
    purpose: 'Support Sankey, force-directed, and network visuals.'
  }
];

const skillsDemonstrated = [
  {
    skill: 'Business Analysis',
    evidence: 'Translated stakeholder-facing data flow questions into structured workbook sections.'
  },
  {
    skill: 'Data Modeling',
    evidence: 'Designed core, lookup, relationship, and reporting-oriented schema components.'
  },
  {
    skill: 'Data Engineering Support',
    evidence: 'Prepared import-ready structures and validation rules for SQL loading.'
  },
  {
    skill: 'Data Governance',
    evidence: 'Applied controlled vocabularies, audit fields, ownership fields, and review flags.'
  },
  {
    skill: 'Analytics & Visualization',
    evidence: 'Prepared graph-ready structures and Power BI concepts with Sankey, network, and QA views.'
  },
  {
    skill: 'Product Design',
    evidence: 'Designed user-friendly forms with helper columns, validation status, and controlled lists.'
  },
  {
    skill: 'Documentation',
    evidence: 'Created technical documentation for project continuity and team handoff.'
  }
];

function ADHSMethods() {
  return (
    <div className="space-y-12">
      <section>
        <h3
          style={{
            fontSize: '1.25rem',
            color: 'var(--green-dark)',
            marginBottom: '1rem',
            fontWeight: 'bold'
          }}
        >
          End-to-End Workflow
        </h3>
        <p className="text-sm text-[var(--black-dark)] mb-6 leading-relaxed">
          The project followed an eight-step pipeline from stakeholder-facing data collection
          through validated Power BI reporting, with each phase feeding directly into the next.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--green-dark)] text-white">
                <th className="text-left p-3 font-semibold">Step</th>
                <th className="text-left p-3 font-semibold">Activity</th>
                <th className="text-left p-3 font-semibold">Output</th>
              </tr>
            </thead>
            <tbody>
              {workflowSteps.map((row, idx) => (
                <tr key={row.step} className={idx % 2 === 0 ? 'bg-white' : 'bg-[var(--gray-light)]'}>
                  <td className="p-3 font-bold text-[var(--green-light)]">{row.step}</td>
                  <td className="p-3 text-[var(--black-dark)]">{row.activity}</td>
                  <td className="p-3 text-[var(--black-dark)]">{row.output}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-[var(--green-light)] text-white flex items-center justify-center font-bold text-sm">
            1
          </div>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--green-dark)', fontWeight: 'bold' }}>
            Data-Entry Workbook Design
          </h3>
        </div>

        <p className="text-sm text-[var(--black-dark)] mb-6 leading-relaxed">
          Designed a structured Excel workbook to capture the ADHS data landscape in a consistent,
          reviewable way. The workbook bridged non-technical program knowledge and database-ready
          structure: user-facing tabs used plain language, while hidden helper fields translated
          responses into codes, IDs, validation flags, and import-readiness indicators.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {workbookFeatures.map((card) => (
            <div
              key={card.label}
              className="bg-[var(--gray-light)] p-4 rounded-lg border-l-4 border-[var(--green-light)]"
            >
              <h4 className="font-bold text-[var(--green-dark)] text-sm mb-2">{card.label}</h4>
              <p className="text-sm text-[var(--black-dark)] leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-[var(--green-light)] text-white flex items-center justify-center font-bold text-sm">
            2
          </div>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--green-dark)', fontWeight: 'bold' }}>
            Data Processing & SQL Import
          </h3>
        </div>

        <p className="text-sm text-[var(--black-dark)] mb-6 leading-relaxed">
          Developed a repeatable workflow for converting cleaned workbook submissions into
          relational database records. The core principle was to load unique objects before
          relationship records, so the database could assign the foreign keys needed to connect
          sources, inputs, systems, products, and destinations.
        </p>

        <div className="overflow-x-auto mb-4">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--green-dark)] text-white">
                <th className="text-left p-3 font-semibold">Phase</th>
                <th className="text-left p-3 font-semibold">Activity</th>
                <th className="text-left p-3 font-semibold">Quality Check</th>
              </tr>
            </thead>
            <tbody>
              {importPhases.map((row, idx) => (
                <tr key={row.phase} className={idx % 2 === 0 ? 'bg-white' : 'bg-[var(--gray-light)]'}>
                  <td className="p-3 font-semibold text-[var(--black-dark)]">{row.phase}</td>
                  <td className="p-3 text-[var(--black-dark)]">{row.activity}</td>
                  <td className="p-3 text-[var(--black-dark)]">{row.check}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-[var(--gray-medium)] italic">
          Import risk controls addressed duplicate records, invalid lookup values, broken relationship
          rows, date conversion errors, space-only values, wizard data type inference errors, and
          unreviewed placeholder text.
        </p>
      </section>

      <section>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-8 rounded-full bg-[var(--green-light)] text-white flex items-center justify-center font-bold text-sm">
            3
          </div>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--green-dark)', fontWeight: 'bold' }}>
            Power BI Data Flow Visualization
          </h3>
        </div>

        <p className="text-sm text-[var(--black-dark)] mb-6 leading-relaxed">
          Built a Power BI report from the approved SQL database. The SQL database remained the
          authoritative source for definitions and relationships; Power BI was used to clean, model,
          filter, and visualize the approved data, not to maintain source definitions. A graph-ready
          link table supported Sankey and network diagrams.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {dashboardViews.map((card) => (
            <div
              key={card.label}
              className="bg-[var(--gray-light)] p-4 rounded-lg border-l-4 border-[var(--green-dark)]"
            >
              <h4 className="font-bold text-[var(--green-dark)] text-sm mb-2">{card.label}</h4>
              <p className="text-sm text-[var(--black-dark)] leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--green-dark)] text-white">
                <th className="text-left p-3 font-semibold">Model Layer</th>
                <th className="text-left p-3 font-semibold">Content</th>
                <th className="text-left p-3 font-semibold">Purpose</th>
              </tr>
            </thead>
            <tbody>
              {modelLayers.map((row, idx) => (
                <tr key={row.layer} className={idx % 2 === 0 ? 'bg-white' : 'bg-[var(--gray-light)]'}>
                  <td className="p-3 font-semibold text-[var(--black-dark)]">{row.layer}</td>
                  <td className="p-3 text-[var(--black-dark)]">{row.content}</td>
                  <td className="p-3 text-[var(--black-dark)]">{row.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h3
          style={{
            fontSize: '1.25rem',
            color: 'var(--green-dark)',
            marginBottom: '1rem',
            fontWeight: 'bold'
          }}
        >
          Skills Demonstrated
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {skillsDemonstrated.map((item) => (
            <div key={item.skill} className="bg-[var(--gray-light)] p-4 rounded-lg flex gap-3">
              <Check className="text-[var(--green-light)] flex-shrink-0 mt-0.5" size={20} />
              <div>
                <span className="font-bold text-[var(--black-dark)] text-sm">{item.skill}:</span>
                <span className="text-sm text-[var(--black-dark)]"> {item.evidence}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export function ADHSDataLandscape() {
  return (
    <>
      <PageMeta
        title="ADHS Data Landscape"
        description="Relational metadata inventory, structured intake workflow, SQL import process, and Power BI data flow visualization for enterprise data governance at ADHS."
      />

      <ProjectDetail
        tags={['Enterprise Data Systems', 'Data Visualization']}
        title="Arizona Health Data Landscape"
        status="Minimum Viable Product"
        tagline="A repeatable health data workflow for documenting program-level data assets, transforming workbook responses into SQL-ready records, and visualizing end-to-end data flows in Power BI."
        role="Data Strategy & Visualization Intern"
        timeline="Sep 2025 – May 2026"
        team="Arizona Department of Health Services"
        imagePlaceholder="adhs-data.png"
        problem="The Arizona Department of Health Services manages data that moves across multiple sources, systems, programs, and reporting products. Without a clear data landscape, teams cannot easily trace where data originates, which systems process it, what outputs are created, or where those outputs are shared. The challenge was to document that landscape in a structured, repeatable way while translating program-friendly descriptions into database-ready concepts."
        approach="Built a three-layer pipeline: a structured Excel workbook to collect program-level metadata from non-technical staff, a repeatable SQL import workflow to transform validated submissions into relational records, and a Power BI report to visualize data flows for governance, QA, and stakeholder communication."
        methodsTitle="What I Built"
        methods={<ADHSMethods />}
        outcomes={[
          'SQL-based relational metadata inventory with an entity-relationship model in dbdiagram.io.',
          'Excel metadata collection workbook with controlled lists, validation logic, helper columns, and review flags.',
          'PowerApps submission form for program staff data entry and standardized metadata collection.',
          'Repeatable SQL import workflow: core records, ID export, relationship loading, and validation checks.',
          'Power BI prototype with Sankey diagrams, network graphs, program-level views, and QA pages.',
          'Technical documentation for project continuity, quality assurance, and team handoff.'
        ]}
        relatedProjects={[
          {
            slug: 'vsac-sud-framework',
            tags: ['Clinical Informatics', 'Data Interoperability'],
            title: 'VSAC Value Set Screening Framework',
            description: 'Developed a semi-automated workflow for producing domain-specific clinical value sets.',
            imagePlaceholder: 'vsac-framework.png'
          },
          {
            slug: 'digital-health-consent',
            tags: ['Digital Health', 'Ethics & Governance'],
            title: 'Digital Health Informed Consent Framework',
            description: 'Published an NIH-aligned framework that evaluates digital health consent forms against measurable ethics criteria.',
            imagePlaceholder: 'consent-framework.png'
          }
        ]}
      />
    </>
  );
}