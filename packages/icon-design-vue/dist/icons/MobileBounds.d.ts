import type { DefineComponent } from 'vue';

export interface MobileBoundsProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const MobileBounds: DefineComponent<MobileBoundsProps>;

export default MobileBounds;
export { MobileBounds };
