import type { DefineComponent } from 'vue';

export interface ChevronLeftCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChevronLeftCircle: DefineComponent<ChevronLeftCircleProps>;

export default ChevronLeftCircle;
export { ChevronLeftCircle };
