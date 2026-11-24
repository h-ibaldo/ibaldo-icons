import type { DefineComponent } from 'vue';

export interface HotspotSidesLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HotspotSidesLarge: DefineComponent<HotspotSidesLargeProps>;

export default HotspotSidesLarge;
export { HotspotSidesLarge };
