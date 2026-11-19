import type { DefineComponent } from 'vue';

export interface GearAngledProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const GearAngled: DefineComponent<GearAngledProps>;

export default GearAngled;
export { GearAngled };
