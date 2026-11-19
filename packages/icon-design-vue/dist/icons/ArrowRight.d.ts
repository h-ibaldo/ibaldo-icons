import type { DefineComponent } from 'vue';

export interface ArrowRightProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowRight: DefineComponent<ArrowRightProps>;

export default ArrowRight;
export { ArrowRight };
