import type { DefineComponent } from 'vue';

export interface ArrowUpSlimProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowUpSlim: DefineComponent<ArrowUpSlimProps>;

export default ArrowUpSlim;
export { ArrowUpSlim };
