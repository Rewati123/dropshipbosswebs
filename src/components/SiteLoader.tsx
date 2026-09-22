import { useEffect, useRef, useState, useCallback } from "react";
import { Volume2, VolumeX, FastForward } from "lucide-react";
import { BRAND } from "@/lib/site-data";
import { INTRO_STORAGE_KEY } from "@/lib/intro";

const VIDEO_SRC = "/h_lion_jb_loading_cale_jb_tak.mp4";

export function SiteLoader() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [muted, setMuted] = useState(true);
  const [hasInteractedSound, setHasInteractedSound] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const completeAndExit = useCallback(() => {
    sessionStorage.setItem(INTRO_STORAGE_KEY, "true");
    setLeaving(true);
    window.setTimeout(() => setVisible(false), 700);
  }, []);

  const handleVideoEnded = useCallback(() => {
    completeAndExit();
  }, [completeAndExit]);

  const tryPlayWithSound = useCallback(() => {
    if (!videoRef.current) return;
    const v = videoRef.current;
    v.currentTime = 0;

    // Try unmuted playback first
    v.muted = false;
    v.play()
      .then(() => {
        setMuted(false);
        setHasInteractedSound(true);
      })
      .catch(() => {
        // Autoplay policy prevented sound, play muted seamlessly
        v.muted = true;
        setMuted(true);
        v.play().catch(() => {});
      });
  }, []);

  const toggleSound = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !muted;
    videoRef.current.muted = nextMuted;
    setMuted(nextMuted);
    setHasInteractedSound(true);
    if (!nextMuted) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleScreenClick = () => {
    // If audio is muted by browser restriction, clicking anywhere on the screen un-mutes it instantly
    if (muted && videoRef.current) {
      videoRef.current.muted = false;
      setMuted(false);
      setHasInteractedSound(true);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const forceIntro = urlParams.get("intro") === "1";

    if (!forceIntro && sessionStorage.getItem(INTRO_STORAGE_KEY)) {
      setVisible(false);
      return;
    }

    setVisible(true);
    setLeaving(false);

    const timer = setTimeout(() => {
      tryPlayWithSound();
    }, 60);

    const handleReplay = () => {
      sessionStorage.removeItem(INTRO_STORAGE_KEY);
      setVisible(true);
      setLeaving(false);
      setTimeout(() => {
        tryPlayWithSound();
      }, 60);
    };

    window.addEventListener("replay-dropship-intro", handleReplay);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("replay-dropship-intro", handleReplay);
    };
  }, [tryPlayWithSound]);

  if (!visible) return null;

  return (
    <div
      onClick={handleScreenClick}
      className={`fixed inset-0 z-[99999] flex items-center justify-center bg-[#000000] text-white select-none overflow-hidden transition-all duration-700 ease-out cursor-pointer ${
        leaving ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
      role="status"
      aria-label={`${BRAND} intro animation`}
    >
      {/* Ambient background radial glow matching active theme */}
      <div
        className="pointer-events-none absolute h-[800px] w-[800px] rounded-full opacity-30 transition-all duration-700"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklab, var(--color-primary) 35%, transparent) 0%, color-mix(in oklab, var(--color-primary-glow) 15%, transparent) 45%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Floating Sparks around the screen */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-40">
        <div className="absolute top-[15%] left-[18%] h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)] animate-pulse" />
        <div className="absolute top-[28%] right-[20%] h-2 w-2 rounded-full bg-primary-glow shadow-[0_0_14px_var(--color-primary)] animate-ping" />
        <div className="absolute bottom-[22%] left-[22%] h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--color-primary)] animate-pulse" />
        <div className="absolute bottom-[16%] right-[18%] h-2 w-2 rounded-full bg-primary-glow shadow-[0_0_12px_var(--color-primary)] animate-bounce" />
      </div>

      {/* Top Header Controls: Sound & Skip */}
      <div className="absolute top-3 right-3 sm:top-6 sm:right-6 z-50 flex items-center gap-2 sm:gap-3">
        <button
          onClick={toggleSound}
          aria-label={muted ? "Enable roar sound" : "Mute roar sound"}
          className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-semibold backdrop-blur-md transition-all cursor-pointer shadow-lg ${
            muted
              ? "border-border bg-black/60 text-muted-foreground hover:border-primary hover:text-foreground"
              : "border-primary bg-primary/20 text-primary shadow-[0_0_15px_color-mix(in_oklab,var(--color-primary)_40%,transparent)]"
          }`}
        >
          {muted ? (
            <VolumeX className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-muted-foreground" />
          ) : (
            <Volume2 className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary animate-pulse" />
          )}
          <span>{muted ? "Click for Sound" : "Sound On"}</span>
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            completeAndExit();
          }}
          className="flex items-center gap-1 sm:gap-1.5 rounded-full border border-border bg-black/60 px-3 py-1.5 sm:px-4 sm:py-2 text-[11px] sm:text-xs font-semibold text-foreground backdrop-blur-md transition-all hover:border-primary hover:bg-primary/20 cursor-pointer shadow-lg"
        >
          <span>Skip</span>
          <FastForward className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
        </button>
      </div>

      {/* SEAMLESS BORDERLESS ANIMATION CANVAS */}
      <div className="relative flex items-center justify-center w-full max-w-5xl px-2 sm:px-6">
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          playsInline
          autoPlay
          preload="auto"
          onEnded={handleVideoEnded}
          className="w-full h-auto max-h-[82vh] sm:max-h-[88vh] max-w-[95vw] object-contain select-none pointer-events-none outline-none border-none bg-black theme-logo"
          style={{
            mixBlendMode: "screen",
          }}
        />
      </div>

      {/* Subtle Bottom Tip if sound is muted */}
      {muted && !hasInteractedSound && (
        <div className="pointer-events-none absolute bottom-4 sm:bottom-8 z-40 flex items-center gap-2 rounded-full border border-border bg-black/75 px-3 py-1 sm:px-4 sm:py-1.5 text-[10px] sm:text-xs text-primary backdrop-blur-md animate-pulse max-w-[92vw] text-center">
          <Volume2 className="h-3.5 w-3.5 shrink-0 text-primary" />
          <span className="truncate">Tap anywhere to unmute roar sound</span>
        </div>
      )}
    </div>
  );
}