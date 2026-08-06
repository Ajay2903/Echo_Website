import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Echo — a journal that answers.";

const CREAM = "#FAF6F1";
const INK = "#1C1714";
const INK_BODY = "#7B6A62";
const PINK = "#E8799A";
const SAGE = "#7DBF8E";

function ring(diameter: number, color: string, opacity: number) {
  return (
    <div
      style={{
        position: "absolute",
        width: diameter,
        height: diameter,
        borderRadius: diameter,
        backgroundColor: color,
        opacity,
      }}
    />
  );
}

/** The link-preview card: cream, charcoal, and one still frame of the orb. */
export async function renderOgCard() {
  const [fraunces, inter] = await Promise.all([
    readFile(join(process.cwd(), "app/fonts/Fraunces-Medium.ttf")),
    readFile(join(process.cwd(), "app/fonts/Inter-Regular.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          backgroundColor: CREAM,
          fontFamily: "Inter",
          padding: "0 88px",
          position: "relative",
        }}
      >
        {/* Orb, sitting off the right edge */}
        <div
          style={{
            position: "absolute",
            right: -80,
            top: 105,
            width: 420,
            height: 420,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {ring(420, SAGE, 0.09)}
          {ring(286, PINK, 0.14)}
          {ring(160, PINK, 0.55)}
        </div>

        <div style={{ display: "flex", flexDirection: "column", width: 720 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 13,
                height: 13,
                borderRadius: 13,
                backgroundColor: PINK,
              }}
            />
            <div
              style={{
                fontFamily: "Fraunces",
                fontSize: 34,
                color: INK,
                letterSpacing: -0.6,
              }}
            >
              Echo
            </div>
          </div>

          <div
            style={{
              fontFamily: "Fraunces",
              fontSize: 74,
              lineHeight: 1.14,
              letterSpacing: -2,
              color: INK,
              marginTop: 46,
            }}
          >
            Some days want to be spoken.
          </div>

          <div
            style={{
              fontSize: 27,
              lineHeight: 1.5,
              color: INK_BODY,
              marginTop: 30,
              width: 640,
            }}
          >
            Echo listens — then tells you what you were feeling. One entry a day,
            by voice or by writing.
          </div>

          <div
            style={{
              fontSize: 19,
              letterSpacing: 2.4,
              textTransform: "uppercase",
              color: INK_BODY,
              marginTop: 48,
            }}
          >
            Free · Private · No ads
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Inter", data: inter, style: "normal", weight: 400 },
        { name: "Fraunces", data: fraunces, style: "normal", weight: 500 },
      ],
    },
  );
}
