import type { DefineComponent } from 'vue';

export interface ArrowDownCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowDownCircle: DefineComponent<ArrowDownCircleProps>;

export default ArrowDownCircle;
export { ArrowDownCircle };
