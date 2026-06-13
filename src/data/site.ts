/** Global site metadata + identity. Single source of truth for name, contact, links. */
export const site = {
  name: 'Anantajna',
  /** Sanskrit roots: ananta (infinite) + jña (knowledge). */
  meaning: 'ananta · jña — “infinite knowledge”',
  person: 'Santosh Hegde',
  role: 'Cloud · DevOps · Platform Engineering',
  title: 'Freelance Cloud, DevOps & Platform Engineering Consultant',
  location: 'Netherlands · available across Europe (remote)',
  yearsExperience: '12+',
  email: 'consulting@anantajna.com',
  url: 'https://anantajna.com',
  linkedin: 'https://www.linkedin.com/in/santoshghegde/',
  tagline: 'Resilient, secure and cost-efficient cloud platforms — engineered for scale.',
  intro:
    'I help startups and enterprises design, build and run cloud-native platforms — from multi-account AWS & Azure landing zones and Kubernetes platforms to GitOps pipelines, observability and cost optimization. 12+ years turning complex infrastructure into reliable, self-service paved paths that developers love.',
  description:
    'Anantajna — freelance Cloud, DevOps & Platform Engineering consulting by Santosh Hegde. AWS & Azure architecture, Kubernetes platform engineering, CI/CD automation, observability, DevSecOps and FinOps for startups and enterprises across Europe.',
  availability: 'Open to freelance & contract engagements',
} as const;

export const stats = [
  { value: '12+', label: 'Years in cloud & infrastructure' },
  { value: '$200K+', label: 'Annual licensing costs cut' },
  { value: '40%', label: 'Faster incident troubleshooting' },
  { value: 'Billions', label: 'Of events/day observed at scale' },
] as const;

export type Certification = { name: string; issuer: string; href?: string };

export const certifications: Certification[] = [
  {
    name: 'AWS Certified DevOps Engineer — Professional',
    issuer: 'Amazon Web Services',
    href: 'https://www.credly.com/badges/501a920a-acbf-42ed-8f74-d3fbc040fc7d',
  },
  { name: 'AWS Certified SysOps Administrator', issuer: 'Amazon Web Services' },
  { name: 'CCNP Routing & Switching', issuer: 'Cisco' },
  { name: 'Getting Started with OpenTelemetry (LFS148)', issuer: 'The Linux Foundation' },
];
