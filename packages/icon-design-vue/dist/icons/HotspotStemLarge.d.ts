import type { DefineComponent } from 'vue';

export interface HotspotStemLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HotspotStemLarge: DefineComponent<HotspotStemLargeProps>;

export default HotspotStemLarge;
export { HotspotStemLarge };
