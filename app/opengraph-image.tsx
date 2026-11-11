import { ImageResponse } from "next/og";

export const alt =
  "Supriya & Dr. Ranjan — Wedding Invitation | 24 November 2026, Lucknow";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(145deg, #102F65 0%, #0C224A 58%, #3B1628 100%)",
          color: "#FFF8E8",
          position: "relative",
          fontFamily: "Georgia, serif",
        }}
      >
        {/* Outer gold border */}
        <div
          style={{
            position: "absolute",
            inset: "28px",
            border: "2px solid #C6A15B",
            borderRadius: "20px",
            display: "flex",
          }}
        />
        {/* Inner subtle border */}
        <div
          style={{
            position: "absolute",
            inset: "40px",
            border: "1px solid rgba(198, 161, 91, 0.45)",
            borderRadius: "14px",
            display: "flex",
          }}
        />

        {/* S & R crest */}
        <div
          style={{
            width: "84px",
            height: "84px",
            borderRadius: "9999px",
            border: "2px solid #C6A15B",
            backgroundColor: "#701E32",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "30px",
            letterSpacing: "2px",
            color: "#FFF8E8",
            marginBottom: "22px",
          }}
        >
          S & R
        </div>

        <div
          style={{
            fontSize: "20px",
            letterSpacing: "6px",
            textTransform: "uppercase",
            color: "#E9C9C2",
            marginBottom: "14px",
          }}
        >
          Shubh Vivah Invitation
        </div>

        <div
          style={{
            fontSize: "74px",
            fontWeight: 700,
            color: "#FFF8E8",
            letterSpacing: "2px",
            marginBottom: "10px",
          }}
        >
          Supriya &amp; Dr. Ranjan
        </div>

        <div
          style={{
            fontSize: "26px",
            fontStyle: "italic",
            color: "#C6A15B",
            marginBottom: "28px",
          }}
        >
          Two souls, one beautiful journey.
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            padding: "12px 30px",
            borderRadius: "9999px",
            border: "1px solid rgba(198, 161, 91, 0.65)",
            backgroundColor: "rgba(255, 248, 232, 0.08)",
            fontSize: "22px",
            color: "#FFF8E8",
          }}
        >
          <span>24 November 2026</span>
          <span style={{ color: "#C6A15B" }}>•</span>
          <span>New Saubhagya Lawn, Lucknow</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
