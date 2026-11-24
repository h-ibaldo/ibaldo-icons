import type { DefineComponent } from 'vue';

export interface SealBannerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SealBanner: DefineComponent<SealBannerProps>;

export default SealBanner;
export { SealBanner };
