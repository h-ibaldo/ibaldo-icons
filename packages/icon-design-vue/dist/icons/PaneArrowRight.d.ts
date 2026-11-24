import type { DefineComponent } from 'vue';

export interface PaneArrowRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const PaneArrowRight: DefineComponent<PaneArrowRightProps>;

export default PaneArrowRight;
export { PaneArrowRight };
