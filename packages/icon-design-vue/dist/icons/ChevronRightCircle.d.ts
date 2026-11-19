import type { DefineComponent } from 'vue';

export interface ChevronRightCircleProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChevronRightCircle: DefineComponent<ChevronRightCircleProps>;

export default ChevronRightCircle;
export { ChevronRightCircle };
