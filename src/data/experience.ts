/** Career history, condensed from the resume. Most recent first. */
export type Role = {
  company: string;
  title: string;
  period: string;
  location: string;
  /** Headline achievements — quantified where possible. */
  highlights: string[];
  /** Shown for currently active engagements. */
  current?: boolean;
};

export const roles: Role[] = [
  {
    company: 'Uphillhealth',
    title: 'Platform Engineer',
    period: 'Oct 2025 — Present',
    location: 'Netherlands',
    current: true,
    highlights: [
      'Migrating manually managed AWS accounts to Account Factory for Terraform (AFT).',
      'Consolidating multiple client accounts into central dev, staging and production.',
      'Integrating observability into every application with minimal developer effort.',
    ],
  },
  {
    company: 'Saxo Bank',
    title: 'Tech Lead — Observability Platforms',
    period: 'May 2023 — Oct 2025',
    location: 'Netherlands',
    highlights: [
      'Led a team of six engineers across Kubernetes, cloud automation and CI/CD.',
      'Consolidated monitoring from Dynatrace to Elastic — $200K/yr in licensing savings.',
      'Integrated OpenTelemetry across logs, metrics and traces — 40% faster troubleshooting.',
      'Moved Elastic to ECK on Kubernetes — 50% faster provisioning, 20% lower cost.',
      'Cut cloud & licensing spend 40% via spot adoption and CPU/memory optimization.',
    ],
  },
  {
    company: 'TMNL',
    title: 'Senior Platform Engineer',
    period: 'Nov 2021 — Apr 2023',
    location: 'Netherlands',
    highlights: [
      'Migrated AWS multi-account setup to Control Tower & AFT — security warnings down 50%.',
      'Achieved full regulatory compliance with zero breach incidents over eight months.',
      'Rolled out Datadog org-wide — support inquiries down 80%.',
      'Migrated Azure DevOps repos and CI pipelines to GitHub.',
    ],
  },
  {
    company: 'ReaQta (an IBM company)',
    title: 'Site Reliability Engineering Lead',
    period: 'Feb 2021 — Oct 2021',
    location: 'Netherlands',
    highlights: [
      'Moved legacy systems to EKS & Rancher — 60% faster deployments.',
      'Branch-based ephemeral environments with ArgoCD & GitLab CI — days to minutes.',
      'Built Loki/Prometheus/Grafana observability — 90% fewer support requests.',
      'Multi-tenant clusters on-prem, EKS & AKS with Kyverno, Cilium and Vault.',
    ],
  },
  {
    company: 'Bloomreach',
    title: 'DevOps / SRE Engineer',
    period: 'Apr 2018 — Jan 2021',
    location: 'Amsterdam · Bangalore',
    highlights: [
      'Automated multi-region AWS infrastructure & DR with Terraform and Ansible.',
      'Migrated EMR workloads to VPCs — 50% lower execution time and cost.',
      'Reserved & spot strategy delivering $100K+ in annual savings.',
      'Orchestrated migration to EKS with Terraform.',
    ],
  },
  {
    company: 'Tech Mahindra',
    title: 'Senior Integration Engineer (DevOps)',
    period: 'May 2016 — Apr 2018',
    location: 'Bangalore',
    highlights: [
      'Automated deployment on OpenStack & VMware with Ansible — lead time down to ~5 minutes.',
    ],
  },
  {
    company: 'Ericsson',
    title: 'Integration Engineer',
    period: 'Dec 2012 — May 2016',
    location: 'Bangalore',
    highlights: [
      'SME for Ericsson Charging System nodes and Cisco routers across 17 countries.',
      'Automated routine operations with Python & Shell — 30% less manual work.',
    ],
  },
];
