import type { DefineComponent } from 'vue';

export interface LaptopBagProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LaptopBag: DefineComponent<LaptopBagProps>;

export default LaptopBag;
export { LaptopBag };
