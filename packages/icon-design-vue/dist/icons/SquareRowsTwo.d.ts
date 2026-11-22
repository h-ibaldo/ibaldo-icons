import type { DefineComponent } from 'vue';

export interface SquareRowsTwoProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareRowsTwo: DefineComponent<SquareRowsTwoProps>;

export default SquareRowsTwo;
export { SquareRowsTwo };
