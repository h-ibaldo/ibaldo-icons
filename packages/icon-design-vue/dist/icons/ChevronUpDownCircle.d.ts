import type { DefineComponent } from 'vue';

export interface ChevronUpDownCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChevronUpDownCircle: DefineComponent<ChevronUpDownCircleProps>;

export default ChevronUpDownCircle;
export { ChevronUpDownCircle };
