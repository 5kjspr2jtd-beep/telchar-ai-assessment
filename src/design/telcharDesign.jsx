// ── Telchar Design System — Single Source of Truth ──────────────────────────
// Shared across TelcharLandingPage, TelcharAssessment, ROICalculator, TelcharReport.
// Do not duplicate these values in consuming files.

import React from "react";

// ── Color system ────────────────────────────────────────────────────────────
export const TELCHAR = {
  paper:      "#F5F0E8",
  paperShade: "#EDE6D6",
  paperRule:  "#CEC4B2",
  navy:       "#0F1923",
  navyText:   "#D8DEE9",
  navyMeta:   "#B8C2CC",
  navyDim:    "#253848",
  navyFaint:  "#162438",
  gold:       "#C9A84C",
  goldLight:  "#D4BA6A",
  goldFaint:  "#E7D9B1",
  ink:        "#1A1714",
  inkMid:     "#3C3530",
  inkLight:   "#6A6055",
  inkFaint:   "#6A6055",   // minimum contrast on tan — never lighter
  green:      "#4E7C45",
  amber:      "#B8912A",
  red:        "#8A2A2A",
};

// ── Text color hierarchy (semantic aliases) ─────────────────────────────────
export const TEXT = {
  primary:   "#1A1714",
  secondary: "#3C3530",
  muted:     "#6A6055",
};

// ── Navy-background text hierarchy ──────────────────────────────────────────
export const NAVY_TEXT = {
  primary:   "#D8DEE9",
  secondary: "#B8C2CC",
};

// ── Typography ──────────────────────────────────────────────────────────────
export const FONT = "'IBM Plex Sans', sans-serif";
export const MONO = "'IBM Plex Mono', monospace";
export const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap";

// Allowed font sizes: 12, 13, 15, 16, 20, 24, 32
// No text anywhere may be smaller than 12px.
export const TYPE = {
  micro:     12,   // labels, metadata, captions
  label:     13,   // section labels, secondary info
  smallBody: 15,   // secondary body text
  body:      16,   // primary body text
  subhead:   20,   // subsection headers
  section:   24,   // section headers
  headline:  32,   // major headlines / hero
};

// ── Score color system ──────────────────────────────────────────────────────
export function scoreColor(s) {
  if (s < 25) return "#A23A3A";
  if (s < 45) return "#D26A2C";
  if (s < 60) return "#E0B93B";
  if (s < 75) return "#7C8E3A";
  return "#4E7C45";
}

export function scoreTier(s) {
  if (s < 25) return "Critical";
  if (s < 45) return "Early Stage";
  if (s < 60) return "Developing";
  if (s < 75) return "Advancing";
  return "Strong";
}

// ── Layout constants ────────────────────────────────────────────────────────
export const LAYOUT = {
  maxWidth: 980,
  padding: "0 32px",
  sectionSpacing: 64,
};

// ── CTA Button standards ────────────────────────────────────────────────────
export const CTA = {
  width: 320,
  height: 44,
  style: {
    fontFamily: "'IBM Plex Sans', sans-serif",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: "0.10em",
    textTransform: "uppercase",
    width: 320,
    height: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#C9A84C",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    transition: "all 0.15s ease",
    margin: "24px auto",
  },
  secondary: {
    fontFamily: "'IBM Plex Sans', sans-serif",
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: "0.10em",
    textTransform: "uppercase",
    width: 320,
    height: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    color: "#C9A84C",
    border: "1px solid #C9A84C",
    cursor: "pointer",
    transition: "all 0.15s ease",
    margin: "24px auto",
  },
};

// ── Selected option card standard ───────────────────────────────────────────
export const OPTION_CARD = {
  selected: {
    background: "#E7D9B1",
    border: "2px solid #C9A84C",
    fontWeight: 600,
  },
  unselected: {
    background: "transparent",
    border: "1px solid #D6CCB8",
    fontWeight: 400,
  },
};

// ── UI Primitives ───────────────────────────────────────────────────────────

export function Diamond({ size = 8, fill = TELCHAR.navy, stroke = TELCHAR.goldLight, sw = 1.5, style = {} }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 10" style={{ display: "block", flexShrink: 0, ...style }}>
      <polygon points="5,0 10,5 5,10 0,5" fill={fill} stroke={stroke} strokeWidth={sw} />
    </svg>
  );
}

export function Rule({ diamond = false, weight = 1, color, style = {} }) {
  const c = color || TELCHAR.paperRule;
  if (diamond) return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, ...style }}>
      <div style={{ flex: 1, height: weight, background: c }} />
      <Diamond size={8} fill={TELCHAR.goldLight} stroke="none" sw={0} />
      <div style={{ flex: 1, height: weight, background: c }} />
    </div>
  );
  return <div style={{ height: weight, background: c, ...style }} />;
}

export function SecLabel({ children, color, style = {} }) {
  return (
    <div style={{
      fontFamily: FONT, fontSize: TYPE.micro, fontWeight: 700,
      letterSpacing: "0.22em", textTransform: "uppercase",
      color: color || TELCHAR.inkLight, marginBottom: 14, ...style,
    }}>{children}</div>
  );
}
