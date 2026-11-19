import type { DefineComponent } from 'vue';

export interface ArrowLeftRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowLeftRight: DefineComponent<ArrowLeftRightProps>;

export default ArrowLeftRight;
export { ArrowLeftRight };
