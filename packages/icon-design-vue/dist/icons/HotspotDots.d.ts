import type { DefineComponent } from 'vue';

export interface HotspotDotsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HotspotDots: DefineComponent<HotspotDotsProps>;

export default HotspotDots;
export { HotspotDots };
