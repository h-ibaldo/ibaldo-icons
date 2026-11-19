import type { DefineComponent } from 'vue';

export interface ChevronRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChevronRight: DefineComponent<ChevronRightProps>;

export default ChevronRight;
export { ChevronRight };
