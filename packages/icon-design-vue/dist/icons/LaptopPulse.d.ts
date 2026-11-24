import type { DefineComponent } from 'vue';

export interface LaptopPulseProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LaptopPulse: DefineComponent<LaptopPulseProps>;

export default LaptopPulse;
export { LaptopPulse };
