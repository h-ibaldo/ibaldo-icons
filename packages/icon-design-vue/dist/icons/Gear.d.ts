import type { DefineComponent } from 'vue';

export interface GearProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const Gear: DefineComponent<GearProps>;

export default Gear;
export { Gear };
