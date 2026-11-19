import type { DefineComponent } from 'vue';

export interface HotspotSidesProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HotspotSides: DefineComponent<HotspotSidesProps>;

export default HotspotSides;
export { HotspotSides };
