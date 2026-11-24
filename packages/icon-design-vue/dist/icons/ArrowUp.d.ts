import type { DefineComponent } from 'vue';

export interface ArrowUpProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowUp: DefineComponent<ArrowUpProps>;

export default ArrowUp;
export { ArrowUp };
