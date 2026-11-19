import type { DefineComponent } from 'vue';

export interface SquareStackPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareStackPlus: DefineComponent<SquareStackPlusProps>;

export default SquareStackPlus;
export { SquareStackPlus };
