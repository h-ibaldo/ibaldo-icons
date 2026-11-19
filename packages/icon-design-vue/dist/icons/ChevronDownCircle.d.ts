import type { DefineComponent } from 'vue';

export interface ChevronDownCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChevronDownCircle: DefineComponent<ChevronDownCircleProps>;

export default ChevronDownCircle;
export { ChevronDownCircle };
