import type { DefineComponent } from 'vue';

export interface LaptopBagCenterFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LaptopBagCenterFlat: DefineComponent<LaptopBagCenterFlatProps>;

export default LaptopBagCenterFlat;
export { LaptopBagCenterFlat };
