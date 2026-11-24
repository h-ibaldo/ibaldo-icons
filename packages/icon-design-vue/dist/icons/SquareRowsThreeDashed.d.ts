import type { DefineComponent } from 'vue';

export interface SquareRowsThreeDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareRowsThreeDashed: DefineComponent<SquareRowsThreeDashedProps>;

export default SquareRowsThreeDashed;
export { SquareRowsThreeDashed };
