import type { DefineComponent } from 'vue';

export interface LaptopHandProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LaptopHand: DefineComponent<LaptopHandProps>;

export default LaptopHand;
export { LaptopHand };
