import type { DefineComponent } from 'vue';

export interface SquaresUniteProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquaresUnite: DefineComponent<SquaresUniteProps>;

export default SquaresUnite;
export { SquaresUnite };
