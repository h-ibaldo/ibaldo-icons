import type { DefineComponent } from 'vue';

export interface LaptopStoreFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LaptopStoreFlat: DefineComponent<LaptopStoreFlatProps>;

export default LaptopStoreFlat;
export { LaptopStoreFlat };
