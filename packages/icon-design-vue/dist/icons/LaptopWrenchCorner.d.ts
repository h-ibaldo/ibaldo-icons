import type { DefineComponent } from 'vue';

export interface LaptopWrenchCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const LaptopWrenchCorner: DefineComponent<LaptopWrenchCornerProps>;

export default LaptopWrenchCorner;
export { LaptopWrenchCorner };
