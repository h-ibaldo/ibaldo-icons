import type { DefineComponent } from 'vue';

export interface GearMultipleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearMultiple: DefineComponent<GearMultipleProps>;

export default GearMultiple;
export { GearMultiple };
