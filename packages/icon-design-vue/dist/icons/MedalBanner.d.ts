import type { DefineComponent } from 'vue';

export interface MedalBannerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MedalBanner: DefineComponent<MedalBannerProps>;

export default MedalBanner;
export { MedalBanner };
