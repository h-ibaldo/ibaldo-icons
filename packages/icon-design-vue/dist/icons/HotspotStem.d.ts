import type { DefineComponent } from 'vue';

export interface HotspotStemProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HotspotStem: DefineComponent<HotspotStemProps>;

export default HotspotStem;
export { HotspotStem };
