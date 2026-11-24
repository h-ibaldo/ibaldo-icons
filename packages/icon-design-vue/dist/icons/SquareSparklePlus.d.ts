import type { DefineComponent } from 'vue';

export interface SquareSparklePlusProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareSparklePlus: DefineComponent<SquareSparklePlusProps>;

export default SquareSparklePlus;
export { SquareSparklePlus };
