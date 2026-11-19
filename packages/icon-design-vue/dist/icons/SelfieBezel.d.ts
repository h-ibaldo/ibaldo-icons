import type { DefineComponent } from 'vue';

export interface SelfieBezelProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SelfieBezel: DefineComponent<SelfieBezelProps>;

export default SelfieBezel;
export { SelfieBezel };
