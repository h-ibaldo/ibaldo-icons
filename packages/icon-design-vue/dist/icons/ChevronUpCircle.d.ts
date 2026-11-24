import type { DefineComponent } from 'vue';

export interface ChevronUpCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChevronUpCircle: DefineComponent<ChevronUpCircleProps>;

export default ChevronUpCircle;
export { ChevronUpCircle };
