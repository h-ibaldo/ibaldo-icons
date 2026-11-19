import type { DefineComponent } from 'vue';

export interface GearSearchLargeProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearSearchLarge: DefineComponent<GearSearchLargeProps>;

export default GearSearchLarge;
export { GearSearchLarge };
