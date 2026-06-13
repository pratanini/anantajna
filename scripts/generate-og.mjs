// One-off: render the social-share (Open Graph) image to public/og-image.png.
// Run with: node scripts/generate-og.mjs
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = join(__dirname, '..', 'public', 'og-image.png');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#22d3ee"/>
      <stop offset="1" stop-color="#6366f1"/>
    </linearGradient>
    <radialGradient id="glow" cx="78%" cy="0%" r="70%">
      <stop offset="0" stop-color="#6366f1" stop-opacity="0.35"/>
      <stop offset="1" stop-color="#6366f1" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#06080d"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect x="20" y="20" width="1160" height="590" rx="28" fill="none" stroke="#232c40" stroke-width="2"/>

  <g transform="translate(80, 90)">
    <rect width="64" height="64" rx="14" fill="#0a0e16" stroke="url(#accent)" stroke-opacity="0.4" stroke-width="2"/>
    <path d="M32 14 L46 48 H38.5 L35.6 40.5 H28.4 L25.5 48 H18 Z M30.4 34 H33.6 L32 29.4 Z" fill="url(#accent)"/>
    <text x="84" y="44" font-family="Verdana, sans-serif" font-size="34" font-weight="700" fill="#e7ecf4">Anantajna</text>
  </g>

  <text x="80" y="290" font-family="Verdana, sans-serif" font-size="74" font-weight="700" fill="#e7ecf4">Cloud · DevOps ·</text>
  <text x="80" y="378" font-family="Verdana, sans-serif" font-size="74" font-weight="700" fill="url(#accent)">Platform Engineering</text>

  <text x="80" y="452" font-family="Verdana, sans-serif" font-size="30" fill="#9aa6bd">Santosh Hegde — Freelance Consultant · Europe</text>

  <text x="80" y="540" font-family="Verdana, sans-serif" font-size="24" fill="#6b7689">AWS &amp; Azure · Kubernetes · Terraform · Observability · FinOps</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('Wrote', out);
