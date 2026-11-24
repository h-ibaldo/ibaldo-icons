import type { DefineComponent } from 'vue';

export interface GearSearchDownProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearSearchDown: DefineComponent<GearSearchDownProps>;

export default GearSearchDown;
export { GearSearchDown };
