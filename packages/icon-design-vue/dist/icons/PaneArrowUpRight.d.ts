import type { DefineComponent } from 'vue';

export interface PaneArrowUpRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaneArrowUpRight: DefineComponent<PaneArrowUpRightProps>;

export default PaneArrowUpRight;
export { PaneArrowUpRight };
