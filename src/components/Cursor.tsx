import { useEffect, useRef } from "react";

type TubesCursorProps = {
  initialColors?: string[];   // tubes base colors
  lightColors?: string[];     // lights colors
  lightIntensity?: number;    // lights intensity
  enableRandomizeOnClick?: boolean;
};

const Cursor = ({
  initialColors = ["#6d0a0a", "#6d0a0a", "#6d0a0a"],
  lightColors = ["#fafafaff", "#6d0a0a", "#6d0a0a", "#6d0a0a"],
  lightIntensity = 250,
  enableRandomizeOnClick = false,
}: TubesCursorProps = {}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const appRef = useRef<any>(null);

  useEffect(() => {
    let removeClick: (() => void) | null = null;
    let destroyed = false;

    (async () => {
      const mod = await import(
        /* webpackIgnore: true */
        "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js"
      );
      const TubesCursorCtor = (mod as any).default ?? mod;

      if (!canvasRef.current || destroyed) return;

      const app = TubesCursorCtor(canvasRef.current, {
        tubes: {
          colors: initialColors,
          lights: {
            intensity: lightIntensity,
            colors: lightColors,
          },
        },
      });

      appRef.current = app;

      if (enableRandomizeOnClick) {
        const handler = () => {
          const colors = randomColors(initialColors.length);
          const lights = randomColors(lightColors.length);
          app.tubes.setColors(colors);
          app.tubes.setLightsColors(lights);
        };
        document.body.addEventListener("click", handler);
        removeClick = () =>
          document.body.removeEventListener("click", handler);
      }
    })();

    return () => {
      destroyed = true;
      if (removeClick) removeClick();
      try {
        appRef.current?.dispose?.();
        appRef.current = null;
      } catch {
        // ignore
      }
    };
  }, [initialColors, lightColors, lightIntensity, enableRandomizeOnClick]);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", zIndex: 9999, pointerEvents: "none", mixBlendMode: "screen" }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
    </div>
  );
};

function randomColors(count: number) {
  return new Array(count).fill(0).map(
    () =>
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
  );
}

export default Cursor;
