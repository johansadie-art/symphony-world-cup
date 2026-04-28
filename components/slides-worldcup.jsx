/* global React, ReactDOM */
// Symphony AI World Cup — presentation deck

const WC = {
  indigo:    '#6C69FF',
  indigo600: '#5754F2',
  indigo700: '#4441D9',
  indigo50:  '#F2F1FF',
  indigo100: '#E4E3FF',
  indigo200: '#C9C7FF',
  indigo900: '#1B1A66',
  ink:       '#0B0B14',
  ink2:      '#2A2A38',
  ink3:      '#5A5A6B',
  ink4:      '#8A8A99',
  line:      '#E6E6EC',
  line2:     '#D8D8E0',
  paper:     '#F6F6F9',
  paper2:    '#EDEDF2',
  surface:   '#FFFFFF',
};

const F  = '"Poppins", system-ui, -apple-system, sans-serif';
const FM = 'ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace';

// Type scale (px at 1920×1080 stage). Supporting/meta copy uses `small` (24px); nothing below MIN_FONT_PX.
const MIN_FONT_PX = 18;
const S = {
  displayXL: 112,
  display:   80,
  title:     64,
  subtitle:  44,
  lead:      34,
  body:      30,
  bodyS:     26,
  small:     24,
};

const PX = 110, PT = 88, PB = 80;
const GRAD_DARK = 'linear-gradient(135deg, #6a6cf6 0%, #76a3fc 100%)';

// ─── Logo ────────────────────────────────────────────────────────────────────

function Logo({ dark = false, size = 44 }) {
  return (
    <img
      src={dark ? 'logo-white.png' : 'logo-color.png'}
      alt="Symphony"
      style={{ height: size, display: 'block', objectFit: 'contain' }}
    />
  );
}

// ─── Base components ────────────────────────────────────────────────────────

function Slide({ bg = WC.paper, pad = true, children, label, dark = false, noEnterAnimation = false }) {
  return (
    <section
      data-screen-label={label}
      data-deck-no-enter={noEnterAnimation ? '' : undefined}
      style={{
        width: '100%', height: '100%',
        background: bg, color: WC.ink, fontFamily: F,
        boxSizing: 'border-box',
        padding: pad ? `${PT}px ${PX}px ${PB}px` : 0,
        display: 'flex', flexDirection: 'column',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {children}
      <div style={{ position: 'absolute', top: PT, right: PX }}>
        <Logo dark={dark} />
      </div>
    </section>
  );
}

function Rail({ chapter }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 14,
      marginBottom: 56,
    }}>
      <div style={{ width: 9, height: 9, borderRadius: '50%', background: WC.indigo, flexShrink: 0 }} />
      <span style={{
        fontFamily: FM, fontSize: S.small, fontWeight: 600,
        letterSpacing: '0.1em', textTransform: 'uppercase', color: WC.ink2,
      }}>
        Symphony AI World Cup
      </span>
      {chapter && (
        <>
          <span style={{ color: WC.line2, fontSize: S.small }}>/</span>
          <span style={{ fontFamily: FM, fontSize: S.small, letterSpacing: '0.08em', textTransform: 'uppercase', color: WC.ink4 }}>{chapter}</span>
        </>
      )}
    </div>
  );
}

function Tag({ children, color = WC.indigo, bg = WC.indigo50 }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center',
      padding: '8px 16px', fontSize: S.small, fontWeight: 600,
      borderRadius: 999, background: bg, color,
      letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: FM,
    }}>
      {children}
    </span>
  );
}

/** Subtle hover lift for card grids (keyboard-safe: visual only). */
function HoverLift({ children, style = {}, dark = false }) {
  const [on, setOn] = React.useState(false);
  const shadow = dark
    ? '0 22px 50px rgba(0, 0, 0, 0.38)'
    : '0 18px 46px rgba(11, 11, 20, 0.14)';
  return (
    <div
      onMouseEnter={() => setOn(true)}
      onMouseLeave={() => setOn(false)}
      style={{
        ...style,
        transition: 'transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s ease',
        transform: on ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: on ? shadow : (style.boxShadow ?? 'none'),
      }}
    >
      {children}
    </div>
  );
}

function Bullet({ children, size = S.small, color = WC.ink2 }) {
  const fontSize = Math.max(MIN_FONT_PX, size);
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
      <span style={{
        width: 7, height: 7, borderRadius: '50%', background: WC.indigo,
        flexShrink: 0, marginTop: fontSize * 0.38,
      }} />
      <div style={{ fontSize, color, lineHeight: 1.45 }}>{children}</div>
    </div>
  );
}

