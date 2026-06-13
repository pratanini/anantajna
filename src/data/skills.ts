/** Grouped technology stack — rendered as chip clusters in <TechStack />. */
export type SkillGroup = {
  category: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: 'Cloud & Infrastructure',
    items: ['AWS', 'Azure', 'OpenStack', 'VMware', 'Linux', 'Akamai CDN'],
  },
  {
    category: 'Containers & Orchestration',
    items: [
      'Kubernetes',
      'Amazon EKS',
      'Azure AKS',
      'Docker',
      'Helm',
      'Amazon ECS',
      'Rancher',
      'ArgoCD',
    ],
  },
  {
    category: 'IaC & Automation',
    items: [
      'Terraform',
      'Ansible',
      'Packer',
      'Bicep',
      'CloudFormation',
      'Python',
      'Bash',
      'PowerShell',
    ],
  },
  {
    category: 'CI/CD',
    items: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'CircleCI', 'Azure DevOps', 'Artifactory'],
  },
  {
    category: 'Observability',
    items: [
      'OpenTelemetry',
      'Elasticsearch (ELK)',
      'Grafana LGTM',
      'Prometheus',
      'Datadog',
      'Kafka',
    ],
  },
  {
    category: 'Security & Governance',
    items: [
      'HashiCorp Vault',
      'AWS IAM',
      'GuardDuty',
      'Amazon Inspector',
      'Elastic SIEM',
      'Okta ASA',
      'Sysdig',
      'Kyverno',
    ],
  },
];
