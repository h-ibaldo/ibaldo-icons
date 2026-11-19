import type { DefineComponent } from 'vue';

export interface ChevronUpRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChevronUpRight: DefineComponent<ChevronUpRightProps>;

export default ChevronUpRight;
export { ChevronUpRight };
