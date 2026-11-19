import type { DefineComponent } from 'vue';

export interface ChevronDownRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ChevronDownRight: DefineComponent<ChevronDownRightProps>;

export default ChevronDownRight;
export { ChevronDownRight };
