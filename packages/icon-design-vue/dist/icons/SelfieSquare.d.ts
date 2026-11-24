import type { DefineComponent } from 'vue';

export interface SelfieSquareProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SelfieSquare: DefineComponent<SelfieSquareProps>;

export default SelfieSquare;
export { SelfieSquare };
