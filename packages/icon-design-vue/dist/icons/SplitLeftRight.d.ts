import type { DefineComponent } from 'vue';

export interface SplitLeftRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const SplitLeftRight: DefineComponent<SplitLeftRightProps>;

export default SplitLeftRight;
export { SplitLeftRight };
