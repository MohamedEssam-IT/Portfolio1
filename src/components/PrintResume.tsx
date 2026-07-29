import { profile, about, experiences } from '@/data/profile';
import { skills } from '@/data/skills';
import { certifications } from '@/data/certifications';

/**
 * A print-only resume rendered when the visitor prints the page (Download CV).
 * Hidden on screen via the `no-print` / `print-only` utility classes.
 */
export function PrintResume() {
  return (
    <div className="hidden print-only text-black">
      <link rel="stylesheet" href="/print.css" />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '32px', fontFamily: 'Arial, sans-serif' }}>
        {/* Header */}
        <header style={{ borderBottom: '2px solid #0078d4', paddingBottom: '12px', marginBottom: '20px' }}>
          <h1 style={{ fontSize: '28px', margin: 0, color: '#0f172a' }}>{profile.name}</h1>
          <p style={{ fontSize: '15px', margin: '4px 0', color: '#0078d4', fontWeight: 600 }}>{profile.role}</p>
          <p style={{ fontSize: '12px', margin: '6px 0 0', color: '#475569' }}>
            {profile.email} &nbsp;|&nbsp; {profile.phone} &nbsp;|&nbsp; {profile.location}
          </p>
        </header>

        {/* Summary */}
        <section style={{ marginBottom: '18px' }}>
          <h2 style={{ fontSize: '14px', color: '#0078d4', textTransform: 'uppercase', letterSpacing: '1px' }}>Summary</h2>
          <p style={{ fontSize: '12px', lineHeight: 1.5, color: '#334155' }}>{about.paragraphs[0]}</p>
        </section>

        {/* Skills */}
        <section style={{ marginBottom: '18px' }}>
          <h2 style={{ fontSize: '14px', color: '#0078d4', textTransform: 'uppercase', letterSpacing: '1px' }}>Core Skills</h2>
          <p style={{ fontSize: '12px', color: '#334155', lineHeight: 1.6 }}>
            {skills.map((s) => s.name).join(' · ')}
          </p>
        </section>

        {/* Experience */}
        <section style={{ marginBottom: '18px' }}>
          <h2 style={{ fontSize: '14px', color: '#0078d4', textTransform: 'uppercase', letterSpacing: '1px' }}>Experience</h2>
          {experiences.map((e) => (
            <div key={e.company} style={{ marginBottom: '12px' }}>
              <p style={{ fontSize: '13px', fontWeight: 700, margin: '0', color: '#0f172a' }}>
                {e.role} — {e.company}
              </p>
              <p style={{ fontSize: '11px', margin: '1px 0 4px', color: '#64748b' }}>{e.dates} · {e.location}</p>
              <ul style={{ margin: 0, paddingLeft: '16px', color: '#334155' }}>
                {e.achievements.map((a) => (
                  <li key={a} style={{ fontSize: '11.5px', lineHeight: 1.5, marginBottom: '2px' }}>{a}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Certifications */}
        <section>
          <h2 style={{ fontSize: '14px', color: '#0078d4', textTransform: 'uppercase', letterSpacing: '1px' }}>Certifications</h2>
          <ul style={{ margin: 0, paddingLeft: '16px', color: '#334155' }}>
            {certifications.map((c) => (
              <li key={c.code} style={{ fontSize: '12px', lineHeight: 1.6 }}>
                <strong>{c.code}</strong> — {c.title} ({c.issuer}) · {c.status}{c.year ? `, ${c.year}` : ''}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
