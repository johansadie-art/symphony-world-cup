(() => {
  const WC = {
    indigo: "#6C69FF",
    indigo600: "#5754F2",
    indigo700: "#4441D9",
    indigo50: "#F2F1FF",
    indigo100: "#E4E3FF",
    indigo200: "#C9C7FF",
    indigo900: "#1B1A66",
    ink: "#0B0B14",
    ink2: "#2A2A38",
    ink3: "#5A5A6B",
    ink4: "#8A8A99",
    line: "#E6E6EC",
    line2: "#D8D8E0",
    paper: "#F6F6F9",
    paper2: "#EDEDF2",
    surface: "#FFFFFF"
  };
  const F = '"Poppins", system-ui, -apple-system, sans-serif';
  const FM = 'ui-monospace, "SF Mono", "JetBrains Mono", Menlo, Consolas, monospace';
  const MIN_FONT_PX = 18;
  const S = {
    displayXL: 112,
    display: 80,
    title: 64,
    subtitle: 44,
    lead: 34,
    body: 30,
    bodyS: 26,
    small: 24
  };
  const PX = 110;
  const PT = 88;
  const PB = 80;
  const GRAD_DARK = "linear-gradient(135deg, #6a6cf6 0%, #76a3fc 100%)";
  function Logo({ dark = false, size = 44 }) {
    return /* @__PURE__ */ React.createElement(
      "img",
      {
        src: dark ? "logo-white.png" : "logo-color.png",
        alt: "Symphony",
        style: { height: size, display: "block", objectFit: "contain" }
      }
    );
  }
  function Slide({ bg = WC.paper, pad = true, children, label, dark = false, noEnterAnimation = false }) {
    return /* @__PURE__ */ React.createElement(
      "section",
      {
        "data-screen-label": label,
        "data-deck-no-enter": noEnterAnimation ? "" : void 0,
        style: {
          width: "100%",
          height: "100%",
          background: bg,
          color: WC.ink,
          fontFamily: F,
          boxSizing: "border-box",
          padding: pad ? `${PT}px ${PX}px ${PB}px` : 0,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden"
        }
      },
      children,
      /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: PT, right: PX } }, /* @__PURE__ */ React.createElement(Logo, { dark }))
    );
  }
  function Rail({ chapter }) {
    return /* @__PURE__ */ React.createElement("div", { style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      marginBottom: 56
    } }, /* @__PURE__ */ React.createElement("div", { style: { width: 9, height: 9, borderRadius: "50%", background: WC.indigo, flexShrink: 0 } }), /* @__PURE__ */ React.createElement("span", { style: {
      fontFamily: FM,
      fontSize: S.small,
      fontWeight: 600,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: WC.ink2
    } }, "Symphony AI World Cup"), chapter && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("span", { style: { color: WC.line2, fontSize: S.small } }, "/"), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: FM, fontSize: S.small, letterSpacing: "0.08em", textTransform: "uppercase", color: WC.ink4 } }, chapter)));
  }
  function Tag({ children, color = WC.indigo, bg = WC.indigo50 }) {
    return /* @__PURE__ */ React.createElement("span", { style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "8px 16px",
      fontSize: S.small,
      fontWeight: 600,
      borderRadius: 999,
      background: bg,
      color,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      fontFamily: FM
    } }, children);
  }
  function HoverLift({ children, style = {}, dark = false }) {
    const [on, setOn] = React.useState(false);
    const shadow = dark ? "0 22px 50px rgba(0, 0, 0, 0.38)" : "0 18px 46px rgba(11, 11, 20, 0.14)";
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        onMouseEnter: () => setOn(true),
        onMouseLeave: () => setOn(false),
        style: {
          ...style,
          transition: "transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s ease",
          transform: on ? "translateY(-5px)" : "translateY(0)",
          boxShadow: on ? shadow : style.boxShadow ?? "none"
        }
      },
      children
    );
  }
  function Bullet({ children, size = S.small, color = WC.ink2 }) {
    const fontSize = Math.max(MIN_FONT_PX, size);
    return /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 16, alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("span", { style: {
      width: 7,
      height: 7,
      borderRadius: "50%",
      background: WC.indigo,
      flexShrink: 0,
      marginTop: fontSize * 0.38
    } }), /* @__PURE__ */ React.createElement("div", { style: { fontSize, color, lineHeight: 1.45 } }, children));
  }
  function DividerSlide({ sectionNum, title, subtitle, footer, label }) {
    return /* @__PURE__ */ React.createElement(
      "section",
      {
        "data-screen-label": label,
        style: {
          width: "100%",
          height: "100%",
          background: GRAD_DARK,
          fontFamily: F,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: `${PT}px ${PX}px ${PB}px`,
          position: "relative",
          overflow: "hidden"
        }
      },
      /* @__PURE__ */ React.createElement("div", { style: {
        position: "absolute",
        right: -60,
        bottom: -80,
        fontSize: 380,
        fontWeight: 900,
        color: "rgba(255,255,255,0.04)",
        lineHeight: 1,
        letterSpacing: "-0.05em",
        pointerEvents: "none",
        userSelect: "none"
      } }, sectionNum),
      /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: PT, right: PX } }, /* @__PURE__ */ React.createElement(Logo, { dark: true })),
      /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)" } }, "Section ", sectionNum),
      /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: {
        fontSize: S.displayXL,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: "-0.03em",
        color: "#fff",
        marginBottom: 24
      } }, title), subtitle && /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.lead, color: "rgba(255,255,255,0.5)", maxWidth: "40ch", lineHeight: 1.35 } }, subtitle)),
      /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.15)", paddingTop: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", textTransform: "uppercase" } }, footer))
    );
  }
  function WC_Cover() {
    return /* @__PURE__ */ React.createElement(
      "section",
      {
        "data-screen-label": "01 Cover",
        style: {
          width: "100%",
          height: "100%",
          background: GRAD_DARK,
          fontFamily: F,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
          boxSizing: "border-box"
        }
      },
      /* @__PURE__ */ React.createElement("div", { style: {
        position: "absolute",
        top: -200,
        right: -200,
        width: 900,
        height: 900,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
        pointerEvents: "none"
      } }),
      /* @__PURE__ */ React.createElement("div", { style: {
        position: "absolute",
        bottom: -280,
        left: -120,
        width: 700,
        height: 700,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
        pointerEvents: "none"
      } }),
      /* @__PURE__ */ React.createElement("div", { style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: `${PT}px ${PX}px ${PB}px`
      } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 9, height: 9, borderRadius: "50%", background: "rgba(255,255,255,0.6)" } }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: FM, fontSize: S.small, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" } }, "Symphony")), /* @__PURE__ */ React.createElement(Tag, { color: "rgba(255,255,255,0.9)", bg: "rgba(255,255,255,0.15)" }, "Season 01")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: {
        fontSize: S.displayXL,
        fontWeight: 700,
        lineHeight: 1,
        letterSpacing: "-0.035em",
        color: "#fff",
        marginBottom: 32
      } }, "Symphony AI", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: "rgba(255,255,255,0.6)" } }, "World Cup")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.lead, color: "rgba(255,255,255,0.5)", maxWidth: "38ch", lineHeight: 1.4, fontWeight: 400 } }, "Company-wide AI adoption, driven from the inside out.")), /* @__PURE__ */ React.createElement("div", { style: {
        display: "flex",
        alignItems: "center",
        paddingTop: 28,
        borderTop: "1px solid rgba(255,255,255,0.15)"
      } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", textTransform: "uppercase" } }, "Multi-disciplinary \xB7 Rounds \xB7 Grand Final"))),
      /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: PT, right: PX } }, /* @__PURE__ */ React.createElement(Logo, { dark: true }))
    );
  }
  function WC_WhatIsIt() {
    return /* @__PURE__ */ React.createElement(Slide, { bg: WC.paper, label: "02 What Is It" }, /* @__PURE__ */ React.createElement(Rail, { chapter: "Overview" }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: 96, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 24 } }, /* @__PURE__ */ React.createElement(Tag, null, "The initiative")), /* @__PURE__ */ React.createElement("div", { style: {
      fontSize: S.title,
      fontWeight: 700,
      lineHeight: 1.05,
      letterSpacing: "-0.03em",
      color: WC.ink
    } }, "Real problems.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: WC.indigo } }, "Real solutions."), /* @__PURE__ */ React.createElement("br", null), "Proven results.")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 28 } }, /* @__PURE__ */ React.createElement("p", { style: { fontSize: S.bodyS, lineHeight: 1.6, color: WC.ink2, margin: 0 } }, "A company-wide initiative designed to drive AI adoption from the inside out. Multi-disciplinary squads tackle real Symphony business problems using AI, competing across four rounds before a Grand Final Event where a champion is crowned."), /* @__PURE__ */ React.createElement("p", { style: { fontSize: S.small, lineHeight: 1.55, color: WC.ink3, margin: 0 } }, "Every squad that participates leaves something tangible behind: a documented business process or new solution, a working AI tool, and measured proof of value created."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 12, flexWrap: "wrap" } }, ["Documented process or opportunity", "Working AI solution", "Measured value"].map((t, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
      padding: "10px 18px",
      background: WC.surface,
      border: `1px solid ${WC.line}`,
      borderRadius: 8,
      fontSize: S.small,
      fontWeight: 600,
      color: WC.ink3,
      letterSpacing: "0.02em"
    } }, t))))));
  }
  function WC_Objectives() {
    const items = [
      ["Accelerate AI adoption", "Drive usage across the entire business, not just tech."],
      ["Surface real inefficiencies", "Find and fix operational pain points with AI."],
      ["Build a process library", "Company-wide, documented, growing every season."],
      ["Create compounding value", "Measurable incremental gains that stack over time."],
      ["Develop AI capability", "Across all disciplines \u2014 not just engineering."]
    ];
    return /* @__PURE__ */ React.createElement(Slide, { bg: WC.surface, label: "03 Objectives" }, /* @__PURE__ */ React.createElement(Rail, { chapter: "Objectives" }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "grid", gridTemplateColumns: "320px 1fr", gap: 96, alignItems: "start" } }, /* @__PURE__ */ React.createElement("div", { style: { paddingTop: 4 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.title, fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", color: WC.ink } }, "Five", /* @__PURE__ */ React.createElement("br", null), "goals."), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 24, fontSize: S.small, lineHeight: 1.5, color: WC.ink3 } }, "Every season advances all five simultaneously.")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column" } }, items.map(([title, body], i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
      display: "flex",
      gap: 28,
      alignItems: "flex-start",
      padding: "22px 0",
      borderBottom: i < items.length - 1 ? `1px solid ${WC.line}` : "none"
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, fontWeight: 700, color: WC.indigo, flexShrink: 0, marginTop: 3, width: 28 } }, String(i + 1).padStart(2, "0")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.bodyS, fontWeight: 600, color: WC.ink, marginBottom: 4 } }, title), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink3, lineHeight: 1.4 } }, body)))))));
  }
  function WC_SeasonStructure() {
    const rounds = [
      { label: "Round 1", title: "Round 1", desc: "Top three solutions advance to the Grand Final.", n: "01" },
      { label: "Round 2", title: "Round 2", desc: "Top three solutions advance to the Grand Final.", n: "02" },
      { label: "Round 3", title: "Round 3", desc: "Top three solutions advance to the Grand Final.", n: "03" },
      { label: "Round 4", title: "Round 4", desc: "Top three solutions complete the finalist lineup.", n: "04" },
      { label: "End of Year", title: "Grand Final", desc: "Up to 12 finalists compete. Champion crowned.", highlight: true }
    ];
    return /* @__PURE__ */ React.createElement(Slide, { bg: WC.paper, label: "04 Season Structure" }, /* @__PURE__ */ React.createElement(Rail, { chapter: "Season" }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 56 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.title, fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", color: WC.ink } }, "Four rounds.", /* @__PURE__ */ React.createElement("br", null), "One champion."), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16, fontSize: S.small, color: WC.ink3, maxWidth: "60ch", lineHeight: 1.45 } }, "A season runs over a full year. Each round generates high-value ideas and solutions. At the Grand Final Event, the top ideas from the rounds are compared head-to-head. It is a standalone end-of-year event, not a build round.")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 0, position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      top: 27,
      left: 27,
      right: 27,
      height: 2,
      background: `linear-gradient(to right, ${WC.indigo}, ${WC.indigo})`,
      zIndex: 0
    } }), rounds.map((m, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { flex: 1, position: "relative", zIndex: 1, paddingRight: 12 } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 54,
      height: 54,
      borderRadius: "50%",
      background: m.highlight ? WC.indigo : WC.surface,
      border: `3px solid ${WC.indigo}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 28,
      boxShadow: m.highlight ? `0 0 0 8px ${WC.indigo100}` : "none"
    } }, m.highlight ? /* @__PURE__ */ React.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M10 2l2.2 5.8H18l-4.8 3.5 1.8 6L10 14l-5 3.3 1.8-6L2 7.8h5.8z", fill: "#fff" })) : /* @__PURE__ */ React.createElement("span", { style: { fontFamily: FM, fontSize: S.small, fontWeight: 700, color: WC.indigo } }, m.n)), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, letterSpacing: "0.08em", textTransform: "uppercase", color: WC.ink4, marginBottom: 8 } }, m.label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.subtitle, fontWeight: 700, color: m.highlight ? WC.indigo : WC.ink, letterSpacing: "-0.01em", lineHeight: 1.1, marginBottom: 10 } }, m.title), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink3, lineHeight: 1.4, maxWidth: "22ch" } }, m.desc))))));
  }
  function WC_LeagueTable() {
    const rows = [
      ["Updated after every Match Day", "Round standings and scores are published within 48 hours."],
      ["Visible to the whole company", "Every region sees who is active, advancing, and improving."],
      ["Not a prize mechanism", "There is no prize for topping the table. It drives visibility and momentum."],
      ["Tracks season progression", "Shows top-performing squads and how many solutions each region has advanced."]
    ];
    return /* @__PURE__ */ React.createElement(Slide, { bg: WC.surface, label: "05 League Table" }, /* @__PURE__ */ React.createElement(Rail, { chapter: "Season" }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: 88, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement(Tag, null, "Visibility mechanic")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.title, fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", color: WC.ink, marginBottom: 18 } }, "The League", /* @__PURE__ */ React.createElement("br", null), "Table."), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink3, lineHeight: 1.5, maxWidth: "38ch" } }, "A running season table keeps squads, leaders, and regions aligned on progress between rounds.")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column" } }, rows.map(([title, body], i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
      display: "flex",
      gap: 18,
      alignItems: "flex-start",
      padding: "18px 0",
      borderBottom: i < rows.length - 1 ? `1px solid ${WC.line}` : "none"
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, fontWeight: 700, color: WC.indigo, width: 24, marginTop: 2 } }, String(i + 1).padStart(2, "0")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.bodyS, fontWeight: 700, color: WC.ink, marginBottom: 4 } }, title), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink3, lineHeight: 1.45 } }, body)))))));
  }
  function WC_RoundEntry() {
    const cards = [
      {
        n: "01",
        title: "Enter any round",
        body: "Squads may enter any round and as many rounds as they choose throughout the season."
      },
      {
        n: "02",
        title: "Different problem each time",
        body: "A squad that enters multiple rounds must bring a different problem to each one. No repeats.",
        accent: true
      },
      {
        n: "03",
        title: "Keep entering after wins",
        body: "Squads can continue entering later rounds with new problems, even after a round win. The goal is to solve as many business problems as possible."
      }
    ];
    return /* @__PURE__ */ React.createElement(Slide, { bg: WC.surface, label: "06 Round Entry" }, /* @__PURE__ */ React.createElement(Rail, { chapter: "Season" }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 56 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement(Tag, null, "Round entry")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.title, fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", color: WC.ink } }, "Enter any round.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: WC.indigo } }, "Different problem"), " each time."), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16, fontSize: S.small, color: WC.ink3, maxWidth: "60ch", lineHeight: 1.45 } }, "Squads aren't capped at one entry per season. Bring a fresh problem each round and keep solving throughout the year.")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22, flex: 1 } }, cards.map((c, i) => /* @__PURE__ */ React.createElement(HoverLift, { key: i, dark: !!c.accent, style: {
      background: c.accent ? WC.indigo : WC.paper,
      border: `1px solid ${c.accent ? WC.indigo : WC.line}`,
      borderRadius: 16,
      padding: "32px 30px",
      display: "flex",
      flexDirection: "column",
      gap: 16
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, fontWeight: 700, color: c.accent ? "rgba(255,255,255,0.5)" : WC.indigo, letterSpacing: "0.1em" } }, c.n), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.bodyS, fontWeight: 700, color: c.accent ? "#fff" : WC.ink, lineHeight: 1.2, letterSpacing: "-0.01em" } }, c.title), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: c.accent ? "rgba(255,255,255,0.72)" : WC.ink3, lineHeight: 1.5, flex: 1 } }, c.body))))));
  }
  function WC_SeasonKickoff() {
    const phases = [
      { label: "T-6 weeks", title: "Announce", desc: "Central owner announces the new season company-wide. Pitch Board opens for department submissions. Region managers briefed. Squad Coaches recruited." },
      { label: "T-4 weeks", title: "Scope", desc: "Pitch Board closes. Leadership validates and scopes entries. Final Pitch Board published." },
      { label: "T-2 weeks", title: "Register", desc: "Squad registration opens. Matching pool opens for individuals without a squad. Track B submissions accepted." },
      { label: "T-1 week", title: "Finalise", desc: "Track B submissions reviewed and answered within 48 hours. Squad rosters finalised and submitted to region managers. Squad Coaches assigned." },
      { label: "Day 1", title: "Round 1 begins", desc: "The season is live. Squads begin Foundation phase.", highlight: true }
    ];
    return /* @__PURE__ */ React.createElement(Slide, { bg: WC.paper, label: "07 Season Kickoff", noEnterAnimation: true }, /* @__PURE__ */ React.createElement(Rail, { chapter: "Season" }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 56 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement(Tag, null, "Season kickoff")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.title, fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", color: WC.ink } }, "Six weeks to launch."), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 16, fontSize: S.small, color: WC.ink3, maxWidth: "60ch", lineHeight: 1.45 } }, "Each season follows a defined launch sequence so problems, squads, and coaches are all in place before Round 1 begins.")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 0, position: "relative" } }, /* @__PURE__ */ React.createElement("div", { style: {
      position: "absolute",
      top: 27,
      left: 27,
      right: 27,
      height: 2,
      background: `linear-gradient(to right, ${WC.indigo}, ${WC.indigo})`,
      zIndex: 0
    } }), phases.map((m, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { flex: 1, position: "relative", zIndex: 1, paddingRight: 12 } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 54,
      height: 54,
      borderRadius: "50%",
      background: m.highlight ? WC.indigo : WC.surface,
      border: `3px solid ${WC.indigo}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 28,
      boxShadow: m.highlight ? `0 0 0 8px ${WC.indigo100}` : "none"
    } }, m.highlight ? /* @__PURE__ */ React.createElement("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none" }, /* @__PURE__ */ React.createElement("path", { d: "M5 9l3 3 5-6", stroke: "#fff", strokeWidth: "2.4", strokeLinecap: "round", strokeLinejoin: "round" })) : /* @__PURE__ */ React.createElement("span", { style: { fontFamily: FM, fontSize: S.small, fontWeight: 700, color: WC.indigo } }, String(i + 1).padStart(2, "0"))), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, letterSpacing: "0.08em", textTransform: "uppercase", color: WC.ink4, marginBottom: 8 } }, m.label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.lead, fontWeight: 700, color: m.highlight ? WC.indigo : WC.ink, letterSpacing: "-0.01em", lineHeight: 1.1, marginBottom: 10 } }, m.title), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink3, lineHeight: 1.45, maxWidth: "24ch" } }, m.desc))))));
  }
  function WC_TeamsDivider() {
    return /* @__PURE__ */ React.createElement(
      DividerSlide,
      {
        label: "08 Squads",
        sectionNum: "02",
        title: "Build the\nright squad.",
        subtitle: "Every squad must span four disciplines. No exceptions.",
        footer: "Design \xB7 Product \xB7 Engineering or Data \xB7 Business SME"
      }
    );
  }
  function WC_TeamComposition() {
    const disciplines = [
      { name: "Design", icon: "\u25C8", desc: "Ensures the solution is usable and will actually be adopted.", color: "#8784FF" },
      { name: "Product", icon: "\u25CE", desc: "Ensures the solution solves the right problem and impact is measurable.", color: WC.indigo },
      { name: "Engineering\nor Data", icon: "{ }", desc: "Ensures the solution is technically feasible and robust.", color: WC.indigo600 },
      { name: "Business SME", icon: "\u25C9", desc: "Domain expert who validates the problem and signs off on results.", color: WC.indigo700 }
    ];
    return /* @__PURE__ */ React.createElement(Slide, { bg: WC.surface, label: "09 Squad Composition" }, /* @__PURE__ */ React.createElement(Rail, { chapter: "Squads" }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 36 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-end", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement(Tag, null, "Composition")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.subtitle, fontWeight: 700, letterSpacing: "-0.02em", color: WC.ink } }, "Four disciplines. Four to five players.")), /* @__PURE__ */ React.createElement("div", { style: {
      background: WC.indigo50,
      border: `1px solid ${WC.indigo100}`,
      borderRadius: 12,
      padding: "14px 24px",
      fontSize: S.small,
      color: WC.indigo700,
      fontWeight: 600
    } }, "Min 4 \xB7 Max 5")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, flex: 1 } }, disciplines.map((d, i) => /* @__PURE__ */ React.createElement(HoverLift, { key: i, style: {
      background: WC.paper,
      border: `1px solid ${WC.line}`,
      borderTop: `4px solid ${d.color}`,
      borderRadius: 16,
      padding: "30px 26px",
      display: "flex",
      flexDirection: "column",
      gap: 18,
      boxShadow: "0 2px 12px rgba(11,11,20,0.06), 0 1px 3px rgba(11,11,20,0.04)"
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 34, lineHeight: 1, fontFamily: FM } }, d.icon), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.bodyS, fontWeight: 700, color: WC.ink, lineHeight: 1.2 } }, d.name), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink3, lineHeight: 1.45, flex: 1 } }, d.desc)))), /* @__PURE__ */ React.createElement("div", { style: {
      background: WC.indigo50,
      borderRadius: 12,
      padding: "16px 24px",
      fontSize: S.small,
      color: WC.indigo700,
      lineHeight: 1.4
    } }, /* @__PURE__ */ React.createElement("strong", null, "If a discipline is missing:"), " Region managers run a volunteer matching pool. As a last resort, one discipline (never more) may be substituted with AI \u2014 but the squad must demonstrate how during their pitch.")));
  }
  function WC_SMERule() {
    const points = [
      ["Brings domain knowledge", "The as-is process lives in their head. Nobody else can document or describe it credibly."],
      ["Validates the results", "They sign off that the measured numbers are genuine, not projected or modelled."],
      ["Champions the rollout", "After the competition, they become the natural owner for scaling the solution within their part of the business."],
      ["Inherits Pitch Board problems", "The person who submitted a problem becomes the SME for whichever squad picks it."]
    ];
    return /* @__PURE__ */ React.createElement(Slide, { bg: WC.paper, label: "10 The SME Rule" }, /* @__PURE__ */ React.createElement(Rail, { chapter: "Squads" }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 24 } }, /* @__PURE__ */ React.createElement(Tag, null, "Core role")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.title, fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", color: WC.ink, marginBottom: 24 } }, "The SME is not an advisor."), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.bodyS, color: WC.ink3, lineHeight: 1.5, marginBottom: 28 } }, "They are a core squad member \u2014 the domain expert no other discipline can replace."), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 } }, /* @__PURE__ */ React.createElement("div", { style: {
      background: WC.surface,
      border: `1px solid ${WC.line}`,
      borderRadius: 12,
      padding: "16px 18px"
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, fontWeight: 700, color: WC.indigo, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 } }, "Process improvement"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink3, lineHeight: 1.45 } }, "Documents the as-is state and validates that the measured delta is real.")), /* @__PURE__ */ React.createElement("div", { style: {
      background: WC.surface,
      border: `1px solid ${WC.line}`,
      borderRadius: 12,
      padding: "16px 18px"
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, fontWeight: 700, color: WC.indigo, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 } }, "Net new idea"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink3, lineHeight: 1.45 } }, "Acts as the business authority \u2014 the opportunity is genuine, the value is real.")))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 22 } }, points.map(([title, body], i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", gap: 18, alignItems: "flex-start" } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: WC.indigo50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    } }, /* @__PURE__ */ React.createElement("div", { style: { width: 8, height: 8, borderRadius: "50%", background: WC.indigo } })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, fontWeight: 600, color: WC.ink, marginBottom: 4 } }, title), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink3, lineHeight: 1.45 } }, body)))))));
  }
  function WC_SquadCoach() {
    const points = [
      "Coach meets the squad at the start of the round to sharpen scope and outcomes.",
      "Coach is available throughout the build as a sounding board for decisions.",
      "Coach runs The Friendly before Match Day to pressure-test assumptions and numbers.",
      "Coach helps advocate for high-potential solutions beyond the competition."
    ];
    return /* @__PURE__ */ React.createElement(Slide, { bg: WC.surface, label: "11 Squad Coach" }, /* @__PURE__ */ React.createElement(Rail, { chapter: "Squads" }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 88, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement(Tag, null, "Performance support")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.title, fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", color: WC.ink, marginBottom: 18 } }, "Every squad has", /* @__PURE__ */ React.createElement("br", null), "a Squad Coach."), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink3, lineHeight: 1.5, maxWidth: "38ch" } }, "The Squad Coach is a senior employee who is not a player on the squad. Their role is mentoring and performance support.")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column" } }, points.map((point, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
      display: "flex",
      gap: 18,
      alignItems: "flex-start",
      padding: "18px 0",
      borderBottom: i < points.length - 1 ? `1px solid ${WC.line}` : "none"
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, fontWeight: 700, color: WC.indigo, width: 24, marginTop: 2 } }, String(i + 1).padStart(2, "0")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink2, lineHeight: 1.45 } }, point))))));
  }
  function WC_RegionalModel() {
    const duties = [
      "Drive squad recruitment and ensure every squad is properly formed before the round begins",
      "Facilitate the matching pool to connect squads with missing disciplines",
      "Maintain momentum \u2014 Slack updates, shoutouts, keeping the energy up throughout",
      "Coordinate Squad Coach assignments and keep coaching support in place throughout the round",
      "Show up publicly and visibly on Match Day to champion their squads"
    ];
    return /* @__PURE__ */ React.createElement(Slide, { bg: WC.surface, label: "12 Regional Model" }, /* @__PURE__ */ React.createElement(Rail, { chapter: "Organisation" }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 96, alignItems: "start" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 20 } }, /* @__PURE__ */ React.createElement(Tag, null, "Region managers")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.subtitle, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", color: WC.ink, marginBottom: 20 } }, "Organisers and champions.", /* @__PURE__ */ React.createElement("br", null), "Not competitors."), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink3, lineHeight: 1.5, marginBottom: 28 } }, "No regional leaderboard. All squads compete in one global pool regardless of where they are based."), /* @__PURE__ */ React.createElement("div", { style: {
      background: WC.indigo50,
      border: `1px solid ${WC.indigo100}`,
      borderRadius: 12,
      padding: "18px 22px"
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, fontWeight: 700, color: WC.indigo, marginBottom: 8 } }, "The recognition"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink2, lineHeight: 1.4 } }, "If a squad from a region wins, that is the region manager's moment too. Their region produced the champion \u2014 recognised publicly."))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, letterSpacing: "0.1em", textTransform: "uppercase", color: WC.ink4, marginBottom: 20 } }, "Responsibilities"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column" } }, duties.map((d, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
      display: "flex",
      gap: 20,
      alignItems: "flex-start",
      padding: "18px 0",
      borderBottom: i < duties.length - 1 ? `1px solid ${WC.line}` : "none"
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, fontWeight: 700, color: WC.indigo, flexShrink: 0, marginTop: 2, width: 24 } }, String(i + 1).padStart(2, "0")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink2, lineHeight: 1.45 } }, d)))))));
  }
  function WC_CentralOwnership() {
    const responsibilities = [
      "Maintain and publish the Pitch Board before each season",
      "Run the Track B approval panel for open pitch submissions",
      "Set and communicate judging criteria and the pitch framework each round",
      "Organise Match Days and the Grand Final Event",
      "Publish results, scores, and Match Reports after each round",
      "Oversee fast-track implementation of winning solutions",
      "Evolve the rules and format between seasons based on what is learned"
    ];
    return /* @__PURE__ */ React.createElement(Slide, { bg: WC.paper, label: "13 Central Ownership" }, /* @__PURE__ */ React.createElement(Rail, { chapter: "Organisation" }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 96, alignItems: "start" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 20 } }, /* @__PURE__ */ React.createElement(Tag, null, "Central ownership")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.subtitle, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", color: WC.ink, marginBottom: 20 } }, "Owned centrally.", /* @__PURE__ */ React.createElement("br", null), "Run regionally."), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink3, lineHeight: 1.5, marginBottom: 28 } }, "The AI World Cup is owned by the Community of Practice lead, who is accountable for the initiative across all seasons."), /* @__PURE__ */ React.createElement("div", { style: {
      background: WC.indigo50,
      border: `1px solid ${WC.indigo100}`,
      borderRadius: 12,
      padding: "18px 22px"
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, fontWeight: 700, color: WC.indigo, marginBottom: 8 } }, "Region managers, defined"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink2, lineHeight: 1.4 } }, "Region managers operate within the framework the central owner sets. They don't make structural decisions \u2014 those sit centrally."))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, letterSpacing: "0.1em", textTransform: "uppercase", color: WC.ink4, marginBottom: 20 } }, "What the central owner does"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column" } }, responsibilities.map((d, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
      display: "flex",
      gap: 20,
      alignItems: "flex-start",
      padding: "16px 0",
      borderBottom: i < responsibilities.length - 1 ? `1px solid ${WC.line}` : "none"
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, fontWeight: 700, color: WC.indigo, flexShrink: 0, marginTop: 2, width: 24 } }, String(i + 1).padStart(2, "0")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink2, lineHeight: 1.45 } }, d)))))));
  }
  function WC_ProblemSourcing() {
    const trackBody = {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: 24,
      minHeight: 0
    };
    const trackShell = {
      padding: `0 ${PX}px`,
      paddingBottom: PB,
      display: "flex",
      flexDirection: "column",
      background: WC.surface,
      height: "100%",
      minHeight: 0
    };
    return /* @__PURE__ */ React.createElement(Slide, { bg: WC.paper, label: "14 Problem Sourcing", pad: false }, /* @__PURE__ */ React.createElement("div", { style: { height: "100%", display: "flex", flexDirection: "column" } }, /* @__PURE__ */ React.createElement("div", { style: { flexShrink: 0, paddingTop: PT, paddingLeft: PX, paddingRight: PX, paddingBottom: 40 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, letterSpacing: "0.1em", textTransform: "uppercase", color: WC.ink4 } }, "Symphony AI World Cup / Problem Sourcing")), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 0, alignItems: "stretch" } }, /* @__PURE__ */ React.createElement("div", { style: { ...trackShell, borderRight: `1px solid ${WC.line2}` } }, /* @__PURE__ */ React.createElement("div", { style: trackBody }, /* @__PURE__ */ React.createElement(Tag, null, "Track A"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.subtitle, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", color: WC.ink } }, "The Pitch Board"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.bodyS, color: WC.ink2, lineHeight: 1.5 } }, "A curated backlog of real Symphony business problems compiled and maintained by leadership."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } }, [
      "Pre-validated and scoped to a single round",
      "Comes with a named SME attached",
      "Squad picks a problem; that SME joins the squad"
    ].map((t, i) => /* @__PURE__ */ React.createElement(Bullet, { key: i }, t))))), /* @__PURE__ */ React.createElement("div", { style: { ...trackShell, borderRight: "none" } }, /* @__PURE__ */ React.createElement("div", { style: trackBody }, /* @__PURE__ */ React.createElement(Tag, null, "Track B"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.subtitle, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", color: WC.ink } }, "Open Pitch"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.bodyS, color: WC.ink2, lineHeight: 1.5 } }, "Squads identify their own problem and find their own SME from within that part of the business."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 14 } }, [
      "Submit a one-paragraph problem statement before the round begins",
      "Reviewed and approved or redirected within 48 hours",
      "Squad sources their own SME from within the business"
    ].map((t, i) => /* @__PURE__ */ React.createElement(Bullet, { key: i }, t)))))), /* @__PURE__ */ React.createElement("div", { style: { flexShrink: 0, padding: `0 ${PX}px ${PB}px` } }, /* @__PURE__ */ React.createElement("div", { style: {
      background: WC.indigo50,
      border: `1px solid ${WC.indigo100}`,
      borderRadius: 10,
      padding: "16px 20px",
      fontSize: S.small,
      color: WC.indigo700,
      lineHeight: 1.4,
      fontWeight: 600,
      textAlign: "center"
    } }, "Both tracks compete on equal terms. Judging criteria do not favour either."))));
  }
  function WC_QuarterlyRound() {
    const phases = [
      { week: "Weeks 1\u20132", title: "Foundation", activity: "Squads confirmed, problem locked. Process improvement squads begin as-is documentation. Net new squads define the opportunity and how value will be measured. Squad Coach intro session." },
      { week: "Weeks 3\u20136", title: "Build", activity: "Solution designed and built with AI. First test run on real data or workflows. Mid-point check-in with the region manager." },
      { week: "Weeks 7\u20139", title: "Results", activity: "Solution running. Real results being gathered. Pitch preparation begins." },
      { week: "Weeks 10\u201312", title: "Match Prep", activity: "The Friendly with Squad Coach. Final refinements. Match Day.", highlight: true }
    ];
    return /* @__PURE__ */ React.createElement(Slide, { bg: WC.surface, label: "15 The Round" }, /* @__PURE__ */ React.createElement(Rail, { chapter: "Structure" }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 40 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement(Tag, null, "The round")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.subtitle, fontWeight: 700, letterSpacing: "-0.02em", color: WC.ink } }, "Each round runs for approximately 10 to 12 weeks."), /* @__PURE__ */ React.createElement("div", { style: { marginTop: 12, fontSize: S.small, color: WC.ink3, maxWidth: "64ch", lineHeight: 1.5 } }, "Squads work part-time alongside their day jobs, with AI doing the heavy execution work. The round breaks into four phases.")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18, flex: 1 } }, phases.map((w, i) => /* @__PURE__ */ React.createElement(HoverLift, { key: i, dark: !!w.highlight, style: {
      background: w.highlight ? WC.indigo : WC.paper,
      border: `1px solid ${w.highlight ? WC.indigo : WC.line}`,
      borderRadius: 16,
      padding: "28px 26px",
      display: "flex",
      flexDirection: "column",
      gap: 14
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, letterSpacing: "0.1em", textTransform: "uppercase", color: w.highlight ? "rgba(255,255,255,0.5)" : WC.ink4 } }, w.week), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.subtitle, fontWeight: 700, color: w.highlight ? "#fff" : WC.ink, letterSpacing: "-0.01em", lineHeight: 1.1 } }, w.title), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, borderTop: `1px solid ${w.highlight ? "rgba(255,255,255,0.2)" : WC.line}`, paddingTop: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, lineHeight: 1.5, color: w.highlight ? "rgba(255,255,255,0.78)" : WC.ink3 } }, w.activity))))), /* @__PURE__ */ React.createElement("div", { style: {
      background: WC.paper,
      border: `1px solid ${WC.line}`,
      borderRadius: 12,
      padding: "18px 26px",
      display: "flex",
      gap: 28,
      alignItems: "center"
    } }, [
      { n: "10", label: "minutes to present", accent: true },
      { n: "5", label: "minutes Q&A with the Scouts", accent: false }
    ].map((item, i) => /* @__PURE__ */ React.createElement(React.Fragment, { key: i }, i > 0 && /* @__PURE__ */ React.createElement("div", { style: { width: 1, height: 26, background: WC.line } }), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 10, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 36,
      height: 36,
      borderRadius: 8,
      background: item.accent ? WC.indigo : WC.indigo50,
      border: item.accent ? "none" : `1px solid ${WC.indigo100}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    } }, /* @__PURE__ */ React.createElement("span", { style: { color: item.accent ? "#fff" : WC.indigo, fontSize: S.small, fontWeight: 700 } }, item.n)), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink2, fontWeight: 600 } }, item.label)))), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink4 } }, "Match Day format per squad"))));
  }
  function WC_DeliverablesDivider() {
    return /* @__PURE__ */ React.createElement(
      DividerSlide,
      {
        label: "16 Deliverables",
        sectionNum: "03",
        title: "What squads\nmust deliver.",
        subtitle: "Three deliverables are mandatory for every squad. A fourth applies depending on the type of solution.",
        footer: "Working Solution \xB7 Measured Results \xB7 The New State \xB7 As-Is or Opportunity"
      }
    );
  }
  function WC_WhatTeamsDeliver() {
    const mandatory = [
      { n: "01", title: "The Working Solution", body: "Built, deployed, and running. Not a prototype. Not a mockup. Something that actually worked during the round on real data or workflows.", accent: false },
      { n: "02", title: "Measured Results", body: "Quantified evidence of real value created. Time saved, errors reduced, cost removed, new capability demonstrated. The SME validates the numbers.", accent: true },
      { n: "03", title: "The New State", body: "A clear picture of how things now work with the AI solution in place \u2014 clear enough that someone outside the squad could understand and operate it.", accent: false }
    ];
    return /* @__PURE__ */ React.createElement(Slide, { bg: WC.paper, label: "17 Four Deliverables" }, /* @__PURE__ */ React.createElement(Rail, { chapter: "Deliverables" }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 18 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement(Tag, null, "Mandatory for all squads"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink4, letterSpacing: "0.04em" } }, "Missing any mandatory element disqualifies the submission.")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, flex: 1 } }, mandatory.map((d, i) => /* @__PURE__ */ React.createElement(HoverLift, { key: i, dark: !!d.accent, style: {
      background: d.accent ? WC.indigo : WC.surface,
      border: `1px solid ${d.accent ? WC.indigo : WC.line}`,
      borderRadius: 16,
      padding: "28px 28px",
      display: "flex",
      flexDirection: "column",
      gap: 12
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, fontWeight: 700, color: d.accent ? "rgba(255,255,255,0.5)" : WC.indigo, letterSpacing: "0.1em" } }, d.n), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.bodyS, fontWeight: 700, lineHeight: 1.2, color: d.accent ? "#fff" : WC.ink, letterSpacing: "-0.01em" } }, d.title), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, lineHeight: 1.5, color: d.accent ? "rgba(255,255,255,0.7)" : WC.ink3, flex: 1 } }, d.body)))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", marginTop: 8 } }, /* @__PURE__ */ React.createElement(Tag, { color: WC.ink2, bg: WC.paper2 }, "Plus one \u2014 depending on solution type")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18 } }, /* @__PURE__ */ React.createElement(HoverLift, { style: {
      background: WC.surface,
      border: `1px solid ${WC.line}`,
      borderRadius: 16,
      padding: "24px 28px",
      display: "flex",
      flexDirection: "column",
      gap: 10
    } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, fontWeight: 700, color: WC.indigo, letterSpacing: "0.1em" } }, "04A"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, color: WC.ink4, letterSpacing: "0.06em", textTransform: "uppercase" } }, "Process improvement")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.bodyS, fontWeight: 700, lineHeight: 1.2, color: WC.ink, letterSpacing: "-0.01em" } }, "As-Is Process Documentation"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, lineHeight: 1.5, color: WC.ink3 } }, "How did this process work before? Who did it, how long did it take, where were the pain points, what did it cost? The SME leads this \u2014 without it, the delta cannot be verified.")), /* @__PURE__ */ React.createElement(HoverLift, { style: {
      background: WC.surface,
      border: `1px solid ${WC.line}`,
      borderRadius: 16,
      padding: "24px 28px",
      display: "flex",
      flexDirection: "column",
      gap: 10
    } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", gap: 12 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, fontWeight: 700, color: WC.indigo, letterSpacing: "0.1em" } }, "04B"), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, color: WC.ink4, letterSpacing: "0.06em", textTransform: "uppercase" } }, "Net new idea")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.bodyS, fontWeight: 700, lineHeight: 1.2, color: WC.ink, letterSpacing: "-0.01em" } }, "Opportunity Definition"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, lineHeight: 1.5, color: WC.ink3 } }, "What gap or opportunity did the squad identify? Why does it matter to the business? What was the evidence it was worth solving? Replaces the as-is for squads building something that didn't previously exist.")))));
  }
  function WC_ScoutsPanel() {
    const scouts = [
      { title: "The Sporting Director", desc: "Senior Symphony leadership. Do the numbers stack up? Is this a real problem worth solving?", highlight: false },
      { title: "The Technical Director", desc: "Engineering or data leadership. Can this actually work? Is it robust? Does it scale?", highlight: false },
      { title: "The Commercial Director", desc: "Commercial leadership. Could this be packaged for clients? Would the market pay for it?", highlight: false },
      { title: "The Guest Scout", desc: "Rotates each round. External guest, client, industry figure, or the previous round's winning squad captain.", highlight: true }
    ];
    return /* @__PURE__ */ React.createElement(Slide, { bg: WC.paper, label: "18 The Scouts" }, /* @__PURE__ */ React.createElement(Rail, { chapter: "Judging" }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 36 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-end", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement(Tag, null, "The judging panel")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.subtitle, fontWeight: 700, letterSpacing: "-0.02em", color: WC.ink } }, "Four Scouts. Four lenses.")), /* @__PURE__ */ React.createElement("div", { style: {
      background: WC.surface,
      border: `1px solid ${WC.line}`,
      borderRadius: 12,
      padding: "14px 22px",
      maxWidth: 380,
      fontSize: S.small,
      color: WC.ink3,
      lineHeight: 1.4
    } }, /* @__PURE__ */ React.createElement("strong", { style: { color: WC.ink } }, "Grand Final:"), " more senior panel + at least one external Scout. Scores revealed only after every squad has pitched.")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18, flex: 1 } }, scouts.map((d, i) => /* @__PURE__ */ React.createElement(HoverLift, { key: i, dark: !!d.highlight, style: {
      background: d.highlight ? WC.indigo : WC.surface,
      border: `1px solid ${d.highlight ? WC.indigo : WC.line}`,
      borderRadius: 16,
      padding: "28px 26px",
      display: "flex",
      flexDirection: "column",
      gap: 20
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 48,
      height: 48,
      borderRadius: 14,
      background: d.highlight ? "rgba(255,255,255,0.15)" : WC.indigo50,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    } }, /* @__PURE__ */ React.createElement("div", { style: { width: 10, height: 10, borderRadius: "50%", background: d.highlight ? "#fff" : WC.indigo } })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.bodyS, fontWeight: 700, color: d.highlight ? "#fff" : WC.ink, lineHeight: 1.2, marginBottom: 10 } }, d.title), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: d.highlight ? "rgba(255,255,255,0.65)" : WC.ink3, lineHeight: 1.45 } }, d.desc)))))));
  }
  function WC_RoundScoringCriteria() {
    const criteria = [
      { label: "Measurable business impact", weight: 40, color: WC.indigo },
      { label: "Clarity and credibility of the problem definition and baseline", weight: 20, color: WC.indigo600 },
      { label: "AI innovation and creativity", weight: 25, color: "#8784FF" },
      { label: "Presentation clarity", weight: 15, color: WC.indigo700 }
    ];
    return /* @__PURE__ */ React.createElement(Slide, { bg: WC.surface, label: "19 Round Scoring Criteria" }, /* @__PURE__ */ React.createElement(Rail, { chapter: "Judging" }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "grid", gridTemplateColumns: "360px 1fr", gap: 96, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 20 } }, /* @__PURE__ */ React.createElement(Tag, null, "Round scoring")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.subtitle, fontWeight: 700, letterSpacing: "-0.02em", color: WC.ink, marginBottom: 20 } }, "Impact is everything."), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink3, lineHeight: 1.5, marginBottom: 18 } }, "40% of the round score comes from measurable business impact. Real results, real data \u2014 no projections accepted."), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink4, lineHeight: 1.45 } }, "The 20% criterion applies to both solution types: as-is documentation for process improvement, opportunity definition for net new ideas.")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 28 } }, criteria.map((c, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: { display: "flex", flexDirection: "column", gap: 10 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 24 } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.bodyS, fontWeight: 600, color: WC.ink, lineHeight: 1.3 } }, c.label), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.subtitle, fontWeight: 700, color: c.color, letterSpacing: "-0.02em", flexShrink: 0 } }, c.weight, "%")), /* @__PURE__ */ React.createElement("div", { style: { height: 8, background: WC.paper2, borderRadius: 999, overflow: "hidden" } }, /* @__PURE__ */ React.createElement("div", { style: { height: "100%", width: `${c.weight}%`, background: c.color, borderRadius: 999 } })))))));
  }
  function WC_GrandFinalScoringCriteria() {
    const criteria = [
      { label: "Credibility and scale of measured results", owner: "Scouts" },
      { label: "Business significance of the problem solved", owner: "Scouts" },
      { label: "Scalability across the wider business", owner: "Scouts" },
      { label: "AI innovation and creativity", owner: "Scouts" },
      { label: "Symphony staff vote", owner: "Live event vote" }
    ];
    return /* @__PURE__ */ React.createElement(Slide, { bg: WC.paper, label: "20 Grand Final Scoring" }, /* @__PURE__ */ React.createElement(Rail, { chapter: "Judging" }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "grid", gridTemplateColumns: "360px 1fr", gap: 96, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 20 } }, /* @__PURE__ */ React.createElement(Tag, null, "Grand Final scoring")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.subtitle, fontWeight: 700, letterSpacing: "-0.02em", color: WC.ink, marginBottom: 20 } }, "The Final is judged differently."), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink3, lineHeight: 1.5, marginBottom: 18 } }, "Round winners may have solved completely different problems. The Grand Final criteria assess the quality, significance, and scalability of each solution \u2014 not raw numbers compared head-to-head."), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink4, lineHeight: 1.45 } }, "The weighting between Scout scores and staff vote is set by the central owner and published before the event.")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 16 } }, criteria.map((c, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      border: `1px solid ${WC.line}`,
      borderRadius: 12,
      padding: "16px 18px",
      background: WC.surface
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, fontWeight: 600, color: WC.ink, lineHeight: 1.3 } }, c.label), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, fontWeight: 700, color: WC.indigo, letterSpacing: "0.06em", textTransform: "uppercase" } }, c.owner))))));
  }
  function WC_SupportingSquads() {
    const supports = [
      { title: "Pitch Framework", body: "Every squad receives a framework that tells them what the Scouts expect to see. It adapts to the problem type \u2014 as-is and delta for process improvement, opportunity and evidence for net new ideas." },
      { title: "Published Question Bank", body: "Likely Scout questions shared upfront. No squad should be disadvantaged because they didn't know what to expect." },
      { title: "The Friendly", body: "Before Match Day every squad runs The Friendly with their Squad Coach \u2014 challenge the numbers, stress assumptions, and prepare for Scout questions." },
      { title: "AI Pitch Preparation", body: "Squads are explicitly encouraged to use AI to prepare. Simulate Scout questions. Pressure-test the business case." },
      { title: "Match Report", body: "Every squad, not just winners, receives a written Match Report from the Scouts within 48 hours. What worked, what would have changed the score." }
    ];
    return /* @__PURE__ */ React.createElement(Slide, { bg: WC.paper, label: "21 Supporting Squads" }, /* @__PURE__ */ React.createElement(Rail, { chapter: "Support" }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 32 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement(Tag, null, "How we set squads up to win")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.subtitle, fontWeight: 700, letterSpacing: "-0.02em", color: WC.ink } }, "Five ways we remove the guesswork.")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16, flex: 1 } }, supports.map((s, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
      background: WC.surface,
      border: `1px solid ${WC.line}`,
      borderRadius: 14,
      padding: "26px 22px",
      display: "flex",
      flexDirection: "column",
      gap: 14
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, fontWeight: 700, color: WC.indigo, letterSpacing: "0.1em" } }, String(i + 1).padStart(2, "0")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, fontWeight: 700, color: WC.ink, lineHeight: 1.2 } }, s.title), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink3, lineHeight: 1.5, flex: 1 } }, s.body))))));
  }
  function WC_GrandFinalEvent() {
    const formatItems = [
      { label: "Pitch format", value: "Owner-set", sub: "based on finalist count" },
      { label: "Q&A", value: "Owner-set", sub: "set with the event format" },
      { label: "Pitch order", value: "Random draw", sub: "on the day" },
      { label: "Audience", value: "Company-wide", sub: "in person + livestream" },
      { label: "Staff vote", value: "Live vote", sub: "Symphony employees pick their favourite" }
    ];
    const beats = [
      "Held in person where possible, with a company-wide livestream for those not attending",
      "Full Scout panel including at least one external Scout \u2014 a client, investor, or industry figure",
      "Top ideas generated during the rounds are presented \u2014 no new build required for the Final",
      "Scouts deliberate live, each naming their pick and reasoning publicly",
      "Symphony staff cast a live vote on their favourite final idea",
      "Final winner announced using combined Scout score and staff vote"
    ];
    return /* @__PURE__ */ React.createElement(
      "section",
      {
        "data-screen-label": "22 Grand Final Event",
        style: {
          width: "100%",
          height: "100%",
          background: GRAD_DARK,
          fontFamily: F,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          padding: `${PT}px ${PX}px ${PB}px`,
          position: "relative",
          overflow: "hidden"
        }
      },
      /* @__PURE__ */ React.createElement("div", { style: {
        position: "absolute",
        top: -260,
        right: -160,
        width: 800,
        height: 800,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,255,255,0.10) 0%, transparent 70%)",
        pointerEvents: "none"
      } }),
      /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14, marginBottom: 56 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 14 } }, /* @__PURE__ */ React.createElement("div", { style: { width: 9, height: 9, borderRadius: "50%", background: "rgba(255,255,255,0.6)" } }), /* @__PURE__ */ React.createElement("span", { style: { fontFamily: FM, fontSize: S.small, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" } }, "Symphony AI World Cup / The Grand Final")), /* @__PURE__ */ React.createElement(Tag, { color: "rgba(255,255,255,0.9)", bg: "rgba(255,255,255,0.15)" }, "End of year (target: April)")),
      /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 80, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: {
        fontSize: S.title,
        fontWeight: 700,
        lineHeight: 1.05,
        letterSpacing: "-0.03em",
        color: "#fff",
        marginBottom: 24
      } }, "The centrepiece", /* @__PURE__ */ React.createElement("br", null), "of the season."), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.bodyS, color: "rgba(255,255,255,0.65)", maxWidth: "40ch", lineHeight: 1.5, marginBottom: 32 } }, "A company-wide event where the strongest ideas generated in the rounds compete for the championship. It is not a build round \u2014 no new solutions are required. Squads present what they built in-round, updated with any additional results gathered since."), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 } }, formatItems.map((it, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
        background: "rgba(255,255,255,0.06)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: 12,
        padding: "16px 20px"
      } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 6 } }, it.label), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.bodyS, fontWeight: 700, color: "#fff", letterSpacing: "-0.01em", marginBottom: 4 } }, it.value), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: "rgba(255,255,255,0.55)", lineHeight: 1.4 } }, it.sub))))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 20 } }, "How the night runs"), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column" } }, beats.map((b, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
        display: "flex",
        gap: 18,
        alignItems: "flex-start",
        padding: "16px 0",
        borderBottom: i < beats.length - 1 ? "1px solid rgba(255,255,255,0.10)" : "none"
      } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, fontWeight: 700, color: "rgba(255,255,255,0.5)", flexShrink: 0, marginTop: 2, width: 24 } }, String(i + 1).padStart(2, "0")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: "rgba(255,255,255,0.85)", lineHeight: 1.45 } }, b)))))),
      /* @__PURE__ */ React.createElement("div", { style: {
        display: "flex",
        alignItems: "center",
        paddingTop: 24,
        borderTop: "1px solid rgba(255,255,255,0.15)",
        marginTop: 32
      } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", textTransform: "uppercase" } }, "A genuine celebration of what the business built across the year")),
      /* @__PURE__ */ React.createElement("div", { style: { position: "absolute", top: PT, right: PX } }, /* @__PURE__ */ React.createElement(Logo, { dark: true }))
    );
  }
  function WC_ThePrize() {
    const prizes = [
      { icon: "\u{1F3C6}", layer: "Layer 01", title: "The Trophy", body: "A physical, permanent trophy that lives with the winning squad's region. Bragging rights that last beyond the season.", bg: WC.paper, borderColor: WC.line, dark: false },
      { icon: "\u{1F381}", layer: "Layer 02", title: "The Personal Prize", body: "Something significant for each member of the Grand Final winning squad. A trip, a learning budget, or tech gear \u2014 something worth competing hard for.", bg: WC.indigo50, borderColor: WC.indigo100, dark: false },
      { icon: "\u{1F680}", layer: "Layer 03", title: "The Real Prize", body: "The winning solution gets resourced and actually implemented across the business. The winning squad's SME leads adoption. This is the most powerful motivator.", bg: WC.indigo, borderColor: WC.indigo, dark: true }
    ];
    return /* @__PURE__ */ React.createElement(Slide, { bg: WC.surface, label: "23 The Prize" }, /* @__PURE__ */ React.createElement(Rail, { chapter: "The Prize" }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 28 } }, /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "flex-end", justifyContent: "space-between" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement(Tag, null, "What you win")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.subtitle, fontWeight: 700, letterSpacing: "-0.02em", color: WC.ink } }, "Two prizes. One season.")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink3, lineHeight: 1.4, maxWidth: 380 } }, "A round prize each round. A bigger Grand Final prize at the end of the year.")), /* @__PURE__ */ React.createElement(HoverLift, { style: {
      background: WC.paper,
      border: `1px solid ${WC.line}`,
      borderRadius: 16,
      padding: "22px 28px",
      display: "flex",
      alignItems: "center",
      gap: 28
    } }, /* @__PURE__ */ React.createElement("div", { style: {
      width: 52,
      height: 52,
      borderRadius: 12,
      background: WC.indigo50,
      border: `1px solid ${WC.indigo100}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 26,
      flexShrink: 0
    } }, "\u{1F947}"), /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, letterSpacing: "0.1em", textTransform: "uppercase", color: WC.ink4, marginBottom: 4 } }, "Round Prize"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.bodyS, fontWeight: 700, color: WC.ink, lineHeight: 1.2, marginBottom: 4 } }, "Recognised and rewarded immediately."), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink3, lineHeight: 1.4 } }, "A meaningful personal prize for each squad member, plus a public company-wide announcement. Winning a round is a real achievement, not just a stepping stone."))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "baseline", justifyContent: "space-between", marginTop: 4 } }, /* @__PURE__ */ React.createElement(Tag, { color: WC.ink2, bg: WC.paper2 }, "Grand Final Prize \u2014 three layers")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, flex: 1 } }, prizes.map((p, i) => /* @__PURE__ */ React.createElement(HoverLift, { key: i, dark: !!p.dark, style: {
      background: p.bg,
      border: `1px solid ${p.borderColor}`,
      borderRadius: 20,
      padding: "26px 28px",
      display: "flex",
      flexDirection: "column",
      gap: 12
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: 36 } }, p.icon), /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, letterSpacing: "0.1em", textTransform: "uppercase", color: p.dark ? "rgba(255,255,255,0.4)" : WC.ink4 } }, p.layer), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.bodyS, fontWeight: 700, color: p.dark ? "#fff" : WC.ink, lineHeight: 1.2 } }, p.title), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, lineHeight: 1.5, color: p.dark ? "rgba(255,255,255,0.72)" : WC.ink3, flex: 1 } }, p.body))))));
  }
  function WC_AIPerformanceManagement() {
    const levels = [
      ["Level 1", "Aware", "Understands what AI can and cannot do."],
      ["Level 2", "Assisted", "Uses AI tools regularly in day-to-day work."],
      ["Level 3", "Enabled", "Builds practical solutions and workflows with AI."],
      ["Level 4", "Led", "Shapes how AI is adopted across teams and clients."]
    ];
    return /* @__PURE__ */ React.createElement(Slide, { bg: WC.paper, label: "24 AI Performance Management" }, /* @__PURE__ */ React.createElement(Rail, { chapter: "Capability" }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", gap: 30 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 14 } }, /* @__PURE__ */ React.createElement(Tag, null, "AI capability framework")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.subtitle, fontWeight: 700, letterSpacing: "-0.02em", color: WC.ink, marginBottom: 10 } }, "Aware \u2192 Assisted \u2192 Enabled \u2192 Led"), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink3, lineHeight: 1.5, maxWidth: "66ch" } }, "The AI World Cup is one of Symphony's clearest proving grounds for Levels 3 and 4.")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, flex: 1 } }, levels.map(([level, title, body], i) => /* @__PURE__ */ React.createElement(HoverLift, { key: i, style: {
      background: WC.surface,
      border: `1px solid ${WC.line}`,
      borderTop: `4px solid ${WC.indigo}`,
      borderRadius: 14,
      padding: "22px 20px",
      display: "flex",
      flexDirection: "column",
      gap: 10
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, color: WC.indigo, letterSpacing: "0.08em", textTransform: "uppercase" } }, level), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.bodyS, fontWeight: 700, color: WC.ink } }, title), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: WC.ink3, lineHeight: 1.45 } }, body))))));
  }
  function WC_TimeCommitment() {
    return /* @__PURE__ */ React.createElement(Slide, { bg: WC.paper, label: "25 Time Commitment" }, /* @__PURE__ */ React.createElement(Rail, { chapter: "Commitment" }), /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 96, alignItems: "center" } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { marginBottom: 24 } }, /* @__PURE__ */ React.createElement(Tag, null, "Time commitment")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: 84, fontWeight: 700, lineHeight: 1, letterSpacing: "-0.04em", color: WC.ink, marginBottom: 22 } }, "2\u20133 hrs", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: WC.indigo } }, "per person"), /* @__PURE__ */ React.createElement("br", null), "per week."), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.bodyS, color: WC.ink3, lineHeight: 1.5, maxWidth: "36ch" } }, "AI does the heavy execution work. The squad's job is to direct it \u2014 not manually build everything from scratch.")), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", flexDirection: "column", gap: 20 } }, [
      { title: "This is legitimate work.", body: "Participation in the AI World Cup is not an after-hours personal project. Leadership must visibly protect this time.", accent: false },
      { title: "Region managers set the tone.", body: "They communicate this clearly in their regions at the start of each season and hold the line throughout.", accent: false },
      { title: "AI is mandatory \u2014 in the solution and how you build it.", body: "Every squad must use AI as a core part of their solution. How AI was used is part of the judging criteria.", accent: true }
    ].map((item, i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
      background: item.accent ? WC.indigo50 : WC.surface,
      border: `1px solid ${item.accent ? WC.indigo100 : WC.line}`,
      borderRadius: 14,
      padding: "24px 28px"
    } }, /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, fontWeight: 700, color: item.accent ? WC.indigo : WC.ink, marginBottom: 8 } }, item.title), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: item.accent ? WC.ink2 : WC.ink3, lineHeight: 1.45 } }, item.body))))));
  }
  function WC_CompoundingEffect() {
    return /* @__PURE__ */ React.createElement(
      "section",
      {
        "data-screen-label": "26 Compounding Effect",
        style: {
          width: "100%",
          height: "100%",
          background: GRAD_DARK,
          fontFamily: F,
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          padding: `${PT}px ${PX}px ${PB}px`,
          position: "relative",
          overflow: "hidden"
        }
      },
      /* @__PURE__ */ React.createElement("div", { style: {
        position: "absolute",
        bottom: -320,
        right: -320,
        width: 900,
        height: 900,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 65%)",
        pointerEvents: "none"
      } }),
      /* @__PURE__ */ React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 72 } }, /* @__PURE__ */ React.createElement("div", { style: { fontFamily: FM, fontSize: S.small, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" } }, "Symphony AI World Cup / The Long Game"), /* @__PURE__ */ React.createElement(Logo, { dark: true })),
      /* @__PURE__ */ React.createElement("div", { style: { flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: 52 } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.lead, color: "rgba(255,255,255,0.35)", marginBottom: 16 } }, "Every season leaves Symphony with more than a champion."), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.title, fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#fff" } }, "The compounding effect.")), /* @__PURE__ */ React.createElement("div", { style: { display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0 } }, [
        ["A growing library", "Documented business processes that survive beyond any one round."],
        ["Working solutions", "AI tools with proven results, ready to scale across the business."],
        ["Capable people", "A growing cohort who have shipped something real with AI."],
        ["A story to tell", "Measurable AI gains \u2014 powerful internally and externally over time."]
      ].map(([title, body], i) => /* @__PURE__ */ React.createElement("div", { key: i, style: {
        borderLeft: `1px solid rgba(255,255,255,${i === 0 ? "0.15" : "0.07"})`,
        background: i === 0 ? "rgba(255,255,255,0.05)" : "transparent",
        padding: "26px 30px"
      } }, /* @__PURE__ */ React.createElement("div", { style: {
        fontFamily: FM,
        fontSize: 64,
        lineHeight: 1,
        color: "#fff",
        letterSpacing: "-0.02em",
        fontWeight: 700,
        marginBottom: 18
      } }, String(i + 1).padStart(2, "0")), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.bodyS, fontWeight: 600, color: "#fff", lineHeight: 1.2, marginBottom: 12 } }, title), /* @__PURE__ */ React.createElement("div", { style: { fontSize: S.small, color: "#fff", lineHeight: 1.45 } }, body)))))
    );
  }
  const SLIDES = [
    ["s1", WC_Cover],
    ["s2", WC_WhatIsIt],
    ["s3", WC_Objectives],
    ["s4", WC_SeasonStructure],
    ["s5", WC_LeagueTable],
    ["s6", WC_RoundEntry],
    ["s7", WC_SeasonKickoff],
    ["s8", WC_TeamsDivider],
    ["s9", WC_TeamComposition],
    ["s10", WC_SMERule],
    ["s11", WC_SquadCoach],
    ["s12", WC_RegionalModel],
    ["s13", WC_CentralOwnership],
    ["s14", WC_ProblemSourcing],
    ["s15", WC_QuarterlyRound],
    ["s16", WC_DeliverablesDivider],
    ["s17", WC_WhatTeamsDeliver],
    ["s18", WC_ScoutsPanel],
    ["s19", WC_RoundScoringCriteria],
    ["s20", WC_GrandFinalScoringCriteria],
    ["s21", WC_SupportingSquads],
    ["s22", WC_GrandFinalEvent],
    ["s23", WC_ThePrize],
    ["s24", WC_AIPerformanceManagement],
    ["s25", WC_TimeCommitment],
    ["s26", WC_CompoundingEffect]
  ];
  SLIDES.forEach(([id, Component]) => {
    const el = document.getElementById(id);
    if (el) ReactDOM.createRoot(el).render(React.createElement(Component));
  });
})();
