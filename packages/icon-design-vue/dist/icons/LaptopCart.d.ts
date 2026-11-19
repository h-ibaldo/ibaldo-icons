import type { DefineComponent } from 'vue';

export interface LaptopCartProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LaptopCart: DefineComponent<LaptopCartProps>;

export default LaptopCart;
export { LaptopCart };
