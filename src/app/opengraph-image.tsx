import { ImageResponse } from "next/og";
import { siteUrl } from "@/lib/site-url";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: 70, color: "#edf1e8", background: "#0b0e0d", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 34, fontWeight: 700 }}><span style={{ color: "#d7f86a" }}>D</span> drifti</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 70, fontWeight: 700, letterSpacing: -4, lineHeight: 1.06 }}><span>Know what your agents can do.</span><span style={{ color: "#d7f86a" }}>Catch when they do more.</span></div>
        <div style={{ fontSize: 26, color: "#a4ada4" }}>Capability contracts for AI agents.</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #303a33", paddingTop: 24, color: "#a4ada4", fontSize: 18 }}><span>OPEN SOURCE · LOCAL FIRST · BUILT FOR CI</span><span>{new URL(siteUrl).host}</span></div>
    </div>,
    size,
  );
}
