import type { DefineComponent } from 'vue';

export interface LaptopWrenchFlatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LaptopWrenchFlat: DefineComponent<LaptopWrenchFlatProps>;

export default LaptopWrenchFlat;
export { LaptopWrenchFlat };
