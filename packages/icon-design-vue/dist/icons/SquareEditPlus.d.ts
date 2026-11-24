import type { DefineComponent } from 'vue';

export interface SquareEditPlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareEditPlus: DefineComponent<SquareEditPlusProps>;

export default SquareEditPlus;
export { SquareEditPlus };
