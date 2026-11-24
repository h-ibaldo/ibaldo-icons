import type { DefineComponent } from 'vue';

export interface GearWrenchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearWrench: DefineComponent<GearWrenchProps>;

export default GearWrench;
export { GearWrench };
