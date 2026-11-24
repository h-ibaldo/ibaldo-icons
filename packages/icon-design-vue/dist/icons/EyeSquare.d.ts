import type { DefineComponent } from 'vue';

export interface EyeSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const EyeSquare: DefineComponent<EyeSquareProps>;

export default EyeSquare;
export { EyeSquare };
