import type { DefineComponent } from 'vue';

export interface ArrowUpDownCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowUpDownCircle: DefineComponent<ArrowUpDownCircleProps>;

export default ArrowUpDownCircle;
export { ArrowUpDownCircle };
