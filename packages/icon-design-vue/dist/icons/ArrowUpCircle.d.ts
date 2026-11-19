import type { DefineComponent } from 'vue';

export interface ArrowUpCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowUpCircle: DefineComponent<ArrowUpCircleProps>;

export default ArrowUpCircle;
export { ArrowUpCircle };
