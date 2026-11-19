import type { DefineComponent } from 'vue';

export interface LaptopCartFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LaptopCartFlat: DefineComponent<LaptopCartFlatProps>;

export default LaptopCartFlat;
export { LaptopCartFlat };
