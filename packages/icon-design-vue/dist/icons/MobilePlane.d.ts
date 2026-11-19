import type { DefineComponent } from 'vue';

export interface MobilePlaneProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MobilePlane: DefineComponent<MobilePlaneProps>;

export default MobilePlane;
export { MobilePlane };
