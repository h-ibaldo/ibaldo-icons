import type { DefineComponent } from 'vue';

export interface HotspotSidesStemProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const HotspotSidesStem: DefineComponent<HotspotSidesStemProps>;

export default HotspotSidesStem;
export { HotspotSidesStem };
