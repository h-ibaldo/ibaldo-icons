import type { DefineComponent } from 'vue';

export interface SquareDashedXProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareDashedX: DefineComponent<SquareDashedXProps>;

export default SquareDashedX;
export { SquareDashedX };