function DividerSlide({ sectionNum, title, subtitle, footer, label }) {
  return (
    <section
      data-screen-label={label}
      style={{
        width: '100%', height: '100%',
        background: GRAD_DARK, fontFamily: F, boxSizing: 'border-box',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        padding: `${PT}px ${PX}px ${PB}px`,
        position: 'relative', overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', right: -60, bottom: -80,
        fontSize: 380, fontWeight: 900, color: 'rgba(255,255,255,0.04)',
        lineHeight: 1, letterSpacing: '-0.05em', pointerEvents: 'none', userSelect: 'none',
      }}>
        {sectionNum}
      </div>
      <div style={{ position: 'absolute', top: PT, right: PX }}>
        <Logo dark />
      </div>

      <div style={{ fontFamily: FM, fontSize: S.small, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
        Section {sectionNum}
      </div>

      <div>
        <div style={{
          fontSize: S.displayXL, fontWeight: 700,
          lineHeight: 1.0, letterSpacing: '-0.03em', color: '#fff', marginBottom: 24,
        }}>
          {title}
        </div>
        {subtitle && (
          <div style={{ fontSize: S.lead, color: 'rgba(255,255,255,0.5)', maxWidth: '40ch', lineHeight: 1.35 }}>
            {subtitle}
          </div>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 24 }}>
        <div style={{ fontFamily: FM, fontSize: S.small, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          {footer}
        </div>
      </div>
    </section>
  );
}

// ─── Slides ─────────────────────────────────────────────────────────────────

function WC_Cover() {
  return (
    <section
      data-screen-label="01 Cover"
      style={{
        width: '100%', height: '100%',
        background: GRAD_DARK, fontFamily: F,
        display: 'flex', flexDirection: 'column',
        position: 'relative', overflow: 'hidden', boxSizing: 'border-box',
      }}
    >
      <div style={{
        position: 'absolute', top: -200, right: -200,
        width: 900, height: 900, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: -280, left: -120,
        width: 700, height: 700, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        flex: 1, display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between',
        padding: `${PT}px ${PX}px ${PB}px`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 9, height: 9, borderRadius: '50%', background: 'rgba(255,255,255,0.6)' }} />
            <span style={{ fontFamily: FM, fontSize: S.small, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
              Symphony
            </span>
          </div>
          <Tag color="rgba(255,255,255,0.9)" bg="rgba(255,255,255,0.15)">Season 01</Tag>
        </div>

        <div>
          <div style={{
            fontSize: S.displayXL, fontWeight: 700,
            lineHeight: 1.0, letterSpacing: '-0.035em', color: '#fff',
            marginBottom: 32,
          }}>
            Symphony AI<br />
            <span style={{ color: 'rgba(255,255,255,0.6)' }}>World Cup</span>
          </div>
          <div style={{ fontSize: S.lead, color: 'rgba(255,255,255,0.5)', maxWidth: '38ch', lineHeight: 1.4, fontWeight: 400 }}>
            Company-wide AI adoption, driven from the inside out.
          </div>
        </div>

        <div style={{
          display: 'flex', alignItems: 'center',
          paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.15)',
        }}>
          <div style={{ fontFamily: FM, fontSize: S.small, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            Multi-disciplinary · Quarterly rounds · Grand Final
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', top: PT, right: PX }}>
        <Logo dark />
      </div>
    </section>
  );
}

function WC_WhatIsIt() {
  return (
    <Slide bg={WC.paper} label="02 What Is It">
      <Rail chapter="Overview" />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.25fr', gap: 96, alignItems: 'center' }}>
        <div>
          <div style={{ marginBottom: 24 }}><Tag>The initiative</Tag></div>
          <div style={{
            fontSize: S.title, fontWeight: 700,
            lineHeight: 1.05, letterSpacing: '-0.03em', color: WC.ink,
          }}>
            Real problems.<br />
            <span style={{ color: WC.indigo }}>Real solutions.</span><br />
            Proven results.
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <p style={{ fontSize: S.bodyS, lineHeight: 1.6, color: WC.ink2, margin: 0 }}>
            A company-wide initiative designed to drive AI adoption from the inside out. Multi-disciplinary teams tackle real Symphony business problems using AI, competing across four quarterly rounds before a Grand Final Event where a champion is crowned.
          </p>
          <p style={{ fontSize: S.small, lineHeight: 1.55, color: WC.ink3, margin: 0 }}>
            Every team that participates leaves something tangible behind: a documented business process or new solution, a working AI tool, and measured proof of value created.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {['Documented process or opportunity', 'Working AI solution', 'Measured value'].map((t, i) => (
              <div key={i} style={{
                padding: '10px 18px',
                background: WC.surface, border: `1px solid ${WC.line}`,
                borderRadius: 8, fontSize: S.small, fontWeight: 600,
                color: WC.ink3, letterSpacing: '0.02em',
              }}>{t}</div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

function WC_Objectives() {
  const items = [
    ['Accelerate AI adoption', 'Drive usage across the entire business, not just tech.'],
    ['Surface real inefficiencies', 'Find and fix operational pain points with AI.'],
    ['Build a process library', 'Company-wide, documented, growing every season.'],
    ['Create compounding value', 'Measurable incremental gains that stack over time.'],
    ['Develop AI capability', 'Across all disciplines — not just engineering.'],
  ];
  return (
    <Slide bg={WC.surface} label="03 Objectives">
      <Rail chapter="Objectives" />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '320px 1fr', gap: 96, alignItems: 'start' }}>
        <div style={{ paddingTop: 4 }}>
          <div style={{ fontSize: S.title, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', color: WC.ink }}>
            Five<br />goals.
          </div>
          <div style={{ marginTop: 24, fontSize: S.small, lineHeight: 1.5, color: WC.ink3 }}>
            Every season advances all five simultaneously.
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {items.map(([title, body], i) => (
            <div key={i} style={{
              display: 'flex', gap: 28, alignItems: 'flex-start',
              padding: '22px 0',
              borderBottom: i < items.length - 1 ? `1px solid ${WC.line}` : 'none',
            }}>
              <div style={{ fontFamily: FM, fontSize: S.small, fontWeight: 700, color: WC.indigo, flexShrink: 0, marginTop: 3, width: 28 }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div>
                <div style={{ fontSize: S.bodyS, fontWeight: 600, color: WC.ink, marginBottom: 4 }}>{title}</div>
                <div style={{ fontSize: S.small, color: WC.ink3, lineHeight: 1.4 }}>{body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

function WC_SeasonStructure() {
  const quarters = [
    { label: 'Q1', title: 'Round 1', desc: 'Top ideas from Round 1 are shortlisted for the Grand Final.', n: '01' },
    { label: 'Q2', title: 'Round 2', desc: 'Top ideas from Round 2 are shortlisted for the Grand Final.', n: '02' },
    { label: 'Q3', title: 'Round 3', desc: 'Top ideas from Round 3 are shortlisted for the Grand Final.', n: '03' },
    { label: 'Q4', title: 'Round 4', desc: 'Top ideas from Round 4 complete the Grand Final lineup.', n: '04' },
    { label: 'End of Year', title: 'Grand Final', desc: 'Top ideas generated across rounds are compared head-to-head. Champion crowned.', highlight: true },
  ];
  return (
    <Slide bg={WC.paper} label="04 Season Structure">
      <Rail chapter="Season" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 56 }}>
        <div>
          <div style={{ fontSize: S.title, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', color: WC.ink }}>
            Four quarterly rounds.<br/>One champion.
          </div>
          <div style={{ marginTop: 16, fontSize: S.small, color: WC.ink3, maxWidth: '60ch', lineHeight: 1.45 }}>
            A season runs over a full year. Each round generates high-value ideas and solutions. At the Grand Final Event, the top ideas from the rounds are compared head-to-head. It is a standalone end-of-year event, not a build round.
          </div>
        </div>

        <div style={{ display: 'flex', gap: 0, position: 'relative' }}>
          <div style={{
            position: 'absolute', top: 27, left: 27, right: 27, height: 2,
            background: `linear-gradient(to right, ${WC.indigo}, ${WC.indigo})`,
            zIndex: 0,
          }} />
          {quarters.map((m, i) => (
            <div key={i} style={{ flex: 1, position: 'relative', zIndex: 1, paddingRight: 12 }}>
              <div style={{
                width: 54, height: 54, borderRadius: '50%',
                background: m.highlight ? WC.indigo : WC.surface,
                border: `3px solid ${WC.indigo}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 28,
                boxShadow: m.highlight ? `0 0 0 8px ${WC.indigo100}` : 'none',
              }}>
                {m.highlight ? (
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2l2.2 5.8H18l-4.8 3.5 1.8 6L10 14l-5 3.3 1.8-6L2 7.8h5.8z" fill="#fff"/>
                  </svg>
                ) : (
                  <span style={{ fontFamily: FM, fontSize: S.small, fontWeight: 700, color: WC.indigo }}>{m.n}</span>
                )}
              </div>
              <div style={{ fontFamily: FM, fontSize: S.small, letterSpacing: '0.08em', textTransform: 'uppercase', color: WC.ink4, marginBottom: 8 }}>
                {m.label}
              </div>
              <div style={{ fontSize: S.subtitle, fontWeight: 700, color: m.highlight ? WC.indigo : WC.ink, letterSpacing: '-0.01em', lineHeight: 1.1, marginBottom: 10 }}>
                {m.title}
              </div>
              <div style={{ fontSize: S.small, color: WC.ink3, lineHeight: 1.4, maxWidth: '22ch' }}>
                {m.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

function WC_RoundEntry() {
  const cards = [
    {
      n: '01',
      title: 'Enter any round',
      body: 'Teams may enter any round and as many rounds as they choose throughout the season.',
    },
    {
      n: '02',
      title: 'Different problem each time',
      body: 'A team that enters multiple rounds must bring a different problem to each one. No repeats.',
      accent: true,
    },
    {
      n: '03',
      title: 'Keep entering after wins',
      body: 'Teams can continue entering later rounds with new problems, even after a round win. The goal is to solve as many business problems as possible.',
    },
  ];
  return (
    <Slide bg={WC.surface} label="05 Round Entry">
      <Rail chapter="Season" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 56 }}>
        <div>
          <div style={{ marginBottom: 14 }}><Tag>Round entry</Tag></div>
          <div style={{ fontSize: S.title, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', color: WC.ink }}>
            Enter any round.<br/>
            <span style={{ color: WC.indigo }}>Different problem</span> each time.
          </div>
          <div style={{ marginTop: 16, fontSize: S.small, color: WC.ink3, maxWidth: '60ch', lineHeight: 1.45 }}>
            Teams aren't capped at one entry per season. Bring a fresh problem each round and keep solving throughout the year.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22, flex: 1 }}>
          {cards.map((c, i) => (
            <HoverLift key={i} dark={!!c.accent} style={{
              background: c.accent ? WC.indigo : WC.paper,
              border: `1px solid ${c.accent ? WC.indigo : WC.line}`,
              borderRadius: 16, padding: '32px 30px',
              display: 'flex', flexDirection: 'column', gap: 16,
            }}>
              <div style={{ fontFamily: FM, fontSize: S.small, fontWeight: 700, color: c.accent ? 'rgba(255,255,255,0.5)' : WC.indigo, letterSpacing: '0.1em' }}>
                {c.n}
              </div>
              <div style={{ fontSize: S.bodyS, fontWeight: 700, color: c.accent ? '#fff' : WC.ink, lineHeight: 1.2, letterSpacing: '-0.01em' }}>
                {c.title}
              </div>
              <div style={{ fontSize: S.small, color: c.accent ? 'rgba(255,255,255,0.72)' : WC.ink3, lineHeight: 1.5, flex: 1 }}>
                {c.body}
              </div>
            </HoverLift>
          ))}
        </div>
      </div>
    </Slide>
  );
}

function WC_SeasonKickoff() {
  const phases = [
    { label: 'T-6 weeks', title: 'Announce', desc: 'Central owner announces the new season company-wide. Problem Bank opens for department submissions. Region managers briefed.' },
    { label: 'T-4 weeks', title: 'Scope', desc: 'Problem Bank closes. Leadership validates and scopes entries. Final Problem Bank published.' },
    { label: 'T-2 weeks', title: 'Register', desc: 'Team registration opens. Matching pool opens for individuals without a team. Track B submissions accepted.' },
    { label: 'T-1 week', title: 'Finalise', desc: 'Track B submissions reviewed and answered within 48 hours. Team rosters finalised and submitted to region managers.' },
    { label: 'Day 1', title: 'Round 1 begins', desc: 'The season is live. Teams begin Foundation phase.', highlight: true },
  ];
  return (
    <Slide bg={WC.paper} label="06 Season Kickoff" noEnterAnimation>
      <Rail chapter="Season" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 56 }}>
        <div>
          <div style={{ marginBottom: 14 }}><Tag>Season kickoff</Tag></div>
          <div style={{ fontSize: S.title, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', color: WC.ink }}>
            Six weeks to launch.
          </div>
          <div style={{ marginTop: 16, fontSize: S.small, color: WC.ink3, maxWidth: '60ch', lineHeight: 1.45 }}>
            Each season follows a defined launch sequence so problems, teams, and panels are all in place before Round 1 begins.
          </div>
        </div>

        <div style={{ display: 'flex', gap: 0, position: 'relative' }}>
          <div style={{
            position: 'absolute', top: 27, left: 27, right: 27, height: 2,
            background: `linear-gradient(to right, ${WC.indigo}, ${WC.indigo})`,
            zIndex: 0,
          }} />
          {phases.map((m, i) => (
            <div key={i} style={{ flex: 1, position: 'relative', zIndex: 1, paddingRight: 12 }}>
              <div style={{
                width: 54, height: 54, borderRadius: '50%',
                background: m.highlight ? WC.indigo : WC.surface,
                border: `3px solid ${WC.indigo}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 28,
                boxShadow: m.highlight ? `0 0 0 8px ${WC.indigo100}` : 'none',
              }}>
                {m.highlight ? (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M5 9l3 3 5-6" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ) : (
                  <span style={{ fontFamily: FM, fontSize: S.small, fontWeight: 700, color: WC.indigo }}>{String(i + 1).padStart(2, '0')}</span>
                )}
              </div>
              <div style={{ fontFamily: FM, fontSize: S.small, letterSpacing: '0.08em', textTransform: 'uppercase', color: WC.ink4, marginBottom: 8 }}>
                {m.label}
              </div>
              <div style={{ fontSize: S.lead, fontWeight: 700, color: m.highlight ? WC.indigo : WC.ink, letterSpacing: '-0.01em', lineHeight: 1.1, marginBottom: 10 }}>
                {m.title}
              </div>
              <div style={{ fontSize: S.small, color: WC.ink3, lineHeight: 1.45, maxWidth: '24ch' }}>
                {m.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

function WC_TeamsDivider() {
  return (
    <DividerSlide
      label="07 Teams"
      sectionNum="02"
      title={"Build the\nright team."}
      subtitle="Every team must span four disciplines. No exceptions."
      footer="Design · Product · Engineering or Data · Business SME"
    />
  );
}

function WC_TeamComposition() {
  const disciplines = [
    { name: 'Design', icon: '◈', desc: 'Ensures the solution is usable and will actually be adopted.', color: '#8784FF' },
    { name: 'Product', icon: '◎', desc: 'Ensures the solution solves the right problem and impact is measurable.', color: WC.indigo },
    { name: 'Engineering\nor Data', icon: '{ }', desc: 'Ensures the solution is technically feasible and robust.', color: WC.indigo600 },
    { name: 'Business SME', icon: '◉', desc: 'Domain expert who validates the problem and signs off on results.', color: WC.indigo700 },
  ];
  return (
    <Slide bg={WC.surface} label="08 Team Composition">
      <Rail chapter="Teams" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 36 }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            <div style={{ marginBottom: 14 }}><Tag>Composition</Tag></div>
            <div style={{ fontSize: S.subtitle, fontWeight: 700, letterSpacing: '-0.02em', color: WC.ink }}>
              Four disciplines. Four to five people.
            </div>
          </div>
          <div style={{
            background: WC.indigo50, border: `1px solid ${WC.indigo100}`,
            borderRadius: 12, padding: '14px 24px',
            fontSize: S.small, color: WC.indigo700, fontWeight: 600,
          }}>
            Min 4 · Max 5
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, flex: 1 }}>
          {disciplines.map((d, i) => (
            <HoverLift key={i} style={{
              background: WC.paper, border: `1px solid ${WC.line}`,
              borderTop: `4px solid ${d.color}`,
              borderRadius: 16, padding: '30px 26px',
              display: 'flex', flexDirection: 'column', gap: 18,
              boxShadow: '0 2px 12px rgba(11,11,20,0.06), 0 1px 3px rgba(11,11,20,0.04)',
            }}>
              <div style={{ fontSize: 34, lineHeight: 1, fontFamily: FM }}>{d.icon}</div>
              <div style={{ fontSize: S.bodyS, fontWeight: 700, color: WC.ink, lineHeight: 1.2 }}>{d.name}</div>
              <div style={{ fontSize: S.small, color: WC.ink3, lineHeight: 1.45, flex: 1 }}>{d.desc}</div>
            </HoverLift>
          ))}
        </div>

        <div style={{
          background: WC.indigo50, borderRadius: 12, padding: '16px 24px',
          fontSize: S.small, color: WC.indigo700, lineHeight: 1.4,
        }}>
          <strong>If a discipline is missing:</strong> Region managers run a volunteer matching pool. As a last resort, one discipline (never more) may be substituted with AI — but the team must demonstrate how during their pitch.
        </div>
      </div>
    </Slide>
  );
}

function WC_SMERule() {
  const points = [
    ['Brings domain knowledge', 'The as-is process lives in their head. Nobody else can document or describe it credibly.'],
    ['Validates the results', 'They sign off that the measured numbers are genuine, not projected or modelled.'],
    ['Champions the rollout', 'After the competition, they become the natural owner for scaling the solution within their part of the business.'],
    ['Inherits Problem Bank problems', 'The person who submitted a problem becomes the SME for whichever team picks it.'],
  ];
  return (
    <Slide bg={WC.paper} label="09 The SME Rule">
      <Rail chapter="Teams" />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <div style={{ marginBottom: 24 }}><Tag>Core role</Tag></div>
          <div style={{ fontSize: S.title, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', color: WC.ink, marginBottom: 24 }}>
            The SME is not an advisor.
          </div>
          <div style={{ fontSize: S.bodyS, color: WC.ink3, lineHeight: 1.5, marginBottom: 28 }}>
            They are a core team member — the domain expert no other discipline can replace.
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <div style={{
              background: WC.surface, border: `1px solid ${WC.line}`,
              borderRadius: 12, padding: '16px 18px',
            }}>
              <div style={{ fontFamily: FM, fontSize: S.small, fontWeight: 700, color: WC.indigo, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
                Process improvement
              </div>
              <div style={{ fontSize: S.small, color: WC.ink3, lineHeight: 1.45 }}>
                Documents the as-is state and validates that the measured delta is real.
              </div>
            </div>
            <div style={{
              background: WC.surface, border: `1px solid ${WC.line}`,
              borderRadius: 12, padding: '16px 18px',
            }}>
              <div style={{ fontFamily: FM, fontSize: S.small, fontWeight: 700, color: WC.indigo, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
                Net new idea
              </div>
              <div style={{ fontSize: S.small, color: WC.ink3, lineHeight: 1.45 }}>
                Acts as the business authority — the opportunity is genuine, the value is real.
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          {points.map(([title, body], i) => (
            <div key={i} style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
              <div style={{
                width: 44, height: 44, borderRadius: 12, background: WC.indigo50,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: WC.indigo }} />
              </div>
              <div>
                <div style={{ fontSize: S.small, fontWeight: 600, color: WC.ink, marginBottom: 4 }}>{title}</div>
                <div style={{ fontSize: S.small, color: WC.ink3, lineHeight: 1.45 }}>{body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

function WC_RegionalModel() {
  const duties = [
    'Drive team recruitment and ensure every team is properly formed before the round begins',
    'Facilitate the matching pool to connect teams with missing disciplines',
    'Maintain momentum — Slack updates, shoutouts, keeping the energy up throughout',
    'Run a dry-run pitch session with each of their teams before demo day',
    'Show up publicly and visibly on demo day to champion their teams',
  ];
  return (
    <Slide bg={WC.surface} label="10 Regional Model">
      <Rail chapter="Organisation" />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 96, alignItems: 'start' }}>
        <div>
          <div style={{ marginBottom: 20 }}><Tag>Region managers</Tag></div>
          <div style={{ fontSize: S.subtitle, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: WC.ink, marginBottom: 20 }}>
            Organisers and champions.<br />Not competitors.
          </div>
          <div style={{ fontSize: S.small, color: WC.ink3, lineHeight: 1.5, marginBottom: 28 }}>
            No regional leaderboard. All teams compete in one global pool regardless of where they are based.
          </div>
          <div style={{
            background: WC.indigo50, border: `1px solid ${WC.indigo100}`,
            borderRadius: 12, padding: '18px 22px',
          }}>
            <div style={{ fontSize: S.small, fontWeight: 700, color: WC.indigo, marginBottom: 8 }}>The recognition</div>
            <div style={{ fontSize: S.small, color: WC.ink2, lineHeight: 1.4 }}>
              If a team from a region wins, that is the region manager's moment too. Their region produced the champion — recognised publicly.
            </div>
          </div>
        </div>
        <div>
          <div style={{ fontFamily: FM, fontSize: S.small, letterSpacing: '0.1em', textTransform: 'uppercase', color: WC.ink4, marginBottom: 20 }}>
            Responsibilities
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {duties.map((d, i) => (
              <div key={i} style={{
                display: 'flex', gap: 20, alignItems: 'flex-start',
                padding: '18px 0',
                borderBottom: i < duties.length - 1 ? `1px solid ${WC.line}` : 'none',
              }}>
                <div style={{ fontFamily: FM, fontSize: S.small, fontWeight: 700, color: WC.indigo, flexShrink: 0, marginTop: 2, width: 24 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ fontSize: S.small, color: WC.ink2, lineHeight: 1.45 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

function WC_CentralOwnership() {
  const responsibilities = [
    'Maintain and publish the Problem Bank before each season',
    'Run the Track B approval panel for open pitch submissions',
    'Set and communicate judging criteria and the pitch framework each round',
    'Organise Demo Days and the Grand Final Event',
    'Publish results, scores, and Dragon feedback after each round',
    'Oversee fast-track implementation of winning solutions',
    'Evolve the rules and format between seasons based on what is learned',
  ];
  return (
    <Slide bg={WC.paper} label="11 Central Ownership">
      <Rail chapter="Organisation" />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 96, alignItems: 'start' }}>
        <div>
          <div style={{ marginBottom: 20 }}><Tag>Central ownership</Tag></div>
          <div style={{ fontSize: S.subtitle, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: WC.ink, marginBottom: 20 }}>
            Owned centrally.<br/>Run regionally.
          </div>
          <div style={{ fontSize: S.small, color: WC.ink3, lineHeight: 1.5, marginBottom: 28 }}>
            The AI World Cup is owned by the Community of Practice lead, who is accountable for the initiative across all seasons.
          </div>
          <div style={{
            background: WC.indigo50, border: `1px solid ${WC.indigo100}`,
            borderRadius: 12, padding: '18px 22px',
          }}>
            <div style={{ fontSize: S.small, fontWeight: 700, color: WC.indigo, marginBottom: 8 }}>Region managers, defined</div>
            <div style={{ fontSize: S.small, color: WC.ink2, lineHeight: 1.4 }}>
              Region managers operate within the framework the central owner sets. They don't make structural decisions — those sit centrally.
            </div>
          </div>
        </div>
        <div>
          <div style={{ fontFamily: FM, fontSize: S.small, letterSpacing: '0.1em', textTransform: 'uppercase', color: WC.ink4, marginBottom: 20 }}>
            What the central owner does
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {responsibilities.map((d, i) => (
              <div key={i} style={{
                display: 'flex', gap: 20, alignItems: 'flex-start',
                padding: '16px 0',
                borderBottom: i < responsibilities.length - 1 ? `1px solid ${WC.line}` : 'none',
              }}>
                <div style={{ fontFamily: FM, fontSize: S.small, fontWeight: 700, color: WC.indigo, flexShrink: 0, marginTop: 2, width: 24 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ fontSize: S.small, color: WC.ink2, lineHeight: 1.45 }}>{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
}

function WC_ProblemSourcing() {
  const trackBody = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 24,
    minHeight: 0,
  };
  const trackShell = {
    padding: `0 ${PX}px`,
    paddingBottom: PB,
    display: 'flex',
    flexDirection: 'column',
    background: WC.surface,
    height: '100%',
    minHeight: 0,
  };
  return (
    <Slide bg={WC.paper} label="12 Problem Sourcing" pad={false}>
      <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flexShrink: 0, paddingTop: PT, paddingLeft: PX, paddingRight: PX, paddingBottom: 40 }}>
          <div style={{ fontFamily: FM, fontSize: S.small, letterSpacing: '0.1em', textTransform: 'uppercase', color: WC.ink4 }}>
            Symphony AI World Cup / Problem Sourcing
          </div>
        </div>

        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 0, alignItems: 'stretch' }}>
          {/* Track A */}
          <div style={{ ...trackShell, borderRight: `1px solid ${WC.line2}` }}>
            <div style={trackBody}>
              <Tag>Track A</Tag>
              <div style={{ fontSize: S.subtitle, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: WC.ink }}>
                The Problem Bank
              </div>
              <div style={{ fontSize: S.bodyS, color: WC.ink2, lineHeight: 1.5 }}>
                A curated backlog of real Symphony business problems compiled and maintained by leadership.
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  'Pre-validated and scoped to a single round',
                  'Comes with a named SME attached',
                  'Team picks a problem; that SME joins the team',
                ].map((t, i) => <Bullet key={i}>{t}</Bullet>)}
              </div>
            </div>
          </div>

          {/* Track B */}
          <div style={{ ...trackShell, borderRight: 'none' }}>
            <div style={trackBody}>
              <Tag>Track B</Tag>
              <div style={{ fontSize: S.subtitle, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.02em', color: WC.ink }}>
                Open Pitch
              </div>
              <div style={{ fontSize: S.bodyS, color: WC.ink2, lineHeight: 1.5 }}>
                Teams identify their own problem and find their own SME from within that part of the business.
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[
                  'Submit a one-paragraph problem statement before the round begins',
                  'Reviewed and approved or redirected within 48 hours',
                  'Team sources their own SME from within the business',
                ].map((t, i) => <Bullet key={i}>{t}</Bullet>)}
              </div>
            </div>
          </div>
        </div>

        <div style={{ flexShrink: 0, padding: `0 ${PX}px ${PB}px` }}>
          <div style={{
            background: WC.indigo50, border: `1px solid ${WC.indigo100}`,
            borderRadius: 10, padding: '16px 20px',
            fontSize: S.small, color: WC.indigo700, lineHeight: 1.4, fontWeight: 600, textAlign: 'center',
          }}>
            Both tracks compete on equal terms. Judging criteria do not favour either.
          </div>
        </div>
      </div>
    </Slide>
  );
}

function WC_QuarterlyRound() {
  const phases = [
    { week: 'Weeks 1–2', title: 'Foundation', activity: 'Teams confirmed, problem locked. Process improvement teams begin as-is documentation. Net new teams define the opportunity and how value will be measured.' },
    { week: 'Weeks 3–6', title: 'Build', activity: 'Solution designed and built with AI. First test run on real data or workflows. Mid-point check-in with the region manager.' },
    { week: 'Weeks 7–9', title: 'Results', activity: 'Solution running. Real results being gathered. Pitch preparation begins.' },
    { week: 'Weeks 10–12', title: 'Demo', activity: 'Region manager dry-run pitch. Final refinements. Demo Day.', highlight: true },
  ];
  return (
    <Slide bg={WC.surface} label="13 Quarterly Round">
      <Rail chapter="Structure" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 40 }}>
        <div>
          <div style={{ marginBottom: 14 }}><Tag>The quarter</Tag></div>
          <div style={{ fontSize: S.subtitle, fontWeight: 700, letterSpacing: '-0.02em', color: WC.ink }}>
            Each round runs across a full quarter — 10 to 12 weeks.
          </div>
          <div style={{ marginTop: 12, fontSize: S.small, color: WC.ink3, maxWidth: '64ch', lineHeight: 1.5 }}>
            Teams work part-time alongside their day jobs, with AI doing the heavy execution work. The quarter breaks into four phases.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, flex: 1 }}>
          {phases.map((w, i) => (
            <HoverLift key={i} dark={!!w.highlight} style={{
              background: w.highlight ? WC.indigo : WC.paper,
              border: `1px solid ${w.highlight ? WC.indigo : WC.line}`,
              borderRadius: 16, padding: '28px 26px',
              display: 'flex', flexDirection: 'column', gap: 14,
            }}>
              <div style={{ fontFamily: FM, fontSize: S.small, letterSpacing: '0.1em', textTransform: 'uppercase', color: w.highlight ? 'rgba(255,255,255,0.5)' : WC.ink4 }}>
                {w.week}
              </div>
              <div style={{ fontSize: S.subtitle, fontWeight: 700, color: w.highlight ? '#fff' : WC.ink, letterSpacing: '-0.01em', lineHeight: 1.1 }}>
                {w.title}
              </div>
              <div style={{ flex: 1, borderTop: `1px solid ${w.highlight ? 'rgba(255,255,255,0.2)' : WC.line}`, paddingTop: 14 }}>
                <div style={{ fontSize: S.small, lineHeight: 1.5, color: w.highlight ? 'rgba(255,255,255,0.78)' : WC.ink3 }}>
                  {w.activity}
                </div>
              </div>
            </HoverLift>
          ))}
        </div>

        <div style={{
          background: WC.paper, border: `1px solid ${WC.line}`,
          borderRadius: 12, padding: '18px 26px',
          display: 'flex', gap: 28, alignItems: 'center',
        }}>
          {[
            { n: '10', label: 'minutes to present', accent: true },
            { n: '5', label: 'minutes Q&A with the Dragons', accent: false },
          ].map((item, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div style={{ width: 1, height: 26, background: WC.line }} />}
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: item.accent ? WC.indigo : WC.indigo50,
                  border: item.accent ? 'none' : `1px solid ${WC.indigo100}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ color: item.accent ? '#fff' : WC.indigo, fontSize: S.small, fontWeight: 700 }}>{item.n}</span>
                </div>
                <div style={{ fontSize: S.small, color: WC.ink2, fontWeight: 600 }}>{item.label}</div>
              </div>
            </React.Fragment>
          ))}
          <div style={{ flex: 1 }} />
          <div style={{ fontSize: S.small, color: WC.ink4 }}>Demo Day format per team</div>
        </div>
      </div>
    </Slide>
  );
}

function WC_DeliverablesDivider() {
  return (
    <DividerSlide
      label="14 Deliverables"
      sectionNum="03"
      title={"What teams\nmust deliver."}
      subtitle="Three deliverables are mandatory for every team. A fourth applies depending on the type of solution."
      footer="Working Solution · Measured Results · The New State · As-Is or Opportunity"
    />
  );
}

function WC_WhatTeamsDeliver() {
  const mandatory = [
    { n: '01', title: 'The Working Solution', body: 'Built, deployed, and running. Not a prototype. Not a mockup. Something that actually worked during the round on real data or workflows.', accent: false },
    { n: '02', title: 'Measured Results', body: 'Quantified evidence of real value created. Time saved, errors reduced, cost removed, new capability demonstrated. The SME validates the numbers.', accent: true },
    { n: '03', title: 'The New State', body: 'A clear picture of how things now work with the AI solution in place — clear enough that someone outside the team could understand and operate it.', accent: false },
  ];
  return (
    <Slide bg={WC.paper} label="15 Four Deliverables">
      <Rail chapter="Deliverables" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
          <Tag>Mandatory for all teams</Tag>
          <div style={{ fontSize: S.small, color: WC.ink4, letterSpacing: '0.04em' }}>
            Missing any mandatory element disqualifies the submission.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, flex: 1 }}>
          {mandatory.map((d, i) => (
            <HoverLift key={i} dark={!!d.accent} style={{
              background: d.accent ? WC.indigo : WC.surface,
              border: `1px solid ${d.accent ? WC.indigo : WC.line}`,
              borderRadius: 16, padding: '28px 28px',
              display: 'flex', flexDirection: 'column', gap: 12,
            }}>
              <div style={{ fontFamily: FM, fontSize: S.small, fontWeight: 700, color: d.accent ? 'rgba(255,255,255,0.5)' : WC.indigo, letterSpacing: '0.1em' }}>
                {d.n}
              </div>
              <div style={{ fontSize: S.bodyS, fontWeight: 700, lineHeight: 1.2, color: d.accent ? '#fff' : WC.ink, letterSpacing: '-0.01em' }}>
                {d.title}
              </div>
              <div style={{ fontSize: S.small, lineHeight: 1.5, color: d.accent ? 'rgba(255,255,255,0.7)' : WC.ink3, flex: 1 }}>
                {d.body}
              </div>
            </HoverLift>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 8 }}>
          <Tag color={WC.ink2} bg={WC.paper2}>Plus one — depending on solution type</Tag>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
          <HoverLift style={{
            background: WC.surface, border: `1px solid ${WC.line}`,
            borderRadius: 16, padding: '24px 28px',
            display: 'flex', flexDirection: 'column', gap: 10,
          }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <div style={{ fontFamily: FM, fontSize: S.small, fontWeight: 700, color: WC.indigo, letterSpacing: '0.1em' }}>04A</div>
              <div style={{ fontFamily: FM, fontSize: S.small, color: WC.ink4, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Process improvement</div>
            </div>
            <div style={{ fontSize: S.bodyS, fontWeight: 700, lineHeight: 1.2, color: WC.ink, letterSpacing: '-0.01em' }}>
              As-Is Process Documentation
            </div>
            <div style={{ fontSize: S.small, lineHeight: 1.5, color: WC.ink3 }}>
              How did this process work before? Who did it, how long did it take, where were the pain points, what did it cost? The SME leads this — without it, the delta cannot be verified.
            </div>
          </HoverLift>
          <HoverLift style={{
            background: WC.surface, border: `1px solid ${WC.line}`,
            borderRadius: 16, padding: '24px 28px',
            display: 'flex', flexDirection: 'column', gap: 10,
          }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <div style={{ fontFamily: FM, fontSize: S.small, fontWeight: 700, color: WC.indigo, letterSpacing: '0.1em' }}>04B</div>
              <div style={{ fontFamily: FM, fontSize: S.small, color: WC.ink4, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Net new idea</div>
            </div>
            <div style={{ fontSize: S.bodyS, fontWeight: 700, lineHeight: 1.2, color: WC.ink, letterSpacing: '-0.01em' }}>
              Opportunity Definition
            </div>
            <div style={{ fontSize: S.small, lineHeight: 1.5, color: WC.ink3 }}>
              What gap or opportunity did the team identify? Why does it matter to the business? What was the evidence it was worth solving? Replaces the as-is for teams building something that didn't previously exist.
            </div>
          </HoverLift>
        </div>
      </div>
    </Slide>
  );
}

function WC_DragonsDen() {
  const dragons = [
    { title: 'The Business Dragon', desc: 'Senior Symphony leadership. Do the numbers stack up? Is this a real problem worth solving?', highlight: false },
    { title: 'The Technical Dragon', desc: 'Engineering or data leadership. Can this actually work? Is it robust? Does it scale?', highlight: false },
    { title: 'The Client Dragon', desc: 'Commercial leadership. Could this be packaged for clients? Would the market pay for it?', highlight: false },
    { title: 'The Wildcard Dragon', desc: 'Rotates each round. External guest, client, industry figure, or the previous round\'s winning team captain.', highlight: true },
  ];
  return (
    <Slide bg={WC.paper} label="16 Dragons Den">
      <Rail chapter="Judging" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 36 }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            <div style={{ marginBottom: 14 }}><Tag>The judging panel</Tag></div>
            <div style={{ fontSize: S.subtitle, fontWeight: 700, letterSpacing: '-0.02em', color: WC.ink }}>
              Four dragons. Four lenses.
            </div>
          </div>
          <div style={{
            background: WC.surface, border: `1px solid ${WC.line}`,
            borderRadius: 12, padding: '14px 22px', maxWidth: 380,
            fontSize: S.small, color: WC.ink3, lineHeight: 1.4,
          }}>
            <strong style={{ color: WC.ink }}>Grand Final:</strong> more senior panel + at least one external Dragon. Scores revealed only after every team has pitched.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, flex: 1 }}>
          {dragons.map((d, i) => (
            <HoverLift key={i} dark={!!d.highlight} style={{
              background: d.highlight ? WC.indigo : WC.surface,
              border: `1px solid ${d.highlight ? WC.indigo : WC.line}`,
              borderRadius: 16, padding: '28px 26px',
              display: 'flex', flexDirection: 'column', gap: 20,
            }}>
              <div style={{
                width: 48, height: 48, borderRadius: 14,
                background: d.highlight ? 'rgba(255,255,255,0.15)' : WC.indigo50,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: d.highlight ? '#fff' : WC.indigo }} />
              </div>
              <div>
                <div style={{ fontSize: S.bodyS, fontWeight: 700, color: d.highlight ? '#fff' : WC.ink, lineHeight: 1.2, marginBottom: 10 }}>
                  {d.title}
                </div>
                <div style={{ fontSize: S.small, color: d.highlight ? 'rgba(255,255,255,0.65)' : WC.ink3, lineHeight: 1.45 }}>
                  {d.desc}
                </div>
              </div>
            </HoverLift>
          ))}
        </div>
      </div>
    </Slide>
  );
}

function WC_RoundScoringCriteria() {
  const criteria = [
    { label: 'Measurable business impact', weight: 40, color: WC.indigo },
    { label: 'Clarity and credibility of the problem definition and baseline', weight: 20, color: WC.indigo600 },
    { label: 'AI innovation and creativity', weight: 25, color: '#8784FF' },
    { label: 'Presentation clarity', weight: 15, color: WC.indigo700 },
  ];
  return (
    <Slide bg={WC.surface} label="17 Round Scoring Criteria">
      <Rail chapter="Judging" />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '360px 1fr', gap: 96, alignItems: 'center' }}>
        <div>
          <div style={{ marginBottom: 20 }}><Tag>Round scoring</Tag></div>
          <div style={{ fontSize: S.subtitle, fontWeight: 700, letterSpacing: '-0.02em', color: WC.ink, marginBottom: 20 }}>
            Impact is everything.
          </div>
          <div style={{ fontSize: S.small, color: WC.ink3, lineHeight: 1.5, marginBottom: 18 }}>
            40% of the round score comes from measurable business impact. Real results, real data — no projections accepted.
          </div>
          <div style={{ fontSize: S.small, color: WC.ink4, lineHeight: 1.45 }}>
            The 20% criterion applies to both solution types: as-is documentation for process improvement, opportunity definition for net new ideas.
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {criteria.map((c, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 24 }}>
                <div style={{ fontSize: S.bodyS, fontWeight: 600, color: WC.ink, lineHeight: 1.3 }}>{c.label}</div>
                <div style={{ fontFamily: FM, fontSize: S.subtitle, fontWeight: 700, color: c.color, letterSpacing: '-0.02em', flexShrink: 0 }}>
                  {c.weight}%
                </div>
              </div>
              <div style={{ height: 8, background: WC.paper2, borderRadius: 999, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${c.weight}%`, background: c.color, borderRadius: 999 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

function WC_GrandFinalScoringCriteria() {
  const criteria = [
    { label: 'Credibility and scale of measured results', weight: 30, color: WC.indigo },
    { label: 'Business significance of the problem solved', weight: 25, color: '#8784FF' },
    { label: 'Scalability across the wider business', weight: 25, color: WC.indigo600 },
    { label: 'AI innovation and creativity', weight: 20, color: WC.indigo700 },
  ];
  return (
    <Slide bg={WC.paper} label="18 Grand Final Scoring">
      <Rail chapter="Judging" />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '360px 1fr', gap: 96, alignItems: 'center' }}>
        <div>
          <div style={{ marginBottom: 20 }}><Tag>Grand Final scoring</Tag></div>
          <div style={{ fontSize: S.subtitle, fontWeight: 700, letterSpacing: '-0.02em', color: WC.ink, marginBottom: 20 }}>
            The Final is judged differently.
          </div>
          <div style={{ fontSize: S.small, color: WC.ink3, lineHeight: 1.5, marginBottom: 18 }}>
            Round winners may have solved completely different problems. The Grand Final criteria assess the quality, significance, and scalability of each solution — not raw numbers compared head-to-head.
          </div>
          <div style={{ fontSize: S.small, color: WC.ink4, lineHeight: 1.45 }}>
            Top round ideas. Dragon judging plus Symphony staff vote. One champion.
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {criteria.map((c, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 24 }}>
                <div style={{ fontSize: S.bodyS, fontWeight: 600, color: WC.ink, lineHeight: 1.3 }}>{c.label}</div>
                <div style={{ fontFamily: FM, fontSize: S.subtitle, fontWeight: 700, color: c.color, letterSpacing: '-0.02em', flexShrink: 0 }}>
                  {c.weight}%
                </div>
              </div>
              <div style={{ height: 8, background: WC.paper2, borderRadius: 999, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${c.weight}%`, background: c.color, borderRadius: 999 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

function WC_SupportingTeams() {
  const supports = [
    { title: 'Pitch Framework', body: 'Every team receives a framework that tells them what the Dragons expect to see. It adapts to the problem type — as-is and delta for process improvement, opportunity and evidence for net new ideas.' },
    { title: 'Published Question Bank', body: "Likely Dragon questions shared upfront. No team should be disadvantaged because they didn't know what to expect." },
    { title: 'Region Manager Dry Run', body: "Before demo day every team pitches to their region manager, who plays Devil's Dragon — challenge the numbers, poke at feasibility." },
    { title: 'AI Pitch Preparation', body: 'Teams are explicitly encouraged to use AI to prepare. Simulate judge questions. Pressure-test the business case.' },
    { title: 'Post-Round Feedback', body: 'Every team, not just winners, receives written feedback from the Dragons within 48 hours. What worked, what would have changed the score.' },
  ];
  return (
    <Slide bg={WC.paper} label="19 Supporting Teams">
      <Rail chapter="Support" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div>
          <div style={{ marginBottom: 14 }}><Tag>How we set teams up to win</Tag></div>
          <div style={{ fontSize: S.subtitle, fontWeight: 700, letterSpacing: '-0.02em', color: WC.ink }}>
            Five ways we remove the guesswork.
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16, flex: 1 }}>
          {supports.map((s, i) => (
            <div key={i} style={{
              background: WC.surface, border: `1px solid ${WC.line}`,
              borderRadius: 14, padding: '26px 22px',
              display: 'flex', flexDirection: 'column', gap: 14,
            }}>
              <div style={{ fontFamily: FM, fontSize: S.small, fontWeight: 700, color: WC.indigo, letterSpacing: '0.1em' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div style={{ fontSize: S.small, fontWeight: 700, color: WC.ink, lineHeight: 1.2 }}>{s.title}</div>
              <div style={{ fontSize: S.small, color: WC.ink3, lineHeight: 1.5, flex: 1 }}>{s.body}</div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

function WC_GrandFinalEvent() {
  const formatItems = [
    { label: 'Pitch', value: '15 min', sub: 'extended format per team' },
    { label: 'Q&A', value: '7 min', sub: 'with the Dragon panel' },
    { label: 'Pitch order', value: 'Random draw', sub: 'on the day' },
    { label: 'Audience', value: 'Company-wide', sub: 'in person + livestream' },
    { label: 'Staff vote', value: 'Live vote', sub: 'Symphony employees pick their favourite' },
  ];
  const beats = [
    'Held in person where possible, with a company-wide livestream for those not attending',
    'Full Dragon panel including at least one external guest — a client, investor, or industry figure',
    'Top ideas generated during the rounds are presented — no new build required for the Final',
    'Dragons deliberate live, each naming their pick and reasoning publicly',
    'Symphony staff cast a live vote on their favourite final idea',
    'Final winner announced using Dragon scoring plus staff vote',
  ];
  return (
    <section
      data-screen-label="20 Grand Final Event"
      style={{
        width: '100%', height: '100%',
        background: GRAD_DARK, fontFamily: F, boxSizing: 'border-box',
        display: 'flex', flexDirection: 'column',
        padding: `${PT}px ${PX}px ${PB}px`,
        position: 'relative', overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', top: -260, right: -160,
        width: 800, height: 800, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.10) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 56 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 9, height: 9, borderRadius: '50%', background: 'rgba(255,255,255,0.6)' }} />
          <span style={{ fontFamily: FM, fontSize: S.small, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
            Symphony AI World Cup / The Grand Final
          </span>
        </div>
        <Tag color="rgba(255,255,255,0.9)" bg="rgba(255,255,255,0.15)">End of year</Tag>
      </div>

      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'center' }}>
        <div>
          <div style={{
            fontSize: S.title, fontWeight: 700,
            lineHeight: 1.05, letterSpacing: '-0.03em', color: '#fff', marginBottom: 24,
          }}>
            The centrepiece<br/>of the season.
          </div>
          <div style={{ fontSize: S.bodyS, color: 'rgba(255,255,255,0.65)', maxWidth: '40ch', lineHeight: 1.5, marginBottom: 32 }}>
            A company-wide event where the strongest ideas generated in the quarterly rounds compete for the championship. It is not a build round — no new solutions are required. Teams present what they built in-round, updated with any additional results gathered since.
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {formatItems.map((it, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 12, padding: '16px 20px',
              }}>
                <div style={{ fontFamily: FM, fontSize: S.small, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>
                  {it.label}
                </div>
                <div style={{ fontSize: S.bodyS, fontWeight: 700, color: '#fff', letterSpacing: '-0.01em', marginBottom: 4 }}>
                  {it.value}
                </div>
                <div style={{ fontSize: S.small, color: 'rgba(255,255,255,0.55)', lineHeight: 1.4 }}>
                  {it.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontFamily: FM, fontSize: S.small, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: 20 }}>
            How the night runs
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {beats.map((b, i) => (
              <div key={i} style={{
                display: 'flex', gap: 18, alignItems: 'flex-start',
                padding: '16px 0',
                borderBottom: i < beats.length - 1 ? '1px solid rgba(255,255,255,0.10)' : 'none',
              }}>
                <div style={{ fontFamily: FM, fontSize: S.small, fontWeight: 700, color: 'rgba(255,255,255,0.5)', flexShrink: 0, marginTop: 2, width: 24 }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div style={{ fontSize: S.small, color: 'rgba(255,255,255,0.85)', lineHeight: 1.45 }}>{b}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{
        display: 'flex', alignItems: 'center',
        paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.15)', marginTop: 32,
      }}>
        <div style={{ fontFamily: FM, fontSize: S.small, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          A genuine celebration of what the business built across the year
        </div>
      </div>
      <div style={{ position: 'absolute', top: PT, right: PX }}>
        <Logo dark />
      </div>
    </section>
  );
}

function WC_ThePrize() {
  const prizes = [
    { icon: '🏆', layer: 'Layer 01', title: 'The Trophy', body: "A physical, permanent trophy that lives with the winning team's region. Bragging rights that last beyond the season.", bg: WC.paper, borderColor: WC.line, dark: false },
    { icon: '🎁', layer: 'Layer 02', title: 'The Personal Prize', body: 'Something significant for each member of the Grand Final winning team. A trip, a learning budget, or tech gear — something worth competing hard for.', bg: WC.indigo50, borderColor: WC.indigo100, dark: false },
    { icon: '🚀', layer: 'Layer 03', title: 'The Real Prize', body: 'The winning solution gets resourced and actually implemented across the business. The winning team\'s SME leads adoption. This is the most powerful motivator.', bg: WC.indigo, borderColor: WC.indigo, dark: true },
  ];
  return (
    <Slide bg={WC.surface} label="21 The Prize">
      <Rail chapter="The Prize" />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 28 }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            <div style={{ marginBottom: 14 }}><Tag>What you win</Tag></div>
            <div style={{ fontSize: S.subtitle, fontWeight: 700, letterSpacing: '-0.02em', color: WC.ink }}>
              Two prizes. One season.
            </div>
          </div>
          <div style={{ fontSize: S.small, color: WC.ink3, lineHeight: 1.4, maxWidth: 380 }}>
            A round prize each quarter. A bigger Grand Final prize at the end of the year.
          </div>
        </div>

        <HoverLift style={{
          background: WC.paper, border: `1px solid ${WC.line}`,
          borderRadius: 16, padding: '22px 28px',
          display: 'flex', alignItems: 'center', gap: 28,
        }}>
          <div style={{
            width: 52, height: 52, borderRadius: 12, background: WC.indigo50,
            border: `1px solid ${WC.indigo100}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, flexShrink: 0,
          }}>
            🥇
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: FM, fontSize: S.small, letterSpacing: '0.1em', textTransform: 'uppercase', color: WC.ink4, marginBottom: 4 }}>
              Round Prize
            </div>
            <div style={{ fontSize: S.bodyS, fontWeight: 700, color: WC.ink, lineHeight: 1.2, marginBottom: 4 }}>
              Recognised and rewarded immediately.
            </div>
            <div style={{ fontSize: S.small, color: WC.ink3, lineHeight: 1.4 }}>
              A meaningful personal prize for each team member, plus a public company-wide announcement. Winning a round is a real achievement, not just a stepping stone.
            </div>
          </div>
        </HoverLift>

        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginTop: 4 }}>
          <Tag color={WC.ink2} bg={WC.paper2}>Grand Final Prize — three layers</Tag>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, flex: 1 }}>
          {prizes.map((p, i) => (
            <HoverLift key={i} dark={!!p.dark} style={{
              background: p.bg, border: `1px solid ${p.borderColor}`,
              borderRadius: 20, padding: '26px 28px',
              display: 'flex', flexDirection: 'column', gap: 12,
            }}>
              <div style={{ fontSize: 36 }}>{p.icon}</div>
              <div style={{ fontFamily: FM, fontSize: S.small, letterSpacing: '0.1em', textTransform: 'uppercase', color: p.dark ? 'rgba(255,255,255,0.4)' : WC.ink4 }}>
                {p.layer}
              </div>
              <div style={{ fontSize: S.bodyS, fontWeight: 700, color: p.dark ? '#fff' : WC.ink, lineHeight: 1.2 }}>
                {p.title}
              </div>
              <div style={{ fontSize: S.small, lineHeight: 1.5, color: p.dark ? 'rgba(255,255,255,0.72)' : WC.ink3, flex: 1 }}>
                {p.body}
              </div>
            </HoverLift>
          ))}
        </div>
      </div>
    </Slide>
  );
}

function WC_TimeCommitment() {
  return (
    <Slide bg={WC.paper} label="22 Time Commitment">
      <Rail chapter="Commitment" />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'center' }}>
        <div>
          <div style={{ marginBottom: 24 }}><Tag>Time commitment</Tag></div>
          <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.0, letterSpacing: '-0.04em', color: WC.ink, marginBottom: 22 }}>
            2–3 hrs<br />
            <span style={{ color: WC.indigo }}>per person</span><br />
            per week.
          </div>
          <div style={{ fontSize: S.bodyS, color: WC.ink3, lineHeight: 1.5, maxWidth: '36ch' }}>
            AI does the heavy execution work. The team's job is to direct it — not manually build everything from scratch.
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {[
            { title: 'This is legitimate work.', body: 'Participation in the AI World Cup is not an after-hours personal project. Leadership must visibly protect this time.', accent: false },
            { title: 'Region managers set the tone.', body: 'They communicate this clearly in their regions at the start of each season and hold the line throughout.', accent: false },
            { title: 'AI is mandatory — in the solution and how you build it.', body: 'Every team must use AI as a core part of their solution. How AI was used is part of the judging criteria.', accent: true },
          ].map((item, i) => (
            <div key={i} style={{
              background: item.accent ? WC.indigo50 : WC.surface,
              border: `1px solid ${item.accent ? WC.indigo100 : WC.line}`,
              borderRadius: 14, padding: '24px 28px',
            }}>
              <div style={{ fontSize: S.small, fontWeight: 700, color: item.accent ? WC.indigo : WC.ink, marginBottom: 8 }}>{item.title}</div>
              <div style={{ fontSize: S.small, color: item.accent ? WC.ink2 : WC.ink3, lineHeight: 1.45 }}>{item.body}</div>
            </div>
          ))}
        </div>
      </div>
    </Slide>
  );
}

function WC_CompoundingEffect() {
  return (
    <section
      data-screen-label="23 Compounding Effect"
      style={{
        width: '100%', height: '100%',
        background: GRAD_DARK, fontFamily: F, boxSizing: 'border-box',
        display: 'flex', flexDirection: 'column',
        padding: `${PT}px ${PX}px ${PB}px`,
        position: 'relative', overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', bottom: -320, right: -320,
        width: 900, height: 900, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 72 }}>
        <div style={{ fontFamily: FM, fontSize: S.small, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
          Symphony AI World Cup / The Long Game
        </div>
        <Logo dark />
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 52 }}>
        <div>
          <div style={{ fontSize: S.lead, color: 'rgba(255,255,255,0.35)', marginBottom: 16 }}>
            Every season leaves Symphony with more than a champion.
          </div>
          <div style={{ fontSize: S.title, fontWeight: 700, lineHeight: 1.05, letterSpacing: '-0.03em', color: '#fff' }}>
            The compounding effect.
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0 }}>
          {[
            ['A growing library', 'Documented business processes that survive beyond any one round.'],
            ['Working solutions', 'AI tools with proven results, ready to scale across the business.'],
            ['Capable people', 'A growing cohort who have shipped something real with AI.'],
            ['A story to tell', 'Measurable AI gains — powerful internally and externally over time.'],
          ].map(([title, body], i) => (
            <div key={i} style={{
              borderLeft: `1px solid rgba(255,255,255,${i === 0 ? '0.15' : '0.07'})`,
              background: i === 0 ? 'rgba(255,255,255,0.05)' : 'transparent',
              padding: '26px 30px',
            }}>
              <div style={{
                fontFamily: FM, fontSize: 64, lineHeight: 1,
                color: '#fff', letterSpacing: '-0.02em',
                fontWeight: 700, marginBottom: 18,
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div style={{ fontSize: S.bodyS, fontWeight: 600, color: '#fff', lineHeight: 1.2, marginBottom: 12 }}>{title}</div>
              <div style={{ fontSize: S.small, color: '#fff', lineHeight: 1.45 }}>{body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Mount all slides ────────────────────────────────────────────────────────

const SLIDES = [
  ['s1',  WC_Cover],
  ['s2',  WC_WhatIsIt],
  ['s3',  WC_Objectives],
  ['s4',  WC_SeasonStructure],
  ['s5',  WC_RoundEntry],
  ['s6',  WC_SeasonKickoff],
  ['s7',  WC_TeamsDivider],
  ['s8',  WC_TeamComposition],
  ['s9',  WC_SMERule],
  ['s10', WC_RegionalModel],
  ['s11', WC_CentralOwnership],
  ['s12', WC_ProblemSourcing],
  ['s13', WC_QuarterlyRound],
  ['s14', WC_DeliverablesDivider],
  ['s15', WC_WhatTeamsDeliver],
  ['s16', WC_DragonsDen],
  ['s17', WC_RoundScoringCriteria],
  ['s18', WC_GrandFinalScoringCriteria],
  ['s19', WC_SupportingTeams],
  ['s20', WC_GrandFinalEvent],
  ['s21', WC_ThePrize],
  ['s22', WC_TimeCommitment],
  ['s23', WC_CompoundingEffect],
];

SLIDES.forEach(([id, Component]) => {
  const el = document.getElementById(id);
  if (el) ReactDOM.createRoot(el).render(React.createElement(Component));
});
