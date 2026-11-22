import type { DefineComponent } from 'vue';

export interface SquareColumnsThreeDashedProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SquareColumnsThreeDashed: DefineComponent<SquareColumnsThreeDashedProps>;

export default SquareColumnsThreeDashed;
export { SquareColumnsThreeDashed };
