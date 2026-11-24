import type { DefineComponent } from 'vue';

export interface SquareDoubleArrowUpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareDoubleArrowUp: DefineComponent<SquareDoubleArrowUpProps>;

export default SquareDoubleArrowUp;
export { SquareDoubleArrowUp };
