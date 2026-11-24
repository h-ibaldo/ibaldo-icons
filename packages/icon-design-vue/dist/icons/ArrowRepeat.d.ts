import type { DefineComponent } from 'vue';

export interface ArrowRepeatProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number | string;
}

declare const ArrowRepeat: DefineComponent<ArrowRepeatProps>;

export default ArrowRepeat;
export { ArrowRepeat };
