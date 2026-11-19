import type { DefineComponent } from 'vue';

export interface LaptopWrenchProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LaptopWrench: DefineComponent<LaptopWrenchProps>;

export default LaptopWrench;
export { LaptopWrench };
