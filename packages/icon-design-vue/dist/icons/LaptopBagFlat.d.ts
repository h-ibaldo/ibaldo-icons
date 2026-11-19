import type { DefineComponent } from 'vue';

export interface LaptopBagFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LaptopBagFlat: DefineComponent<LaptopBagFlatProps>;

export default LaptopBagFlat;
export { LaptopBagFlat };
