/** Consulting service categories, derived from 12+ years of delivery (see experience.ts). */
export type Service = {
  id: string;
  title: string;
  /** Icon key — rendered as an inline SVG in <Services />. */
  icon: 'cloud' | 'layers' | 'pipeline' | 'pulse' | 'shield' | 'coins';
  summary: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: 'cloud-architecture',
    title: 'Cloud Architecture & Migration',
    icon: 'cloud',
    summary:
      'Well-architected AWS & Azure foundations — multi-account landing zones, governance and large-scale migrations.',
    points: [
      'AWS Control Tower & Account Factory for Terraform (AFT)',
      'Multi-account governance, guardrails & least-privilege IAM',
      'On-prem → cloud and hybrid migrations with zero-downtime cutovers',
      'Disaster recovery & high-availability across regions',
    ],
  },
  {
    id: 'platform-engineering',
    title: 'Platform Engineering',
    icon: 'layers',
    summary:
      'Kubernetes platforms and self-service “paved paths” that let developers ship safely and fast.',
    points: [
      'Production Kubernetes on EKS, AKS, Rancher & on-prem',
      'Multi-tenant clusters with Kyverno policy & Cilium networking',
      'Reusable Helm charts and golden-path templates',
      'GitOps delivery with ArgoCD and developer self-service',
    ],
  },
  {
    id: 'devops-cicd',
    title: 'DevOps & CI/CD Automation',
    icon: 'pipeline',
    summary:
      'Everything-as-code: fast, repeatable pipelines and infrastructure automation that remove toil.',
    points: [
      'Infrastructure as Code with Terraform, Ansible, Packer & Bicep',
      'CI/CD on GitHub Actions, GitLab CI, Jenkins & CircleCI',
      'Pipeline modernization — cut a 6-step release flow to 2',
      'Ephemeral preview environments provisioned in minutes, not days',
    ],
  },
  {
    id: 'observability-sre',
    title: 'Observability & Reliability',
    icon: 'pulse',
    summary:
      'End-to-end visibility into logs, metrics and traces — so teams find and fix issues in minutes.',
    points: [
      'OpenTelemetry instrumentation across logs, metrics & traces',
      'Elastic (ELK), Grafana LGTM, Prometheus & Datadog platforms',
      'Pipelines ingesting billions of events per day with zero log loss',
      'SRE practices that cut troubleshooting time by ~40%',
    ],
  },
  {
    id: 'devsecops',
    title: 'DevSecOps & Cloud Security',
    icon: 'shield',
    summary: 'Security baked into the platform — compliant by default, without slowing teams down.',
    points: [
      'Least-privilege IAM and secrets management with HashiCorp Vault',
      'Vulnerability scanning with Amazon Inspector & GuardDuty',
      'Threat detection with Elastic SIEM and Sysdig',
      'Regulatory compliance — delivered with zero breach incidents',
    ],
  },
  {
    id: 'finops',
    title: 'Cloud Cost Optimization (FinOps)',
    icon: 'coins',
    summary:
      'Right-size and rationalize spend — proven six-figure savings without sacrificing reliability.',
    points: [
      'Spot & reserved-instance strategy and CPU/memory right-sizing',
      'Tooling & licensing consolidation — saved $200K+/yr in fees',
      '40% reduction in cloud consumption via optimization',
      'Cost visibility and accountability built into the platform',
    ],
  },
];
