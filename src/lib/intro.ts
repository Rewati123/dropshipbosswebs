export const INTRO_STORAGE_KEY = "dropshipboss-intro-seen";

export function replayIntro() {
  if (typeof window !== "undefined") {
    sessionStorage.removeItem(INTRO_STORAGE_KEY);
    window.dispatchEvent(new CustomEvent("replay-dropship-intro"));
  }
}
