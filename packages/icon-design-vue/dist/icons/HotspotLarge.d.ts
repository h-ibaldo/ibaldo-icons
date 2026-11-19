import type { DefineComponent } from 'vue';

export interface HotspotLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HotspotLarge: DefineComponent<HotspotLargeProps>;

export default HotspotLarge;
export { HotspotLarge };
