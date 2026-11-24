import type { DefineComponent } from 'vue';

export interface ArrowRepeatCompactProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowRepeatCompact: DefineComponent<ArrowRepeatCompactProps>;

export default ArrowRepeatCompact;
export { ArrowRepeatCompact };
