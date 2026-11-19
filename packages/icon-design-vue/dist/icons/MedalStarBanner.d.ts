import type { DefineComponent } from 'vue';

export interface MedalStarBannerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MedalStarBanner: DefineComponent<MedalStarBannerProps>;

export default MedalStarBanner;
export { MedalStarBanner };
