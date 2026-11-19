import type { DefineComponent } from 'vue';

export interface CircleGridMarksProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const CircleGridMarks: DefineComponent<CircleGridMarksProps>;

export default CircleGridMarks;
export { CircleGridMarks };
