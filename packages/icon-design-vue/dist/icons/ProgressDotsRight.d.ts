import type { DefineComponent } from 'vue';

export interface ProgressDotsRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ProgressDotsRight: DefineComponent<ProgressDotsRightProps>;

export default ProgressDotsRight;
export { ProgressDotsRight };
