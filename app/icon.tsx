import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "9999px",
          background: "#102F65",
          border: "3px solid #C6A15B",
          color: "#FFF8E8",
          fontSize: "22px",
          fontFamily: "Georgia, serif",
          fontWeight: 700,
        }}
      >
        S&R
      </div>
    ),
    { ...size }
  );
}
