import type { DefineComponent } from 'vue';

export interface SquareLinesLeftProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareLinesLeft: DefineComponent<SquareLinesLeftProps>;

export default SquareLinesLeft;
export { SquareLinesLeft };
