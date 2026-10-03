"use client";

import { useEffect, useState } from "react";
import { demoFrames, type DemoFrame } from "@/content/demo";

const totalDuration = demoFrames.reduce((sum, frame) => sum + frame.duration, 0);

function frameAt(time: number) {
  let offset = time % totalDuration;
  for (const frame of demoFrames) {
    if (offset < frame.duration) return { frame, offset };
    offset -= frame.duration;
  }
  return { frame: demoFrames[0], offset: 0 };
}

function startOfFrame(index: number) {
  return demoFrames.slice(0, index).reduce((sum, frame) => sum + frame.duration, 0);
}

function visibleLines(frame: DemoFrame, offset: number) {
  const progress = Math.min(1, Math.max(0, (offset - 250) / (frame.duration - 850)));
  const totalCharacters = frame.lines.reduce((sum, line) => sum + line.length + 8, 0);
  let remaining = Math.ceil(totalCharacters * progress);

  return frame.lines.map((line) => {
    const revealed = Math.min(line.length, Math.max(0, remaining));
    remaining -= line.length + 8;
    return line.slice(0, revealed);
  }).filter((line, index, all) => line.length > 0 || (index > 0 && all.slice(index + 1).some(Boolean)));
}

function lineTone(line: string) {
  if (line.startsWith("DRIFT") || line.startsWith("+")) return "terminal-line danger";
  if (line.startsWith("✓")) return "terminal-line success";
  if (line.startsWith("$")) return "terminal-line command";
  if (line.includes(":")) return "terminal-line yaml";
  return "terminal-line";
}

function TerminalLines({ lines }: { lines: string[] }) {
  return (
    <div className="terminal-lines">
      {lines.map((line, index) => (
        <div className={lineTone(line)} key={`${index}-${line}`}>
          {line || "\u00a0"}
        </div>
      ))}
    </div>
  );
}

export function DemoTerminal() {
  const [elapsed, setElapsed] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const startedAt = performance.now() - elapsed;
    const interval = window.setInterval(() => setElapsed(performance.now() - startedAt), 60);
    return () => window.clearInterval(interval);
    // Restart the single timeline when pause or motion preference changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, reducedMotion]);

  const { frame, offset } = frameAt(elapsed);

  return (
    <div className="demo-shell" aria-label="Representative Drifti product demo">
      <div className="demo-topbar">
        <div className="window-dots" aria-hidden="true"><i /><i /><i /></div>
        <span className="demo-title">drifti / representative flow</span>
        <span className="demo-topbar-right">LOCAL SESSION</span>
      </div>

      <div className="demo-stepbar" aria-label="Demo stages">
        {demoFrames.map((step, index) => (
          <button
            key={step.id}
            className={`demo-step ${frame.id === step.id ? "active" : ""}`}
            type="button"
            aria-current={!reducedMotion && frame.id === step.id ? "step" : undefined}
            onClick={() => {
              if (reducedMotion) {
                document.getElementById(`demo-${step.id}`)?.scrollIntoView({ block: "nearest" });
              } else {
                setElapsed(startOfFrame(index) + step.duration - 200);
                setPaused(true);
              }
            }}
          >
            <span className="demo-step-number">0{index + 1}</span>
            <span>{step.label}</span>
          </button>
        ))}
      </div>

      {reducedMotion ? (
        <div className="demo-static" role="region" tabIndex={0} aria-label="Complete demo sequence">
          {demoFrames.map((step) => (
            <section id={`demo-${step.id}`} key={step.id} className="demo-static-step">
              <h3>{step.label} <span>· {step.eyebrow}</span></h3>
              <TerminalLines lines={step.lines} />
            </section>
          ))}
        </div>
      ) : (
        <div className="demo-screen">
          <div className="demo-screen-meta">
            <span>{frame.eyebrow}</span>
            <span>{frame.id === "drift" ? "CONTRACT MISMATCH" : "CAPABILITY TRACE"}</span>
          </div>
          <div className="terminal-content" role="region" tabIndex={0} aria-label="Animated terminal output" aria-live="off">
            <TerminalLines lines={visibleLines(frame, offset)} />
            <span className="terminal-cursor" aria-hidden="true" />
          </div>
          <div className="demo-screen-bottom">
            <span><span className="signal-dot" /> {frame.id === "drift" ? "REVIEW REQUIRED" : "REPRESENTATIVE OUTPUT"}</span>
            <button type="button" className="demo-control" onClick={() => setPaused((value) => !value)}>
              {paused ? "Play sequence" : "Pause sequence"}
            </button>
          </div>
        </div>
      )}
      <p className="demo-disclaimer">Illustrative product sequence. CLI output will be replaced with verified captures.</p>
    </div>
  );
}
