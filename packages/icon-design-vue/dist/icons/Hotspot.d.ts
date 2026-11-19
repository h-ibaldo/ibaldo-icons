import type { DefineComponent } from 'vue';

export interface HotspotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Hotspot: DefineComponent<HotspotProps>;

export default Hotspot;
export { Hotspot };
