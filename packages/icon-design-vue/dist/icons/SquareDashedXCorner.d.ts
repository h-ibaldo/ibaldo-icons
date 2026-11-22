import type { DefineComponent } from 'vue';

export interface SquareDashedXCornerProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareDashedXCorner: DefineComponent<SquareDashedXCornerProps>;

export default SquareDashedXCorner;
export { SquareDashedXCorner };
