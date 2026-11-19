import type { DefineComponent } from 'vue';

export interface GearStackProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearStack: DefineComponent<GearStackProps>;

export default GearStack;
export { GearStack };
