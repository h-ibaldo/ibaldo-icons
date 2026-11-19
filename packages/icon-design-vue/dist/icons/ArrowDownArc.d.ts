import type { DefineComponent } from 'vue';

export interface ArrowDownArcProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowDownArc: DefineComponent<ArrowDownArcProps>;

export default ArrowDownArc;
export { ArrowDownArc };
