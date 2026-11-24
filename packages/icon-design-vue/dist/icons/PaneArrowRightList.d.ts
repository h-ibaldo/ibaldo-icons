import type { DefineComponent } from 'vue';

export interface PaneArrowRightListProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaneArrowRightList: DefineComponent<PaneArrowRightListProps>;

export default PaneArrowRightList;
export { PaneArrowRightList };
