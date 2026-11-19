import type { DefineComponent } from 'vue';

export interface HotspotDotsLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HotspotDotsLarge: DefineComponent<HotspotDotsLargeProps>;

export default HotspotDotsLarge;
export { HotspotDotsLarge };
