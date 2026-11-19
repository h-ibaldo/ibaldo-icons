import type { DefineComponent } from 'vue';

export interface SquareDotProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareDot: DefineComponent<SquareDotProps>;

export default SquareDot;
export { SquareDot };
