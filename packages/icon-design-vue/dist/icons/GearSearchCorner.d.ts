import type { DefineComponent } from 'vue';

export interface GearSearchCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearSearchCorner: DefineComponent<GearSearchCornerProps>;

export default GearSearchCorner;
export { GearSearchCorner };
